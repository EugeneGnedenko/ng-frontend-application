import styled, { keyframes } from 'styled-components';
import { LoaderType, LoaderSize } from './types';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface ISpinner {
	type: LoaderType;
}

export const Spinner = styled.div<ISpinner>`
	border: ${({ type }) => LoaderSize[type].border} solid ${({ theme }) => theme.colors.white}; /* Light grey */
	border-top: ${({ type }) => LoaderSize[type].border} solid ${({ theme }) => theme.colors.lightGrey}; /* Blue */
	border-radius: 50%;
	width: ${({ type }) => LoaderSize[type].size};
	height: ${({ type }) => LoaderSize[type].size};
	animation: ${spin} 0.7s linear infinite;
`;
