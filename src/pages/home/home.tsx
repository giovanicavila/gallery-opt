import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { GALLERY_PHOTOS } from "./mock-images";

export function HomePage() {
	return (
		<main aria-label="Photo Gallery">
			<header className="mb-8 flex items-center justify-between">
				<h1 className="font-light text-2xl text-foreground tracking-wide">
					— GALLERY
				</h1>
			</header>

			{/* Search Bar */}
			<section className="mb-8" aria-label="Search">
				<label htmlFor="gallery-search" className="sr-only">
					Search gallery photos
				</label>
				<Input
					id="gallery-search"
					type="text"
					placeholder="Search gallery..."
					aria-label="Search photos in gallery"
				/>
			</section>

			{/* Gallery Grid */}
			<section
				className="max-h-[65vh] px-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
				aria-label="Photo grid"
			>
				{GALLERY_PHOTOS.map((photo) => (
					<button
						key={photo.id}
						type="button"
						className="text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
						aria-label={`View ${photo.title}`}
						onClick={() => {
							// TODO: Abrir modal com a foto
						}}
					>
						<AspectRatio
							// biome-ignore lint/style/noMagicNumbers: this is a common aspect ratio
							ratio={16 / 9}
							className="bg-muted rounded-md hover:scale-105 hover:brightness-75 transition-transform duration-200 ease-in-out overflow-hidden"
						>
							<img
								src={photo.image}
								alt={photo.title}
								height={500}
								width={500}
								className="h-full w-full rounded-lg object-cover"
								loading="lazy"
							/>
						</AspectRatio>
					</button>
				))}
			</section>
		</main>
	);
}
