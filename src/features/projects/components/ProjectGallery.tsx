import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useRef } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
  id: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const enhanceGalleryHover = () => {
      if (!galleryRef.current || typeof gsap === 'undefined') return;

      // Enhance carousel navigation buttons
      const navButtons = galleryRef.current.querySelectorAll(
        '.CarouselPrevious, .CarouselNext'
      );
      navButtons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.2,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });

      // Enhance carousel items
      const carouselItems =
        galleryRef.current.querySelectorAll('.CarouselItem');
      carouselItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.03,
            duration: 0.4,
            ease: 'power2.out',
          });

          // Animate the card inside
          const card = item.querySelector('Card');
          if (card) {
            gsap.to(card, {
              y: -4,
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          });

          // Reset card position
          const card = item.querySelector('Card');
          if (card) {
            gsap.to(card, {
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          }
        });
      });
    };

    // Run after component mounts
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', enhanceGalleryHover);
      } else {
        enhanceGalleryHover();
      }
    }
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto" ref={galleryRef}>
      <Carousel
        className="w-full md:ml-12"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1 not-prose">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1 relative">
              <div>
                <Card>
                  <CardContent className="p-2">
                    <AspectRatio ratio={16 / 9} className="h-fit w-fit content-center items-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full content-center items-center rounded-md object-cover"
                        width={400}
                        height={225}
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
