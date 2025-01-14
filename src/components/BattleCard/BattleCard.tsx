import { FC } from 'react'

import { Avatar, Box, Button, Flex, Image, Link } from '@chakra-ui/react'

export enum BattleType {
  ONE_ONE,
  ONE_ONE_ONE,
  ONE_ONE_ONE_ONE,
  TEAM,
}

export enum BattleOption {
  UPSIDE_DOWN,
  OPTION_TWO,
  SHARE_PROFIT,
}

interface IUser {
  name: string
  avatar: string
  level: string
}

interface IPack {
  id: string
  imageUrl: string
  price: string
  detail: any
}

interface IBattleCard {
  packs: IPack[]
  type: BattleType
  userList: IUser[]
  option: BattleOption
}

const PackCard = (props: IPack) => {
  return (
    <Image
      src="/assets/images/battles/luxury.webp"
      alt="pack"
      style={{ width: 60, height: 'auto' }}
    />
  )
}

const PackCard1 = (props: IPack) => {
  return (
    <Image
      src="/assets/images/battles/luxury_black.webp"
      alt="pack"
      style={{ width: 60, height: 'auto' }}
    />
  )
}
const PackCard2 = (props: IPack) => (
  <Image
    src="/assets/images/battles/Timeless.webp"
    alt="pack"
    style={{ width: 60, height: 'auto' }}
  />
)

const BattleCard: FC<IBattleCard> = (props) => {
  const { packs, type, userList } = props

  return (
    <Flex direction="column" gap={4} width="full">
      <Flex
        bgColor="#e2e8f029"
        rounded="0.375rem"
        alignItems="center"
        justifyContent="center"
        padding={5}
        direction={{ base: 'column', md: 'row' }}
        _hover={{ cursor: 'pointer' }}
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Flex
            fontWeight={'black'}
            whiteSpace={'none'}
            alignItems={'center'}
            rounded="0.375rem"
          >
            <Image
              src="/assets/images/battles/point_rush.webp"
              alt=""
              width={5}
              height={5}
              margin={1}
            />
            {`${packs.length} rounds`}
          </Flex>
          <Flex
            direction={'row'}
            alignItems={'center'}
            margin={5}
            justifyContent="center"
          >
            <Avatar
              src={'/assets/images/battles/useravatar1.webp'}
              width={8}
              height={8}
            />
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            />
            <Avatar
              src={'/assets/images/battles/useravatar2.webp'}
              width={8}
              height={8}
            />
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            />
            <Avatar
              src={'/assets/images/battles/useravatar3.webp'}
              width={8}
              height={8}
            />
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            />
            <Avatar
              src={'/assets/images/battles/useravatar4.webp'}
              width={8}
              height={8}
            />
          </Flex>
          <Box fontWeight={'black'}>{`$${(232.82).toFixed(2)}`}</Box>
        </Flex>
        <Link href={'/battles/id'}>
          <Flex
            overflowX={'hidden'}
            justifyContent={{ base: 'center', md: 'start' }}
            gap={2}
            flex={1}
            paddingX={4}
          >
            {packs.map((pack) => {
              return <PackCard {...pack} />
            })}
          </Flex>
        </Link>
        <Flex margin={'1rem'}>
          <Link href={'/battles/id'}>
            <Button
              bgColor=" #FABD2D"
              _hover={{
                bgColor: 'yellow.400',
              }}
              width={'115px'}
            >
              Join Battle
            </Button>
          </Link>
        </Flex>
      </Flex>
      <Flex
        bgColor="#e2e8f029"
        rounded="0.375rem"
        alignItems="center"
        justifyContent="center"
        padding={5}
        direction={{ base: 'column', md: 'row' }}
        _hover={{ cursor: 'pointer' }}
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Flex
            fontWeight={'black'}
            whiteSpace={'none'}
            alignItems={'center'}
            rounded="0.375rem"
          >
            <Image
              src="/assets/images/battles/share_mode.webp"
              alt=""
              width={5}
              height={5}
              margin={1}
            />
            {`${packs.length} rounds`}
          </Flex>
          <Flex
            direction={'row'}
            alignItems={'center'}
            margin={5}
            justifyContent="center"
          >
            <Avatar
              src={'/assets/images/battles/useravatar5.webp'}
              width={8}
              height={8}
            />
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            />
            <Avatar
              src={'/assets/images/battles/useravatar6.webp'}
              width={8}
              height={8}
            />
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            />
            <Avatar
              src={'/assets/images/battles/useravatar7.webp'}
              width={8}
              height={8}
            />
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            />
            <Avatar
              src={'/assets/images/battles/useravatar8.webp'}
              width={8}
              height={8}
            />
          </Flex>
          <Box fontWeight={'black'}>{`$${(225.92).toFixed(2)}`}</Box>
        </Flex>
        <Link href={'/battles/id'}>
          <Flex
            overflowX={'hidden'}
            justifyContent={{ base: 'center', md: 'start' }}
            gap={2}
            flex={1}
            paddingX={4}
          >
            {packs.map((pack) => {
              return <PackCard1 {...pack} />
            })}
          </Flex>
        </Link>
        <Link href={'/battles/id'}>
          <Flex margin={'1rem'}>
            <Button width={'115px'}>View Battle</Button>
          </Flex>
        </Link>
      </Flex>
      <Flex
        bgColor="#e2e8f029"
        rounded="0.375rem"
        alignItems="center"
        padding={5}
        direction={{ base: 'column', md: 'row' }}
        _hover={{ cursor: 'pointer' }}
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Flex
            fontWeight={'black'}
            whiteSpace={'none'}
            alignItems={'center'}
            rounded="0.375rem"
          >
            <Image
              src="/assets/images/battles/upside_down.webp"
              alt=""
              width={5}
              height={5}
              margin={1}
            />
            {`${packs.length} rounds`}
          </Flex>
          <Flex
            direction={'row'}
            alignItems={'center'}
            margin={5}
            justifyContent="center"
          >
            <Avatar
              src={'/assets/images/battles/useravatar9.webp'}
              width={8}
              height={8}
            />
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            />
            <Avatar
              src={'/assets/images/battles/useravatar10.webp'}
              width={8}
              height={8}
            />
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            />
            <Avatar
              src={'/assets/images/battles/useravatar11.webp'}
              width={8}
              height={8}
            />
            <Image
              src="/assets/images/battles/vs.webp"
              alt=""
              width={2}
              height={2}
              margin={1}
            />
            <Avatar
              src={'/assets/images/battles/useravatar12.webp'}
              width={8}
              height={8}
            />
          </Flex>
          <Box fontWeight={'black'}>{`$${(45.21).toFixed(2)}`}</Box>
        </Flex>

        <Link href={'/battles/id'}>
          <Flex
            overflowX={'hidden'}
            justifyContent={{ base: 'center', md: 'start' }}
            gap={2}
            flex={1}
            paddingX={4}
          >
            {packs.map((pack) => (
              <PackCard2 {...pack} />
            ))}
          </Flex>
        </Link>

        <Link href={'/battles/id'}>
          <Flex margin={'1rem'}>
            <Button width={'115px'}>View Results</Button>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  )
}

export default BattleCard
