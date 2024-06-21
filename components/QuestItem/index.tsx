'use client';
import { FC } from 'react';
import {
	Container,
	Image,
	ImageWrapper,
	Content,
	Block,
	Title,
	Info,
	InfoItem,
	Text,
	RewardsItem,
	RewardsText,
	Difficulty,
	Rewards
} from './styles';
import SolidityIcon from '../../public/assets/solidity.svg';

import GoldIcon from '../../public/assets/gold.svg';
import ExpIcon from '../../public/assets/exp.svg';
import SwordIcon from '../../public/assets/sword.svg';
import { IQuest } from '@/interfaces/quests';

const swordArray = Array.from({ length: 5 });

interface Props {
	data: IQuest;
	onClick: () => void;
}

const QuestItem: FC<Props> = ({ data, onClick }) => {
	return (
		<Container onClick={onClick}>
			<ImageWrapper>
				<Image src={data.cover} />
			</ImageWrapper>
			<Content>
				<Block>
					<Title>{data.title}</Title>

					<Info>
						<InfoItem>
							<SolidityIcon />
							<Text>{data.language.label}</Text>
						</InfoItem>

						<InfoItem>
							{swordArray.map((_, index) => {
								const isActive = index <= data.difficulty;
								return (
									<Difficulty isActive={isActive}>
										<SwordIcon />
									</Difficulty>
								);
							})}
						</InfoItem>

						<InfoItem>
							<Text>{data.type.label}</Text>
						</InfoItem>
					</Info>
				</Block>
				<Rewards>
					<RewardsItem>
						<ExpIcon />
						<RewardsText>{data.rewards.expPoints}</RewardsText>
					</RewardsItem>
					<RewardsItem>
						<GoldIcon />
						<RewardsText>{data.rewards.gold}</RewardsText>
					</RewardsItem>
				</Rewards>
			</Content>
		</Container>
	);
};

export default QuestItem;
