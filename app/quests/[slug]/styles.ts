import styled from 'styled-components';

export const Wrapper = styled.main`
	display: flex;
	justify-content: center;

	flex: 1;
	width: 100%;
	height: 90%;

	@media (min-width: 1400px) {
		align-items: center;
	}
`;

export const Container = styled.div`
	position: relative;
	width: 95%;

	overflow: hidden;
	max-width: 730px;
	max-height: 600px;

	margin-top: 40px;

	@media (min-width: 1400px) {
		width: 45%;
		height: 64%;
		max-height: 500px;
	}
`;

export const Frame = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: fill;
	z-index: 0;
`;

export const Quest = styled.div`
	position: relative;

	padding: ${({ theme }) => theme.spacing.m};
	height: 100%;

	z-index: 1;
`;
