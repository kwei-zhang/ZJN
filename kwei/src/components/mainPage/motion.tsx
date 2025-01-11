import { motion } from "framer-motion"
import { ZJNAvatarLarge } from "../avatar"

const ORBIT_IMAGES_1 = [
    {
        src: "/ts.svg",
        delay: "0s"
    },
    {
        src: "/trpc.svg",
        delay: "-2.67s"  // Offset by 1/3 of duration for 120° spacing
    },
    {
        src: "/js.svg",
        delay: "-5.33s"  // Offset by 2/3 of duration for 240° spacing
    }
];

const ORBIT_IMAGES_2 = [
    {
        src: "/react.svg",
        delay: "0s"
    },
    {
        src: "/angular.svg",
        delay: "-2.4s"
    },
    {
        src: "/redis.svg",
        delay: "-4.8s"
    },
    {
        src: "/node.svg",
        delay: "-7.2s"
    },
    {
        src: "/postgres.svg",
        delay: "-9.6s"
    }
]

const ORBIT_IMAGES_3 = [
    {
        src: "/python.svg",
        delay: "0s"
    },
    {
        src: "/java.svg",
        delay: "-2.67s"
    },
    {
        src: "/c.svg",
        delay: "-5.33s"
    },
    {
        src: "/go.svg",
        delay: "-8s"
    },
    {
        src: "/rust.svg",
        delay: "-10.67s"
    },
    {
        src: "/kotlin.svg",
        delay: "-13.33s"
    },
    {
        src: "/ruby.svg",
        delay: "-16s"
    }
]

export function MotionCircleSmall() {
    return (
        <div className="container relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
                {/* Add this path element to show the orbit */}
                <path
                    d="M 225 50 A 175 175 0 1 0 225 400 A 175 175 0 1 0 225 50"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"  // Light white color
                    strokeWidth="2"
                />
                
                {ORBIT_IMAGES_1.map((image, index) => (
                    <motion.image
                        key={index}
                        href={image.src}
                        width="40"
                        height="40"
                        x="-20"
                        y="-20"
                    >
                        <animateMotion
                            dur="8s"
                            repeatCount="indefinite"
                            path="M 225 50 A 175 175 0 1 0 225 400 A 175 175 0 1 0 225 50"
                            begin={image.delay}
                        />
                    </motion.image>
                ))}
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ZJNAvatarLarge />
            </div>
        </div>
    );
}

// larger circle
export function MotionCircleMedium() {
    return (
        <div className="container">
            <svg xmlns="http://www.w3.org/2000/svg" width="601" height="587">
                {/* Add this path element to show the orbit */}
                <path
                    d="M 300 50 A 250 250 0 1 0 300 550 A 250 250 0 1 0 300 50"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"  // Light white color
                    strokeWidth="2"
                />
                
                {ORBIT_IMAGES_2.map((image, index) => (
                    <motion.image
                        key={index}
                        href={image.src}
                        width="40"
                        height="40"
                        x="-20"
                        y="-20"
                    >
                        <animateMotion
                            dur="12s"
                            repeatCount="indefinite"
                            path="M 300 50 A 250 250 0 1 0 300 550 A 250 250 0 1 0 300 50"
                            begin={image.delay}
                        />
                    </motion.image>
                ))}
            </svg>
        </div>
    );
}

// larger circle
export function MotionCircleLarge() {
    return (
        <div className="container">
            <svg xmlns="http://www.w3.org/2000/svg" width="751" height="737">
                {/* Add this path element to show the orbit */}
                <path
                    d="M 375 50 A 325 325 0 1 0 375 700 A 325 325 0 1 0 375 50"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.2)"  // Light white color
                    strokeWidth="2"
                />
                
                {ORBIT_IMAGES_3.map((image, index) => (
                    <motion.image
                        key={index}
                        href={image.src}
                        width="40"
                        height="40"
                        x="-20"
                        y="-20"
                    >
                        <animateMotion
                            dur="16s"
                            repeatCount="indefinite"
                            path="M 375 50 A 325 325 0 1 0 375 700 A 325 325 0 1 0 375 50"
                            begin={image.delay}
                        />
                    </motion.image>
                ))}
            </svg>
        </div>
    );
}