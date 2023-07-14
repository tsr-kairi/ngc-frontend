import {
  ActionIcon,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

function ToggleThemeBtn() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <ActionIcon
      variant="transparent"
      color={dark ? 'yellow' : `${theme.colors.bgAccentColor}`}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun /> : <IconMoonStars />}
    </ActionIcon>
  );
}

export default ToggleThemeBtn;
