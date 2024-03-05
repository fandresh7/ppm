import { Level } from '../models/levels'

export const LEVELS: Level[] = [
  {
    id: 'basic',
    name: 'PPM BÁSICO',
    coursesIds: [1, 2, 3, 4, 5, 6, 11, 13],
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/Thumbnail_PPM_LEVELS_V2_basico2.png'
  },
  {
    id: 'intermediate',
    name: 'PPM INTERMEDIO',
    coursesIds: [7, 8, 10, 9, 12, 14, 15],
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/Thumbnail_PPM_LEVELS_V2_intermedio2.png'
  },
  {
    id: 'advanced',
    name: 'PPM AVANZADO',
    coursesIds: [16, 17],
    image:
      'https://superlikers-themes.s3.amazonaws.com/PPMuniversity/Thumbnail_PPM_LEVELS_V2_avanzado2.png'
  }
]
