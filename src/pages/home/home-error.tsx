import { useGetRandomPhoto } from "@/api/photos/queries/random-photo";
import { Button } from "@/components/ui/button";

export function HomeError() {
	const { refetch } = useGetRandomPhoto(30);
	return (
		<section
			className="max-h-[65vh] px-5 flex items-center justify-center"
			aria-label="Error message"
		>
			<div className="text-center max-w-lg space-y-6 p-8 rounded-lg bg-card ">
				<div className="space-y-2">
					<h2 className="font-semibold text-3xl text-foreground">
						Oops! Something went wrong
					</h2>
					<p className="text-muted-foreground text-lg">
						We couldn't load the photos right now.
						<br />
						Please check your connection and try again.
					</p>
				</div>
				<Button onClick={() => refetch()} size="lg">
					Try Again
				</Button>
			</div>
		</section>
	);
}
