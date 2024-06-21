import { Background } from '@/styles/main';
import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 10%;
	padding: 35px 5%;
`;

export const UserInfoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing['5xs']};

	@media (min-width: 1024px) {
		gap: ${({ theme }) => theme.spacing['3xs']};
	}
`;

export const ValueContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing['6xs']};

	@media (min-width: 1024px) {
		gap: ${({ theme }) => theme.spacing['4xs']};
	}
`;

export const Text = styled.h4`
	color: ${({ theme }) => theme.colors.gold};
	font-size: ${({ theme }) => theme.fontSize.s};

	@media (min-width: 1024px) {
		font-size: ${({ theme }) => theme.fontSize.m};
	}
`;

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 56px;
	height: 56px;
	padding: ${({ theme }) => theme.spacing['6xs']};
	margin-left: ${({ theme }) => theme.spacing['5xs']};
	border: 1px solid ${({ theme }) => theme.colors.darkGrey};
	border-radius: 50%;
`;

export const Image = styled.img`
	width: 48px;
	height: 48px;
	object-fit: contain;
	border: 1px solid ${({ theme }) => theme.colors.gold};
	border-radius: 50%;
`;
