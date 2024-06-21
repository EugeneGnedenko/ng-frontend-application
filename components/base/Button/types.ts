export enum ButtonType {
	BLACK = 'black',
	GOLD = 'gold'
}

export const ButtonColors = {
	[ButtonType.BLACK]: {
		backgroundColor: '#0F0F0F',
		borderColor: '#212121',
		textColor: '#BEA77E'
	},
	[ButtonType.GOLD]: {
		backgroundColor: '#B69E72',
		borderColor: '#F6CF8F',
		textColor: '#0F0F0F'
	}
};
