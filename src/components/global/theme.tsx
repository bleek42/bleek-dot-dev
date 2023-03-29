import { DefaultTheme } from 'styled-components';
const theme: DefaultTheme = {
	name: 'default',
	borderRadius: '24% 16% / 16% 24%',
	bodyColor: 'rgb(5, 5, 5)',
	textColor: 'rgb(136, 214, 99)',
	palette: {
		common: {
			black: 'rgb(0, 0, 0)',
			white: 'rgb(255, 255, 255)',
		},
		primary: {
			fg: 'rgb(43, 230, 33)',
			bg: 'rgb(75, 75, 75)',
			trim: 'rgb(11, 205, 163)',
			hl: 'rgb(136, 255, 0)',
		},
		secondary: {
			fg: 'rgb(11, 205, 163)',
			bg: 'rgb(22, 22, 80)',
			trim: 'rgb(136, 255, 0)',
			hl: 'rgb(27, 115, 216)',
		},
	},
};

export default theme;
