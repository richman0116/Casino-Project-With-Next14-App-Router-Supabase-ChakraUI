'use client'
import { Flex } from '@chakra-ui/react'
import CryptoContainer from '@/components/container/CryptoContainer'
const CryptoDeposits = () => {
  return (
    <Flex width={'full'} direction={'column'} justifyContent={'center'}>
      <CryptoContainer />
    </Flex>
  )
}

export default CryptoDeposits