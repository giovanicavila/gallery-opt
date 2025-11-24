import api from "../base-url";
import type { RandomPhotoResponseType } from "./@types/random-photo";

export async function getRandomPhoto(
	count: number
): Promise<RandomPhotoResponseType[]> {
	const { data } = await api.get("/photos/random", { params: { count } });
	return data;
}
