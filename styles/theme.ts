// theme.ts
import { DefaultTheme } from 'styled-components';

export const defaultTheme = {
	radius: {
		s: '3px',
		m: '5px',
		l: '7px',
		xl: '10px'
	},
	spacing: {
		unset: 'unset',
		'6xs': '2px',
		'5xs': '4px',
		'4xs': '8px',
		'3xs': '12px',
		'2xs': '16px',
		xs: '20px',
		s: '24px',
		m: '30px',
		l: '50px',
		xl: '48px',
		'2xl': '64px',
		'3xl': '80px',
		'4xl': '100px',
		'5xl': '120px',
		'6xl': '145px',
		'7xl': '160px',
		'8xl': '180px'
	},
	fontSize: {
		s: '12px',
		m: '14px',
		l: '16px'
	}
};

export const darkTheme: DefaultTheme = {
	...defaultTheme,
	colors: {
		// set theme colors
		gold: '#BEA77E',
		white: '#CCCCCC',
		grey: '#8E8E8E',
		darkGrey: '#212121',
		lightGrey: '#7A7A7A',
		black: '#0F0F0F',
		text: '#7C7C7C',
		dark: '#0A0A0A'
	}
};
