import { itemFrameStyles } from '@/styles/main';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px 20px 50px;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 145px;

	@media (min-width: 1024px) {
		height: 175px;
	}

	clip-path: polygon(
		5px 0px,
		calc(100% - 5px) 0px,
		/* Top corners */ 100% 5px,
		100% calc(100% - 5px),
		/* Right corners */ calc(100% - 5px) 100%,
		5px 100%,
		/* Bottom corners */ 0px calc(100% - 5px),
		0px 5px /* Left corners */
	);

	overflow: hidden;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	position: relative;

	padding: 0 3px;
	z-index: 1;
`;

export const TopBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

export const Block = styled.div``;

export const Rewards = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	gap: ${({ theme }) => theme.spacing['2xs']};
	margin-right: ${({ theme }) => theme.spacing.m};
	margin-top: 5px;

	@media (min-width: 1024px) {
		margin-top: 0;
	}
`;

export const Title = styled.h3`
	position: relative;
	z-index: 1;
	margin-top: 13px;
	margin-left: 3px;
	color: ${({ theme }) => theme.colors.white};
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;

	gap: 4px;
`;

export const InfoItem = styled.div`
	${itemFrameStyles};

	display: flex;
	align-items: center;

	padding: 8px 10px;
`;

export const Text = styled.p`
	font-size: ${({ theme }) => theme.fontSize.m};
	color: ${({ theme }) => theme.colors.white};
`;

export const RewardsItem = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;

	color: ${({ theme }) => theme.colors.white};
	margin-top: 6px;
`;

export const RewardsText = styled.h5`
	color: ${({ theme }) => theme.colors.white};
`;

type TDifficulty = {
	isActive: boolean;
};

export const Difficulty = styled.div<TDifficulty>`
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
	margin-right: 3px;
`;

export const Description = styled.p`
	color: ${({ theme }) => theme.colors.text};
	font-weight: 400;
	margin-top: 10px;
	line-height: 19px;
	font-size: ${({ theme }) => theme.fontSize.m};

	@media (min-width: 1024px) {
		font-size: ${({ theme }) => theme.fontSize.m};
		margin-bottom: 60px;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	gap: 10px;

	@media (min-width: 1024px) {
		justify-content: space-between;
		gap: 0;
	}

	@media (min-width: 1400px) {
		justify-content: space-between;
		gap: 0;
	}

	position: absolute;
	right: 20px;
	left: 20px;
	bottom: 20px;
`;
