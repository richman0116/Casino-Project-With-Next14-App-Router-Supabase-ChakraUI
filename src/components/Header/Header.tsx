'use client'
import Image from 'next/image'

import {
  Box,
  Stack,
  Flex,
  IconButton,
  Text,
  Tag,
  Collapse,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Button,
  Container,
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import UserModal from '../auth/UserModal'
import Login from '../auth/Login'
import Register from '../auth/Register'

import { HEADER_NAV_ITEMS } from '@/constants/navItems'

import { INavBar, TNavItem } from '@/types/navItem'
import Link from 'next/link'
import { useSession } from '@/contexts/supabase-provider'

const NavbarBgColor = '#1F1F1F'

const DesktopNav = (props: INavBar) => {
  const { navItems } = props

  return (
    <Stack direction={'row'} spacing={{ base: 0, md: 2, lg: 4 }}>
      {navItems?.map((headerNavItem, index) => (
        <Link href={headerNavItem.href ?? '#'} key={headerNavItem.label + index}>
          <Button
            px={{ md: 2, lg: 4 }}
            fontSize={'md'}
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
            bgColor={useColorModeValue('white', NavbarBgColor)}
            _hover={{
              textDecoration: 'none',
              color: useColorModeValue('gray.800', 'gray.50'),
              bgColor: useColorModeValue('gray.200', '#FFFFFF05'),
            }}
          >
            {headerNavItem.label}
            {Boolean(headerNavItem.isNew) && (
              <Tag
                size="sm"
                pt={0.5}
                bg={useColorModeValue('yellow.300', 'yellow.500')}
                ml={2}
                color={'gray.800'}
                rounded="full"
              >
                New
              </Tag>
            )}
          </Button>
        </Link>
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ href, label }: TNavItem) => (
  <Box
    py={2}
    justifyContent="space-between"
    alignItems="center"
    _hover={{
      textDecoration: 'none',
    }}
  >
    <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
      {label}
    </Text>
  </Box>
)

const MobileNav = (props: INavBar) => {
  const { navItems } = props

  return (
    <Stack
      position={'relative'}
      zIndex={999}
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {navItems?.map((headerNavItem, index) => (
        <Link href={headerNavItem.href ?? '#'} key={headerNavItem.label + index}>
          <MobileNavItem {...headerNavItem} />
        </Link>
      ))}
    </Stack>
  )
}

const Header = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const session = useSession()
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure()
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure()
  if (session) {
    // authentificated
  } else {
    // logged out
  }
  return (
    <header className="header">
      <Box
        width="full"
        height="3.75rem"
        bg={useColorModeValue('white', NavbarBgColor)}
        color={useColorModeValue('gray.600', 'white')}
      >
        <Container maxW={'container.xl'} height={'full'}>
          <Flex
            height="full"
            width="full"
            justifyContent="center"
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
          >
            <Flex width="full" align="center" justifyContent="space-between">
              <Flex>
                <Flex
                  flex={{ base: 1, md: 'auto' }}
                  ml={{ base: -2 }}
                  display={{ base: 'flex', md: 'none' }}
                >
                  <IconButton
                    onClick={onToggle}
                    icon={
                      isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                  />
                </Flex>

                <Flex
                  justify={{ base: 'center', md: 'start' }}
                  gap={{ base: 0, md: 6, lg: 12 }}
                >
                  <Flex
                    width={{ base: 32 }}
                    bg="darkgray.500"
                    justifyContent={'center'}
                    alignItems={'center'}
                    cursor="pointer"
                    as="a"
                    href="/"
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/logo.webp`}
                      alt="Wincrate Logo"
                      width="128"
                      height="23"
                    />
                  </Flex>

                  <Box display={{ base: 'none', md: 'flex' }}>
                    <DesktopNav navItems={HEADER_NAV_ITEMS} />
                  </Box>
                </Flex>
              </Flex>

              <Flex gap={2} justifyContent="center" alignItems="center">
                {/* <Flex
                  h={{ base: '1.875rem' }}
                  w={{ base: '1.875rem' }}
                  alignItems="center"
                  justifyContent="center"
                  rounded="full"
                  bgColor={useColorModeValue('gray.200', 'gray.900')}
                  onClick={toggleColorMode}
                  cursor="pointer"
                >
                  {colorMode === 'light' ? (
                    <MoonIcon w={{ base: 5 }} h={{ base: 5 }} />
                  ) : (
                    <SunIcon w={{ base: 5 }} h={{ base: 5 }} />
                  )}
                </Flex> */}
                {/* <Flex
                  rounded="full"
                  h={{ base: '1.875rem' }}
                  borderWidth={2}
                  borderColor={useColorModeValue('gray.400', 'gray.700')}
                  color={useColorModeValue('gray.400', 'gray.600')}
                  fontSize="small"
                  fontWeight="medium"
                  alignItems="center"
                  justifyContent="space-between"
                  pl={2}
                  pr={1.5}
                >
                  <Box display="inline-flex">
                    <Box color={useColorModeValue('gray.600', 'gray.400')}>
                      ${Number(24046).toLocaleString('us')}
                    </Box>
                    .43
                  </Box>
                  <Flex
                    h={4}
                    w={4}
                    alignItems="center"
                    justifyContent="center"
                    fontSize={'md'}
                    lineHeight="1rem"
                    fontWeight="bold"
                    color={useColorModeValue('white', 'white')}
                    bg={'orange'}
                    rounded="full"
                    pb={0.75}
                    cursor="pointer"
                    ml={4}
                  >
                    +
                  </Flex>
                </Flex> */}
                <Flex gap={2}>
                  <Button bg={'none'} onClick={onOpenLogin}>
                    Login
                  </Button>
                  <Button
                    bg={useColorModeValue('yellow.300', 'yellow.500')}
                    onClick={onOpenRegister}
                  >
                    Register
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav navItems={HEADER_NAV_ITEMS} />
        </Collapse>
        <UserModal isOpen={isOpenLogin} onClose={onCloseLogin}>
          <Login />
        </UserModal>
        <UserModal isOpen={isOpenRegister} onClose={onCloseRegister}>
          <Register />
        </UserModal>
      </Box>
    </header>
  )
}

export default Header
