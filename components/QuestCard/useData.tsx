import { rewardsAtom } from '@/atoms/rewards-atom';
import { IQuestRewards } from '@/interfaces/quests';
import { useSetAtom } from 'jotai';

import { useRouter } from 'next/navigation';

export const useData = () => {
	const setRewards = useSetAtom(rewardsAtom);

	const router = useRouter();

	const airdropRewards = (rewards: IQuestRewards) => {
		setRewards((state) => ({
			gold: state.gold + rewards.gold,
			exp: state.exp + rewards.expPoints
		}));

		router.back();
	};

	const goBack = () => {
		router.back();
	};

	return {
		airdropRewards,
		goBack
	};
};
