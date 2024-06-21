import { FC } from 'react';
import { Container, Text } from './styles';
import { ButtonType } from './types';

interface Props {
	type: ButtonType;
	text: string;
	onClick: () => void;
	disabled?: boolean;
}

const Button: FC<Props> = ({ type, text, onClick, disabled }) => {
	return (
		<Container onClick={onClick} type={type}>
			<Text type={type}>{text}</Text>
		</Container>
	);
};

export default Button;
