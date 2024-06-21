import { FC } from 'react';
import { Container, Image, ImageWrapper, Text, UserInfoContainer, ValueContainer } from './styles';
import LogoIcon from '../../public/assets/logo.svg';
import GoldIcon from '../../public/assets/gold.svg';
import XPIcon from '../../public/assets/exp.svg';
import SquareDividerIcon from '../../public/assets/squareDivider.svg';
import { useData } from './useData';

const Header: FC = () => {
	const { rewards } = useData();

	return (
		<Container>
			<LogoIcon />

			<UserInfoContainer>
				<ValueContainer>
					<GoldIcon />
					<Text>{rewards.gold}</Text>
				</ValueContainer>

				<SquareDividerIcon />

				<ValueContainer>
					<XPIcon />
					<Text>{rewards.exp}</Text>
				</ValueContainer>

				<ImageWrapper>
					<Image src={'/assets/avatar.png'} alt="Avatar" />
				</ImageWrapper>
			</UserInfoContainer>
		</Container>
	);
};

export default Header;
