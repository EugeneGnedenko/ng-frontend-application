import { itemFrameStyles } from '@/styles/main';
import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px 20px 50px;
	${itemFrameStyles}

	cursor: pointer;

	&:hover {
		box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.15), 0 20px 20px -20px rgba(255, 215, 0, 0.4);
		transform: translateY(-2px);
		transition: all 0.3s;
	}
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 86px;

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
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (min-width: 490px) {
		flex-wrap: no-wrap;
		flex-direction: row;
		align-items: center;
	}

	padding: 0 3px;
`;

export const Block = styled.div``;

export const Rewards = styled.div`
	margin-top: ${({ theme }) => theme.spacing['4xs']};

	@media (min-width: 490px) {
		margin-top: 0;
	}
`;

export const Title = styled.h3`
	margin-top: ${({ theme }) => theme.spacing['3xs']};
	color: ${({ theme }) => theme.colors.white};
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	margin-top: ${({ theme }) => theme.spacing['3xs']};

	gap: ${({ theme }) => theme.spacing['5xs']};
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
	gap: ${({ theme }) => theme.spacing['4xs']};

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
	margin-right: ${({ theme }) => theme.spacing['6xs']};
`;

export const Description = styled.p``;
