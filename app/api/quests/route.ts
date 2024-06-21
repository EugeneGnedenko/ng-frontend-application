import { questsData } from '@/data/quests';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		// usage of mock data
		const { data } = questsData;

		const formattedQuests = data.map((quest: any) => {
			const attributes = quest.attributes;

			return {
				title: attributes.title,
				difficulty: attributes.difficulty,
				description: attributes.description,
				slug: attributes.slug,
				cover: attributes.cover?.data?.attributes?.url,
				language: {
					label: attributes.tree.data.attributes.label,
					id: attributes.tree.data.attributes.technicalID
				},
				type: {
					label: attributes.type.data.attributes.label,
					id: attributes.type.data.attributes.technicalID
				},
				rewards: {
					expPoints: attributes.reward.data.attributes.expPoints,
					gold: attributes.reward.data.attributes.gold
				}
			};
		});

		// Send a response back to the client
		return NextResponse.json(formattedQuests, { status: 200 });
	} catch (error) {
		// If the request fails, an error will be thrown
		console.error(error);

		// Send an error response back to the client
		return NextResponse.json('An error occurred while fetching the data', { status: 500 });
	}
}
