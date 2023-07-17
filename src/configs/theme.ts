import { ColorScheme, MantineThemeOverride } from '@mantine/core';

const theme = (colorScheme: ColorScheme): MantineThemeOverride => ({
  colorScheme,
  colors: {
    gray: [
      '#F8F9FA',
      '#F1F3F5',
      '#EAECEF',
      '#DFE2E6',
      '#CED4DB',
      '#ADB5BD',
      '#858D95', // main gray 6
      '#495058',
      '#343A41',
      '#20252A',
    ],
    dark: [
      '#ADADAD',
      '#939394',
      '#79797B',
      '#616163',
      '#4A4A4C',
      '#343436',
      '#0C0C0E', // main dark 6
      '#0E0E12',
      '#09090B',
      '#060607',
    ],
    warning: [
      '#F9DD92',
      '#F9DA88',
      '#F9D77E',
      '#F8D473',
      '#F8D168',
      '#F7CD5C', // main warning 6
      '#F7CD5C',
      '#F7CA50',
      '#F6C745',
      '#F6C435',
    ],
    brand: [
      '#E5F4FF',
      '#CDE2FF',
      '#9CC3FF',
      '#64A1FF',
      '#3984FF',
      '#1D72FE',
      '#0969FF', // main brand 6
      '#0258E4',
      '#014FCC',
      '#0243B5',
    ],
    error: [
      '#FFE9F1',
      '#FFD1E1',
      '#FAA1BE',
      '#F66E9A',
      '#F2437A',
      '#F02966',
      '#F1185C', // main error 6
      '#D60A4D',
      '#C00243',
      '#A90239',
    ],
    bgAccentColor: ['#2BEBC8'],
    bgStepperNavbarLight: ['#F9FBFC'],
    bgStepperNavbarDark: ['#0C0C0E'],
    bgSteeperOutletLight: ['#FFFFFF'],
    bgSteeperOutletDark: ['#151618'],
    brInputDark: ['#F9FBFC'],
    brInputLight: ['#D0D5DD'],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  fontFamily: '"Open Sans", sans-serif',
  fontFamilyMonospace: `"Rubik Distressed", cursive`,
});

export default theme;
