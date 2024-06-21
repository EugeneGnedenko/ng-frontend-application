'use client';
import Loader from '@/components/base/Loader';
import { LoaderType } from '@/components/base/Loader/types';
import QuestItem from '@/components/QuestItem';
import { IQuest } from '@/interfaces/quests';

import { Wrapper, Container, Quests, Frame, LoaderContainer } from './styles';
import { useData } from './useData';

export default function Page() {
	const { quests, onClick } = useData();

	return (
		<Wrapper>
			<Container>
				<Frame src='/assets/desktop.png' />
				{quests.isSuccess ? (
					<Quests>
						{quests.data?.map((item: IQuest) => (
							<QuestItem data={item} onClick={() => onClick(item.slug)} key={item.slug} />
						))}
					</Quests>
				) : (
					<LoaderContainer>
						<Loader type={LoaderType.S} />
					</LoaderContainer>
				)}
			</Container>
		</Wrapper>
	);
}
