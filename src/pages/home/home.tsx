import { useGetRandomPhoto } from "@/api/photos/queries/random-photo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Input } from "@/components/ui/input";
import { HomeError } from "./home-error";
import { HomeSkeleton } from "./home-skeleton";

export function HomePage() {
	const { data, isLoading, isError } = useGetRandomPhoto(30);

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
			{isLoading ? (
				<HomeSkeleton />
			) : //biome-ignore lint/style/noNestedTernary: improves readability
			isError ? (
				<HomeError />
			) : (
				<section
					className="max-h-[65vh] px-5 overflow-y-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
					aria-label="Photo grid"
				>
					{data?.map((photo) => (
						<button
							key={photo.id}
							type="button"
							className="text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
							aria-label={`View ${photo.alt_description}`}
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
									src={photo.urls.small}
									alt={photo.alt_description}
									height={500}
									width={500}
									className="h-full w-full rounded-lg object-cover"
									loading="lazy"
								/>
							</AspectRatio>
						</button>
					))}
				</section>
			)}
		</main>
	);
}
