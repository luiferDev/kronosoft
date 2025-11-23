import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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
  return (
    <div className="relative max-w-3xl mx-auto">
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
                    <AspectRatio ratio={16 / 9} className="h-full w-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full rounded-md object-cover"
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
