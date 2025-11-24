import { AspectRatio } from "@/components/ui/aspect-ratio";

export function HomeSkeleton() {
	return (
		<section
			className="max-h-[65vh] px-5 overflow-y-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
			aria-label="Loading photos"
		>
			{Array.from({ length: 30 }, (_, index) => index).map((id) => (
				<div key={`skeleton-${id}`} className="rounded-md">
					<AspectRatio
						ratio={16 / 9}
						className="bg-muted rounded-md overflow-hidden relative"
					>
						<div className="absolute inset-0 bg-linear-to-r from-transparent via-foreground/10 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
					</AspectRatio>
				</div>
			))}
		</section>
	);
}
