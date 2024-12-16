"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { ZJNAvatarLarge } from "./avatar"

interface MotionWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function MotionWrapperVertical({ children, delay = 0.2, className }: MotionWrapperProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay }}
        >
            {children}
        </motion.div>
    )
}

export function MotionWrapperHorizontal({ children, delay = 0.2, className }: MotionWrapperProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay }}
        >
            {children}
        </motion.div>
    )
}   