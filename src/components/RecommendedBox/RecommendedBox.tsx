import { Box } from '@chakra-ui/react'
import Image from 'next/image'

interface IRecommendedBox {
  image: string
  label: string
}

const RecommendedBox = ({ image, label }: IRecommendedBox) => {
  return (
    <Box>
      <Image
        src={`${image}`}
        alt={label}
        width={247}
        height={318}
        style={{ width: '100%', height: 'auto' }}
      />
    </Box>
  )
}

export default RecommendedBox
