export interface IQuest {
	title: string;
	difficulty: number;
	description: string;
	slug: string;
	cover: string;
	language: {
		label: string;
		id: string;
	};
	type: {
		label: string;
		id: string;
	};
	rewards: IQuestRewards;
}

export interface IQuestRewards {
	expPoints: number;
	gold: number;
}
