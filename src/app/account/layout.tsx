import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import Sidebar from '@/components/Siderbar/Sidebar'
interface IAccountLayout {
  children: ReactNode
}

const AccountLayout = ({ children }: Readonly<IAccountLayout>) => (
  <Flex
    maxWidth="1440px"
    width="full"
    px={{ base: 4, md: 6, lg: 10 }}
    mt={6}
    mb={16}
    gap={10}
    direction={{ base: 'column', md: 'column', lg: 'row' }}
  >
    <Sidebar />
    <Flex width="full">{children}</Flex>
  </Flex>
)

export default AccountLayout
