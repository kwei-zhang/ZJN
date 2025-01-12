import { MotionWrapperVertical } from "@/components/motion";
import { Separator } from "@/components/ui/separator";

export default function Messages() {
    return (
        <>
        <MotionWrapperVertical>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Messages board
            </h2>
            <p className="text-muted-foreground">
                Feel free to leave a message here, share your thoughts and ideas.
            </p>
            
        </MotionWrapperVertical>

        <Separator className="w-10/12 m-4" />

        <MotionWrapperVertical delay={0.6}>
        TBA
        </MotionWrapperVertical>
        </>
    )
}