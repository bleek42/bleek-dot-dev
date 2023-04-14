import type { DefaultTheme, Fonts } from 'styled-components';

const theme: DefaultTheme = {
	name: 'Default',
	borderRadius: '24% 16% / 16% 24%',
	fonts: [
		'Birdman',
		'Oxanium',
		'MonocraftNF',
		'Impact, Haettenschweiler, "Arial Narrow Bold", Arial, Helvetica, sans-serif',
	],

	palette: {
		common: {
			black: 'rgb(0, 0, 0)',
			white: 'rgb(255, 255, 255)',
		},
		primary: {
			red: 'rgb(226, 49, 0)',
			blue: 'rgb(13, 0, 201)',
			orange: 'rgb(237, 172, 88)',
			cyan: 'rgb(0, 191, 255)',
			green: 'rgb(77, 197, 12)',
			drab: 'rgb(0, 208, 142)',
			steel: 'rgb(49, 64, 105)',
			tan: 'rgb(199, 178, 178)',
			gray: 'rgb(139, 139, 178)',
			teal: 'rgb(54, 213, 181)',
			neon: 'rgb(0, 255, 30)',
			yellow: 'rgb(222, 210, 76)',
			linear: 'linear-gradient(123deg, rgba(43, 230, 33, 0.798), rgb(0, 42, 255))',
		},
		secondary: {
			red: 'rgb(214, 30, 30)',
			blue: 'rgb(52, 105, 249)',
			orange: 'rgb(240, 135, 0)',
			cyan: 'rgb(36, 237, 255)',
			green: 'rgb(27, 250, 15)',
			drab: 'rgb(15, 226, 96)',
			steel: 'rgb(56, 47, 47)',
			tan: 'rgb(121, 116, 116)',
			gray: 'rgb(181, 192, 187)',
			teal: 'rgb(40, 171, 145)',
			neon: 'rgb(89, 255, 0)',
			yellow: 'rgb(225, 255, 0)',
			linear: 'linear-gradient(165deg, rgba(0, 128, 248, 0.793), rgba(23, 240, 193, 0.829))',
		},
		tertiary: {
			red: 'rgb(214, 30, 30)',
			blue: 'rgb(0, 55, 207)',
			orange: 'rgb(200, 45, 45)',
			cyan: 'rgb(114, 220, 220)',
			green: 'rgb(43, 230, 33)',
			drab: 'rgb(34, 200, 67)',
			steel: 'rgb(125, 120, 138)',
			tan: 'rgb(196, 157, 157)',
			gray: 'rgb(181, 181, 181)',
			teal: 'rgb(11, 205, 165)',
			neon: 'rgb(135, 255, 0)',
			yellow: 'rgb(252, 231, 0)',
			linear: 'linear-gradient(102deg, rgba(132, 255, 0, 0.937), rgba(75, 17, 209, 0.849))',
		},
	},
};

export default theme;
