import { useQuery } from "@tanstack/react-query";
import { getRandomPhoto } from "..";

export const useGetRandomPhoto = (count: number) => {
	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ["random-photo", count],
		queryFn: () => getRandomPhoto(count),
		staleTime: 1000 * 60 * 30, // 30 minutes
	});

	return { data, isLoading, isError, refetch };
};
