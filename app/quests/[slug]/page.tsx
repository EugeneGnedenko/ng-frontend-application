'use client';

import QuestCard from '@/components/QuestCard';
import { Wrapper, Container, Frame } from './styles';
import { useData } from './useData';


export async function generateStaticParams() {
  const workers = await WorkersService.getAll();
  return workers.map((worker) => ({
    id: worker.id.toString(),
  }));
}

interface IWorkerParams {
  params: {
    id: string;
  };
}

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
