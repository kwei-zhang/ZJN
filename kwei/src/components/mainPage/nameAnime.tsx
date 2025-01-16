import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay: 0.5 * i, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay: 0.5 * i, duration: 0.01 }
        }
    })
};

export function NameAnime() {
    return (
        <motion.svg
            width="1500"
            height="200"
            viewBox="0 0 1200 600"
            initial="hidden"
            animate="visible"
            className="w-full h-full"
        >
            {/* change color to purple-500 */}
            {/* Letter Z */}
            <motion.line
                x1="10"
                y1="102.5"
                x2="305"
                y2="102.5"
                stroke="#a855f7"
                strokeWidth="50"
                strokeLinecap="round"
                variants={draw}
                custom={0}
            />
            <motion.line
                x1="302.5"
                y1="110"
                x2="12.5"
                y2="490"
                stroke="#a855f7"
                strokeWidth="50"
                strokeLinecap="round"
                variants={draw}
                custom={1}
            />
            <motion.line
                x1="10"
                y1="497.5"
                x2="305"
                y2="497.5"
                stroke="#a855f7"
                strokeWidth="50"
                strokeLinecap="round"
                variants={draw}
                custom={2}
            />

            {/* Letter J */}
            <motion.line
                x1="510"
                y1="102.5"
                x2="805"
                y2="102.5"
                stroke="#a855f7"
                strokeWidth="50"
                strokeLinecap="round"
                variants={draw}
                custom={0}
            />
            <motion.path
                d="M 657.5 102.5 L 657.5 380 Q 657.5 477.5, 547.5 477.5"
                stroke="#a855f7"
                strokeWidth="50"
                strokeLinecap="round"
                fill="transparent"
                variants={draw}
                custom={1}
            />

            {/* Letter N */}
            <motion.line
                x1="1002.5"
                y1="110"
                x2="1002.5"
                y2="490"
                stroke="#a855f7"
                strokeWidth="50"
                strokeLinecap="round"
                variants={draw}
                custom={0}
            />
            <motion.line
                x1="1010"
                y1="110"
                x2="1290"
                y2="490"
                stroke="#a855f7"
                strokeWidth="50"
                strokeLinecap="round"
                variants={draw}
                custom={1}
            />
            <motion.line
                x1="1297.5"
                y1="490"
                x2="1297.5"
                y2="110"
                stroke="#a855f7"
                strokeWidth="50"
                strokeLinecap="round"
                variants={draw}
                custom={2}
            />
        </motion.svg>
    )
}