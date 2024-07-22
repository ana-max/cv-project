import { Box, Rating, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC } from 'react';

export const Skills: FC = () => {
  const theme = useTheme();
  const isCompactView = useMediaQuery(theme.breakpoints.down('lg'));


  return <Box width="100%">
    <Stack alignItems="center" spacing={2} width="100%">
      <Typography variant='subtitle2' fontSize={30} color="warning.dark">Ключевые навыки</Typography>
      <Stack display={isCompactView ? 'flex' : 'grid'} gridTemplateColumns="repeat(3, 1fr)" width="100%" padding={4} gap={4}>
        <Stack direction="row" width="100%" justifyContent="center">
          <Typography component="legend">React</Typography>
          <Rating value={4} readOnly />
        </Stack>
        <Stack direction="row" justifyContent={"center"}>
          <Typography component="legend">JavaScript</Typography>
          <Rating value={4} readOnly />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Typography component="legend">TypeScript</Typography>
          <Rating value={4} readOnly />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Typography component="legend">MUI</Typography>
          <Rating value={4} readOnly />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Typography component="legend">GIT</Typography>
          <Rating value={4} readOnly />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Typography component="legend">REST API</Typography>
          <Rating value={4} readOnly />
        </Stack>
        <Stack direction="row" width="100%" justifyContent="center">
          <Typography component="legend">Redux</Typography>
          <Rating value={3} readOnly />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Typography component="legend">Redux Saga</Typography>
          <Rating value={3} readOnly />
        </Stack>
        <Stack direction="row" justifyContent="center">
          <Typography component="legend">Webpack</Typography>
          <Rating value={3} readOnly />
        </Stack>
      </Stack>
    </Stack>
  </Box>
};
