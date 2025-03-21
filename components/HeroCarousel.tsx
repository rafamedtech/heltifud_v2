"use client";

import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const carouselItems = [
  {
    id: 1,
    title: "Slide 1",
    image: "/hero1.jpeg",
  },
  {
    id: 2,
    title: "Slide 2",
    image: "/hero2.jpeg",
  },
  {
    id: 3,
    title: "Slide 3",
    image: "/hero3.jpeg",
  },
  {
    id: 4,
    title: "Slide 4",
    image: "/hero2.jpeg",
  },
];

export default function HeroCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full px-8 md:max-w-sm"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent className="flex items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full rounded-lg shadow-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
