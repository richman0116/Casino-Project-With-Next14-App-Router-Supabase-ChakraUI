import {
  Flex,
  Text,
  Avatar,
  Center,
  Image,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react'
import { IRaceCardElement } from '@/types/raceCard'
import getWinnerArr from '@/utils/getWinnerArr'

const RaceCardElement = ({ raceCards, winnerFlag }: IRaceCardElement) => {
  if (winnerFlag === 0)
    return (
      <Flex
        marginY={6}
        width={{ base: '100%', lg: '70%' }}
        marginX={'auto'}
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        justifyContent={'space-between'}
      >
        {getWinnerArr(raceCards).map((RaceCard: any, index: number) => {
          return (
            <Center
              marginTop={index === 1 ? 0 : 10}
              width={{ base: '100%', md: '30%', lg: '30%' }}
              backgroundColor={'rgba(255, 255, 255, 0.04)'}
              borderRadius={10}
              flexDirection={'column'}
              justifyContent={'space-between'}
              padding={10}
              fontSize={16}
              fontWeight={600}
              position={'relative'}
            >
              <Center
                top={-3}
                position={'absolute'}
                bgColor="#48BB78"
                borderRadius={6}
                fontSize={16}
                paddingX={4}
              >
                {index === 0 || index === 1 ? 2 - index : index + 1}th
              </Center>
              <Center marginTop={6} flexDirection={'column'}>
                <Image
                  width={16}
                  height={16}
                  marginRight={2}
                  borderRadius={10}
                  src={RaceCard.avatar}
                />
                <Text marginTop={2} fontSize={24}>
                  {RaceCard.name}
                </Text>
              </Center>
              <Center marginTop={6}>
                <Badge
                  paddingX={10}
                  paddingY={2}
                  borderRadius={6}
                  fontSize={24}
                  color={'lightgreen'}
                  fontWeight={800}
                >
                  ${RaceCard.reward}
                </Badge>
              </Center>
              <Center marginTop={6} flexDirection={'column'}>
                Opened
                <Text>${RaceCard.amount}</Text>
              </Center>
            </Center>
          )
        })}
      </Flex>
    )
  else
    return (
      <Flex direction={'column'} marginY={6}>
        {raceCards.slice(3).map((RaceCard: any, index: number) => {
          return (
            <Center
              backgroundColor={'rgba(255, 255, 255, 0.04)'}
              borderRadius={10}
              paddingY={{ base: 3, md: 4 }}
              paddingX={{ base: 5, md: 10 }}
              margin={2}
              justifyContent={'space-between'}
              fontSize={16}
              fontWeight={600}
              position={'relative'}
            >
              <Badge
                left={-8}
                position={'absolute'}
                colorScheme="grey"
                fontSize={16}
                paddingX={4}
              >
                {index + 4}th
              </Badge>
              <Center>
                <Avatar width={10} height={10} marginRight={2} src={RaceCard.avatar} />
                <Center flexDirection={'column'}>
                  <Text>{RaceCard.name}</Text>
                  <Text display={{ base: 'block', md: 'none' }}>${RaceCard.amount}</Text>
                </Center>
              </Center>
              <Center flexDirection={'column'} display={{ base: 'none', md: 'block' }}>
                <Text>Opened</Text>
                <Text>${RaceCard.amount}</Text>
              </Center>
              <Badge borderRadius={6}>
                <Text
                  paddingY={{ base: 1, md: 2 }}
                  paddingX={{ base: 2, md: 4 }}
                  fontSize={16}
                  color={'lightgreen'}
                  fontWeight={800}
                >
                  ${RaceCard.reward}
                </Text>
              </Badge>
            </Center>
          )
        })}
      </Flex>
    )
}

export default RaceCardElement
