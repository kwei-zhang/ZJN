# A fun and useful terminal tool

Getting tired of remembering all the commands to fix your mistakes in the terminal? The F**k terminal tool is a tool that allows you to fix your mistakes in the terminal.

Wrong command? no worries

```bash
kaiwei@ZJNs-MBP ~ % gc a.c
zsh: command not found: gc
kaiwei@ZJNs-MBP ~ % fuck  
gcc a.c [enter/↑/↓/ctrl+c]            
```

Forgot sudo? thefuck got you covered

```bash
kaiwei@ZJNs-MBP ~ % rm -rf /
sudo: permission denied: rm
kaiwei@ZJNs-MBP ~ % fuck
sudo sudo rm -rf / [enter/↑/↓/ctrl+c]
```

and more use cases...

## Install thefuck

Im currently using macos, so here's a sample command to install thefuck. For other OS, please refer to the **[official website](https://github.com/nvbn/thefuck)**.

```bash
brew install thefuck
eval $(thefuck --alias)
```

This will add a `fuck` command to your terminal with basic usage. However, you can also add your own rules to thefuck.
Under this directory  `~/.config/thefuck/rules` , you can add your own rules.

To do this you need to define a python script with the following format:

```python
# match the command
def match(command):
    return 'git' in command.script

# get the correct command
def get_new_command(command):
    return 'git status'
```

## How does thefuck work?

TBA, I need to figure out first :smile:

## References

- [The Fuck](https://github.com/nvbn/thefuck)
- [Video well introduced thefuck](https://www.bilibili.com/video/BV1K4Q3Y1EhK/?spm_id_from=333.1296.top_right_bar_window_history.content.click&vd_source=bfb8641861968f335be997352f6202cd)
