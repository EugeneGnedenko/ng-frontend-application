'use client';

import QuestCard from '@/components/QuestCard';
import { Wrapper, Container, Frame } from './styles';
import { useData } from './useData';

export default function Page({ params }: { params: { slug: string } }) {
	const { quest } = useData(params.slug);

	return (
		<Wrapper>
			<Container>
				<Frame src='/assets/desktop.png' />
				{quest.data && <QuestCard data={quest.data} />}
			</Container>
		</Wrapper>
	);
}
