import { Box, Stack, Typography } from '@mui/material';
import { FC } from 'react';

export const AboutMe: FC = () => {

  return <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
    <Stack maxWidth={{ sm: "80%", md: '60%', lg: '40%' }}>
      <Stack alignItems="center">
        <Typography variant='subtitle2' fontSize={30} color="warning.dark">Обо мне</Typography>
      </Stack>
      <Stack direction={{ sm: 'column', md: 'row' }} alignItems="center" spacing={2}>
        <Box sx={{
          width: '200px',
          height: '200px',
          backgroundImage: `url('${process.env.PUBLIC_URL}/proto.png')`,
          backgroundRepeat: 'no-repeat',
          borderRadius: '50%'
        }} />
        <Typography variant='subtitle1' flex={2}>
          Привет! Меня зовут <strong>Анастасия Тураева</strong>. Я Frontend разработчик из Санкт-Петербурга.
          За свою небольшую карьеру поработала с различными технологиями в различных компаниях (подробнее ниже).
          Больше всего мне нравится проводить рефакторинг кода.
          Особенно, если он приводит к тому, что фичи становится вносить гораздо проще.
          Люблю учиться, играть в видеоигры, изучать языки и читать детективы.&#128578;
          Листай ниже &#9660;
        </Typography>
      </Stack>
    </Stack>
  </Box>
}
