export type Photo = {
	id: number;
	title: string;
	url: string;
	thumbnail: string;
	author: string;
	category: string;
	likes: number;
};

export type ViewMode = "grid" | "list";
