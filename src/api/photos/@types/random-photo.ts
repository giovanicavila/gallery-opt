type LocationType = {
	name: string;
	city: string;
	country: string;
};

export type RandomPhotoResponseType = {
	id: string;
	created_at: string;
	updated_at: string;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	downloads: number;
	likes: number;
	liked_by_user: boolean;
	description: string | null;
	location: LocationType;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
	}
	alt_description: string;
};
