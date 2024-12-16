import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { InfoCardZJN } from "./infoCard"
import { InfoCardEDU } from "./infoCard"
import { InfoCardWORK } from "./infoCard"

export function CarouselComponent() {
    return(<Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-8/12 opacity-75"
      >
        <CarouselContent>
          <CarouselItem className="basis">
            <InfoCardZJN />
          </CarouselItem>
          <CarouselItem className="basis">
            <InfoCardEDU />
          </CarouselItem>
          <CarouselItem className="basis">
            <InfoCardWORK />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      )
}