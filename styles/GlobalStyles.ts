import { Cinzel, Inter } from 'next/font/google';
import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const cinzel = Cinzel({ weight: '700', subsets: ['latin'] });
export const interRegular = Inter({ weight: '400', subsets: ['latin'] });
export const interBold = Inter({ weight: '700', subsets: ['latin'] });

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
	//========================================================================================================
	// GENERAL
	//========================================================================================================
	body {
		margin: 0;
	}
	
	* {
		box-sizing: border-box;
	}
	*::before {
		box-sizing: border-box;
	}
	*::after {
		box-sizing: border-box;
	}

	body {
		background-color: ${({ theme }) => theme.colors.black};
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	button {
		font-family: ${cinzel.style.fontFamily};
		font-weight: ${cinzel.style.fontWeight};
		margin: 0;
	}

	b {
		font-weight: 700;
	}

	p,
	span,
	input,
	textarea {
		font-family: ${interRegular.style.fontFamily};
		font-weight: ${interRegular.style.fontWeight};
		margin: 0;

	}
`;

export default GlobalStyle;
