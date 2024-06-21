'use client';
import { QueryKeys } from '@/constants/query';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const fetchQuest = async (slug: string) => {
	const response = await fetch(`/api/quest?questSlug=${slug}`);
	return response.json();
};

export const useData = (slug: string) => {
	const quest = useQuery({
		queryKey: [QueryKeys.GET_QUESTS_BY_ID, slug],
		queryFn: () => fetchQuest(slug)
	});
	return { quest };
};
