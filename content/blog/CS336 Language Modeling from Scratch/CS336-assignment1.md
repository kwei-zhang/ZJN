---
title: "CS336 Language Modeling from Scratch: Assignment 1"
date: "2026-06-14"
description: "Implementation notes on training a byte-level BPE tokenizer from scratch."
tags: ["Transformers", "NLP"]
---

> The code for this assignment is available [here](https://github.com/kwei-learning/cs336-assignment1-basics).

## BPE Tokenizer

This assignment implements a byte-level Byte Pair Encoding (BPE) tokenizer from scratch. The tokenizer starts with all possible byte values, repeatedly merges frequent adjacent byte sequences, and produces a vocabulary that can represent text as a sequence of learned tokens.

### Step 1: Initialize the vocabulary

All 256 single-byte values are assigned ids from 0 to 255. Special tokens, such as `<|endoftext|>`, are then appended to the vocabulary. These special tokens are kept whole and never participate in merges.

### Step 2: Pre-tokenize the corpus

First, the text is split into "pre-tokens" using the GPT-2 regular expression:

```
PAT = r"""'(?:[sdmt]|ll|ve|re)| ?\p{L}+| ?\p{N}+| ?[^\s\p{L}\p{N}]+|\s+(?!\S)|\s+"""
```

Pre-tokenization constrains merges so that they occur only within a single pre-token, rather than across word boundaries. This prevents the tokenizer from learning low-quality tokens that span unrelated words. For example, if `dog` is followed by ` cat`, we do not want the model to learn a merged token such as `dog c`; instead, the tokenizer should learn more meaningful units such as `dog` and `cat`.

This stage is naturally parallelizable because pre-tokenization does not depend on previous chunks of text. The corpus can be split into byte ranges at boundaries aligned with special tokens, ensuring that no pre-token is cut in half. Each worker counts the pre-tokens in its assigned chunk, and the resulting counters are combined at the end.

### Step 3: Run the merge loop

Until the vocabulary reaches `vocab_size`, we perform the following steps:

1. Select the most frequent adjacent token pair, breaking ties by choosing the lexicographically greatest pair.
2. Create a new token `merged = a + b`, add it to the vocabulary, and record the merge rule.
3. Rewrite every sequence containing the selected pair by replacing `a, b` with `merged`.

A naive implementation recomputes all pair counts from scratch after every merge. Although this approach is simple, it is too slow for large corpora because each iteration scans the entire dataset again. To make the merge loop more efficient, I used a max heap to keep track of candidate token pairs by frequency. At each iteration, the heap provides the current highest-frequency pair, while affected counts are updated after the merge instead of recomputing every pair globally.
