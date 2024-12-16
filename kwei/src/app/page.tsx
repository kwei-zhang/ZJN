"use client"
import { CarouselComponent } from "@/components/mainPage/carusel";
import { MotionCircleSmall, MotionCircleMedium, MotionCircleLarge } from "@/components/mainPage/motion";
import { MotionWrapperVertical } from "@/components/motion";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center mx-auto w-full h-screen">
      <MotionWrapperVertical className="flex flex-col items-center justify-center w-11/12 z-10">
        <CarouselComponent />
      </MotionWrapperVertical>

      <MotionWrapperVertical delay={0.6} className="absolute z-0">
        <MotionCircleSmall />
      </MotionWrapperVertical>

      <MotionWrapperVertical delay={1} className="absolute z-0">
        <MotionCircleMedium />
      </MotionWrapperVertical>

      <MotionWrapperVertical delay={1.4} className="absolute z-0">
        <MotionCircleLarge />
      </MotionWrapperVertical>
    </div>
  );
}

