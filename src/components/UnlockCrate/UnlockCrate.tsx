'use client'
import Image from 'next/image'
import { Flex, Text, Button, Box, Heading } from '@chakra-ui/react'
import UnlockCrateSlider from '@/components/UnlockCrateSlider'

const UnlockCrate = () => {
  return (
    <Flex
      bg={{
        base: 'transparent',
        sm: 'transparent',
        md: 'transparent',
        lg: '#313030',
      }}
      borderRadius={30}
      justifyContent="center"
      alignItems="center"
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
    >
      <Flex
        direction="column"
        gap="8"
        px={{ base: 0, md: 10, lg: 10 }}
        py={{ base: 0, md: 10, lg: 10 }}
        flex={1}
        alignItems={{ base: 'center', lg: 'start' }}
      >
        <Flex direction="column">
          <Heading
            fontFamily="Clash Grotesk"
            fontWeight={500}
            fontSize={{ base: 28, sm: 32, md: 40 }}
          >
            Unlock a crates with
          </Heading>
          <Heading
            fontFamily="Clash Grotesk"
            fontWeight={500}
            fontSize={{ base: 28, sm: 32, md: 40 }}
          >
            higher odds as you go
          </Heading>
        </Flex>
        <Box>
          <Text
            fontSize={{ base: 15, sm: 18, md: 21 }}
            fontFamily="Airbnb Cereal"
            fontWeight={500}
            whiteSpace={'nowrap'}
          >
            Every few packs opened, you unlock a crate...
          </Text>
          <Text
            fontSize={{ base: 15, sm: 18, md: 21 }}
            fontFamily="Airbnb Cereal"
            fontWeight={500}
            whiteSpace={'nowrap'}
          >
            The Ultimate prize one can get with 99% higher odds
          </Text>
        </Box>
        <UnlockCrateSlider label="2500 XP's left" />
        <Button
          bg={'yellow.500'}
          h={{ base: '3rem' }}
          w={{ base: '5.5rem' }}
          color={'gray.800'}
          _hover={{ bg: 'yellow.400' }}
        >
          Register
        </Button>
      </Flex>
      <Flex padding={10} alignItems="center" justifyContent="center" flex={1}>
        <Image
          src={`/assets/images/unlockcrate.png`}
          alt="crate.png"
          width={400}
          height={150}
          style={{ width: '100%', height: '100%' }}
        />
      </Flex>
    </Flex>
  )
}

export default UnlockCrate
