export enum LoaderType {
	S = 'small',
	M = 'medium',
	L = 'large'
}

export const LoaderSize = {
	[LoaderType.S]: {
		size: '20px',
		border: '3px'
	},
	[LoaderType.M]: {
		size: '30px',
		border: '4px'
	},
	[LoaderType.L]: {
		size: '40px',
		border: '5px'
	}
};
