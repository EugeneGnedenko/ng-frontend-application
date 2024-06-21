import { expReward, goldReward, rewardsAtom } from '@/atoms/rewards-atom';
import { useAtomValue } from 'jotai';

export const useData = () => {
	const rewards = useAtomValue(rewardsAtom);

	return {
		rewards
	};
};
