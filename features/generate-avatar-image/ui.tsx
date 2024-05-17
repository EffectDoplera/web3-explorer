import { FC } from 'react'
import { AVATAR_SIZE, COLORS_SCHEMA, COLS, ELEMENTS_COUNT, PIXEL_SIZE, ROWS } from './const'
import { generateColors } from './lib'

interface AvatarPixelProps {
  name: string
  colors?: string[]
  size?: number
}

export const AvatarPixel: FC<AvatarPixelProps> = ({ name, colors = COLORS_SCHEMA, size = ELEMENTS_COUNT }) => {
  const pixelColors = generateColors(name, colors)

  return (
    <svg viewBox={`0 0 ${AVATAR_SIZE} ${AVATAR_SIZE}`} xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      {ROWS.map((_, rowIndex) =>
        COLS.map((_, colIndex) => {
          const index = rowIndex * (AVATAR_SIZE / PIXEL_SIZE) + colIndex
          const x = colIndex * PIXEL_SIZE
          const y = rowIndex * PIXEL_SIZE

          return (
            <rect
              key={`${rowIndex}-${colIndex}`}
              x={x}
              y={y}
              width={PIXEL_SIZE}
              height={PIXEL_SIZE}
              fill={pixelColors[index]}
            />
          )
        }),
      )}
    </svg>
  )
}
