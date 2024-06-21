import styled from 'styled-components';

export const Wrapper = styled.main`
	display: flex;
	justify-content: space-between;
	flex: 1;
	width: 100%;
	height: 90%;
	padding: 2% 4% 0;

	@media (min-width: 1024px) {
		padding: 2% 10% 0;
	}
`;

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 90%;
	overflow: hidden;
`;

export const LoaderContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Frame = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: fill;
	z-index: 0;
`;

export const Quests = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: ${({ theme }) => theme.spacing['3xs']};
	padding: ${({ theme }) => theme.spacing.m};
	height: 100%;

	overflow-y: scroll;

	z-index: 1;

	-ms-overflow-style: none;
	scrollbar-width: none;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 1700px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
