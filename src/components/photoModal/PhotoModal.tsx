import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface PhotoModalProps {
  photoId: number | null;
  open: boolean;
  onClose: () => void;
}

const GALLERY_PHOTOS = [
  {
    id: 1,
    title: "Modern Architecture",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=800&fit=crop",
  },
  {
    id: 2,
    title: "Pathway of books",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=800&fit=crop",
  },
  {
    id: 3,
    title: "City architecture",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&h=800&fit=crop",
  },
  {
    id: 4,
    title: "Agricultural landscape",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop",
  },
  {
    id: 5,
    title: "The interiors",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop",
  },
  {
    id: 6,
    title: "A miniature village",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=800&fit=crop",
  },
];

export function PhotoModal({ photoId, open, onClose }: PhotoModalProps) {
  const photo = GALLERY_PHOTOS.find((p) => p.id === photoId);

  if (!photo) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden border-none bg-transparent">
        <DialogTitle className="sr-only">{photo.title}</DialogTitle>
        <div className="relative w-full">
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-auto rounded-lg object-contain max-h-[85vh]"
          />
          <div className="absolute bottom-0 left-0 right-0  from-black/70 to-transparent p-6 rounded-b-lg">
            <h3 className="text-white text-2xl font-light tracking-wide">
              {photo.title}
            </h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}