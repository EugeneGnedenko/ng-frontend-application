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
	Rewards,
	Description,
	TopBar,
	ButtonsContainer
} from './styles';
import SolidityIcon from '../../public/assets/solidity.svg';

import GoldIcon from '../../public/assets/gold.svg';
import ExpIcon from '../../public/assets/exp.svg';
import SwordIcon from '../../public/assets/sword.svg';
import { IQuest } from '@/interfaces/quests';
import Button from '../base/Button';
import { ButtonType } from '../base/Button/types';
import { useData } from './useData';

const swordArray = Array.from({ length: 5 });

interface Props {
	data: IQuest;
}

const QuestCard: FC<Props> = ({ data }) => {
	const { airdropRewards, goBack } = useData();

	return (
		<Container>
			<ImageWrapper>
				<Image src={data.cover} alt="background" />
			</ImageWrapper>

			<Content>
				<Title>{data.title}</Title>

				<TopBar>
					<Block>
						<Info>
							<InfoItem>
								<SolidityIcon />
								<Text>{data.language.label}</Text>
							</InfoItem>

							<InfoItem>
								{swordArray.map((_, index) => {
									const isActive = index <= data.difficulty;
									return (
										<Difficulty isActive={isActive} key={index}>
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
				</TopBar>

				<Description>{data.description}</Description>
			</Content>

			<ButtonsContainer>
				<Button type={ButtonType.BLACK} text='Go Back' onClick={goBack} />
				<Button
					type={ButtonType.GOLD}
					text='Airdrop rewards to The Guardian'
					onClick={() => airdropRewards(data.rewards)}
				/>
			</ButtonsContainer>
		</Container>
	);
};

export default QuestCard;
