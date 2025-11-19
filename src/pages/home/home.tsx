import { Input } from "@/components/ui/input";
/* import { PhotoModal } from "@/components/photoModal/photo-modal";
import { GALLERY_PHOTOS } from "./mock-images"; */
import { CartComponent } from "./cart-compent";

export function HomePage() {
	/* const [openPhoto, setOpenPhoto] = useState(false);
  const [photoId, setPhotoId] = useState<number | null>(null); */

	/* const handleOpenPhoto = (id: number) => {
    setPhotoId(id);
    setOpenPhoto(true);
  }; */

	/*  const numberState = useState<number>(0); // tipo: [number, Dispatch<SetStateAction<number>>]

  const number = numberState[0];
  const setNumber = numberState[1];

  // uso
  setNumber((prev) => prev + 1); */

	return (
		<main>
			<div className="mb-8 flex items-center justify-between">
				<h2 className="font-light text-2xl text-foreground tracking-wide">
					— GALLERY
				</h2>
			</div>

			{/* Search Bar */}
			<div className="mb-8">
				<Input type="text" placeholder="Search gallery..." />
			</div>

			<CartComponent />

			{/* Gallery Grid */}
			{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {GALLERY_PHOTOS.map((photo) => (
          <AspectRatio
            key={photo.id}
            ratio={16 / 9}
            className="bg-muted rounded-md hover:scale-105 hover:brightness-75 hover:cursor-pointer transition-transform duration-200 ease-in-out overflow-hidden"
            onClick={() => handleOpenPhoto(photo.id)}
          >
            <img
              src={photo.image}
              alt={photo.title}
              height={500}
              width={500}
              className="h-full w-full rounded-lg object-cover"
            />
          </AspectRatio>
        ))}
      </div>
      {openPhoto && (
        <PhotoModal
          photoId={photoId}
          open={openPhoto}
          onClose={() => setOpenPhoto(false)}
        />
      )} */}
		</main>
	);
}
