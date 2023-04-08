import { ColorScheme, MantineThemeOverride } from '@mantine/core';

const theme = (colorScheme: ColorScheme): MantineThemeOverride => ({
  colorScheme,
  colors: {
    gray: [
      '#F7F7F8',
      '#E9EBEC',
      '#D1D4D6',
      '#B9BDC1',
      '#A0A6AB',
      '#888F96',
      '#71787F',
      '#5B6167',
      '#464A4E',
      '#303336',
    ],
    dark: [
      '#E6E9ED',
      '#CCD3DA',
      '#A6B2BE',
      '#8091A3',
      '#5A7087',
      '#334F6B',
      '#0D2E4F',
      '#001E3B',
      '#021731',
      '#001326',
    ],
    accent: [
      '#F9DD92',
      '#F9DA88',
      '#F9D77E',
      '#F8D473',
      '#F8D168',
      '#F7CD5C',
      '#F7CD5C',
      '#F7CA50',
      '#F6C745',
      '#F6C435',
    ],
    brand: [
      '#F0F7FF',
      '#CDE5FE',
      '#B6D8FB',
      '#A1CBF7',
      '#8CBEF2',
      '#79B1EC',
      '#67A4E4',
      '#5798DB',
      '#478BD1',
      '#397EC6',
    ],
  },
  primaryColor: 'brand',
});

export default theme;
