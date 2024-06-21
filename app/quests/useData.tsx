import { QueryKeys } from '@/constants/query';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const fetchQuests = async () => {
	const response = await fetch('/api/quests');
	return response.json();
};

export const useData = () => {
	const { push } = useRouter();

	const quests = useQuery({
		queryKey: [QueryKeys.GET_ALL_QUESTS],
		queryFn: fetchQuests
	});

	const onClick = (slug: string) => {
		push(`/quests/${slug}`);
	};

	return {
		quests,
		onClick
	};
};
