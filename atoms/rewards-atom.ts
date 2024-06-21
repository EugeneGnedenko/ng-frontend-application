import { atomWithStorage } from 'jotai/utils';

export const rewardsAtom = atomWithStorage('rewards', {
	gold: 0,
	exp: 0
});
