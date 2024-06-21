import { FC } from 'react';
import { Spinner } from './styles';
import { LoaderType } from './types';

interface Props {
	type: LoaderType;
}

const Loader: FC<Props> = ({ type }) => {
	return <Spinner type={type} />;
};

export default Loader;
