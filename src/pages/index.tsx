import { Box } from '@mantine/core';

export default function Demo() {
  return (
    <Box
      component="a"
      href="https://mantine.dev"
      target="_blank"
      style={(theme) => ({
        display: 'block',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.colors.blue[4] : theme.colors.blue[7],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })}
    >
      Set component prop to style different elements
    </Box>
  );
}