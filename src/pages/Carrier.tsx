import { FC } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider, Stack, useMediaQuery, useTheme } from '@mui/material';

const steps = [
  {
    year: 'Ноябрь 2023 - Настоящее время',
    position: 'Старший инженер-программист',
    company: 'ООО "Айдеко"',
    description: `Разработка продукта с использованием React, TypeScript, REST API, MUI.
                  Рефакторинг существующего кода.
                  Ревью кода.`,
    proudOfInfo: `Провела большой ресёрч и рефакторинг кода графиков, который позволил добавить новую функциональность и UX улучшения столбчатых, линейных и круговых диаграмм.`,
  },
  {
    year: 'Февраль 2023 - Ноябрь 2023',
    position: 'Разработчик ПО',
    company: 'ООО "Citeck"',
    description:
      `Разработка SPA с использованием React, JavaScript, Redux, Redux-Saga, Sass.
       Поддержка мобильного приложения на React Native.`,
    proudOfInfo: `
      С нуля реализовала большую фичу администрирования бизнес-процессов (фича в продукте).
    `,
  },
  {
    year: 'Август 2021 - Январь 2023',
    position: 'Ведущий инженер-программист',
    company: 'ООО "Айдеко"',
    description: `Разработка продукта с использованием React, TypeScript, REST API, MUI, Webpack, Redux. Ревью кода.`,
    proudOfInfo: `Провела рефакторинг системы цветовой палитры, который привёл к появлению тёмной темы в проекте.
      Проводила ресерч на тему кодогенерации создания типов и хэндлеров на основе OpenAPI и внедрила данный подход в один из проектов компании.
      Проводила ресерч на тему библиотеки компонентов и занималась её созданием.
    `,
  },
  {
    year: 'Февраль 2021 - Август 2021',
    company: 'ЦБ РФ',
    position: 'Эксперт 1 категории',
    description: `Разработка SPA с использованием React, TypeScript, GraphQL.`,
    proudOfInfo: `Разработала микросервис веб-аналитики бекенд (nodejs) и фронтенд частей в рамках задания на стажировку`,
  },
];

export const Carrier: FC = () => {
  const theme = useTheme();
  const isCompactView = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Stack alignItems="center" justifyContent="center" width="100%" spacing={isCompactView ? 3 : undefined }>
      <Typography variant='subtitle2' fontSize={30} color="warning.dark">Опыт работы</Typography>
      {steps.map(({ year, position, company, description, proudOfInfo }) =>
        <Stack direction="row" alignItems="center" width="50%"  height={ isCompactView ? undefined : "200px"}>
          {!isCompactView && <>
            <Stack alignItems="flex-end" flex={1}>
              <Typography variant='body2'  color="action.active">{year}</Typography>
              </Stack>
              <Divider orientation='vertical'>
                <Box sx={(theme) => ({
                  backgroundColor: theme.palette.action.disabled, width: '20px', height: '20px', borderRadius: '50%'
                })} />  
              </Divider>
            </>
          }
          <Stack flex={2}>
            <Typography variant='body1' fontWeight="bold">{position}</Typography>
            {isCompactView && <Typography variant='body2'  color="action.active">{year}</Typography>}
            <Typography variant='body2' color="action.active">{company}</Typography>
            <Typography variant='body2'>{description}</Typography>
            <Typography variant='body2' color="warning.dark">Особенно горжусь:</Typography>
            <Typography variant='body2'>{proudOfInfo}</Typography>
            {isCompactView  && <Divider sx={{ width: "100%", marginTop: 2 }} />}
          </Stack>
        </Stack>
      )}
    </Stack>
  )
};
