import styled, { css } from 'styled-components';

export const Background = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url('/assets/background.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-attachment: fixed;
`;

export const itemFrameStyles = css`
	--b: 1px;
	--s: 5px;

	position: relative;
	z-index: 0;

	&:before {
		content: ' ';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: ${({ theme }) => theme.colors.darkGrey};
		--g1: #000 var(--b), #0000 0 calc(100% - var(--b)), #000 0;
		--g2: #0000 calc(0.707 * var(--s)), #000 0 calc(0.707 * var(--s) + var(--b)),
			#0000 0 calc(100% - 0.707 * var(--s) - var(--b)), #000 0 calc(100% - 0.707 * var(--s)), #0000 0;
		-webkit-mask: linear-gradient(45deg, var(--g2)), linear-gradient(-45deg, var(--g2)),
			linear-gradient(90deg, var(--g1)) 50%/100% calc(100% - 2 * var(--s)) no-repeat,
			linear-gradient(180deg, var(--g1)) 50% / calc(100% - 2 * var(--s)) 100% no-repeat;
	}
`;
