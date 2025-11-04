import { memo, useCallback, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

// Mock data - 6 photos like the example
const GALLERY_PHOTOS = [
  {
    id: 1,
    title: "Modern Architecture",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Pathway of books",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "City architecture",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Agricultural landscape",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "The interiors",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "A miniature village",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop",
  },
];

// Lazy Image Component with Intersection Observer
const LazyImage = memo(
  ({ src, alt, title }: { src: string; alt: string; title: string }) => {
    const [isLoaded, _setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useCallback((node: HTMLDivElement | null) => {
      if (!node) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.disconnect();
            }
          }
        },
        { rootMargin: "50px" }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={imgRef}
        className="group relative aspect-4/3 overflow-hidden bg-neutral-200"
      >
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-neutral-300" />
        )}
        {isInView && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            width="full"
            height="full"
            className={` h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute right-0 bottom-0 left-0 p-4">
          <h3 className="font-light text-sm text-white tracking-wide">
            {title}
          </h3>
        </div>
      </div>
    );
  }
);

LazyImage.displayName = "LazyImage";

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPhotos = useMemo(
    () =>
      GALLERY_PHOTOS.filter((photo) =>
        photo.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-light text-2xl text-neutral-900 tracking-wide">
          — GALLERY
        </h2>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search gallery..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPhotos.map((photo) => (
          <LazyImage
            key={photo.id}
            src={photo.image}
            alt={photo.title}
            title={photo.title}
          />
        ))}
      </div>

      {filteredPhotos.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-neutral-500">No photos found</p>
        </div>
      )}
    </main>
  );
}
