import { ButtonColors, ButtonType } from './types';
import styled from 'styled-components';

interface IType {
	type: ButtonType;
}

export const Container = styled.div<IType>`
	--b: 1px;
	--s: 7px;

	padding: 12px 50px;

	position: relative;
	z-index: 0;

	width: 100%;
	display: flex;
	justify-content: center;

	@media (min-width: 1024px) {
		width: max-content;
		display: block;
	}

	cursor: pointer;

	&:hover {
		box-shadow: 0 10px 8px 0px rgba(0, 0, 0, 0.65);
		transition: all 0.3s;
	}

	&:before {
		content: ' ';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: ${({ type }) => ButtonColors[type].borderColor};
		--g1: #000 var(--b), #0000 0 calc(100% - var(--b)), #000 0;
		--g2: #0000 calc(0.707 * var(--s)), #000 0 calc(0.707 * var(--s) + var(--b)),
			#0000 0 calc(100% - 0.707 * var(--s) - var(--b)), #000 0 calc(100% - 0.707 * var(--s)), #0000 0;
		-webkit-mask: linear-gradient(45deg, var(--g2)), linear-gradient(-45deg, var(--g2)),
			linear-gradient(90deg, var(--g1)) 50%/100% calc(100% - 2 * var(--s)) no-repeat,
			linear-gradient(180deg, var(--g1)) 50% / calc(100% - 2 * var(--s)) 100% no-repeat;
	}

	${({ type }) =>
		type === ButtonType.GOLD &&
		`
			background-color: ${ButtonColors[type].backgroundColor};
			clip-path: polygon(
        7px 0px,
        calc(100% - 7px) 0px, /* Top corners */
        100% 7px,
        100% calc(100% - 7px), /* Right corners */
        calc(100% - 7px) 100%,
        7px 100%, /* Bottom corners */
        0px calc(100% - 7px),
        0px 7px /* Left corners */
    );
	
	`}
`;

export const Text = styled.h4<IType>`
	color: ${({ type }) => ButtonColors[type].textColor};
	font-size: ${({ theme }) => theme.fontSize.s};

	@media (min-width: 1024px) {
		font-size: ${({ theme }) => theme.fontSize.l};
	}
`;
