import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { Container, Flex } from '@chakra-ui/react'

import LayoutProvider from '@/components/LayoutProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopLoader from 'nextjs-toploader'

interface IRootLayout {
  children: ReactNode
}

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wincrate',
  description: 'Generated by Wincrate',
}

const RootLayout = ({ children }: Readonly<IRootLayout>) => (
  <html lang="en">
    <body className={urbanist.className}>
    <TopLoader
        color="#2299DD"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      />
      <LayoutProvider>
        <Header />
        <main>
          <Container maxW={'container.xl'}>
            <Flex justifyContent="center">{children}</Flex>
          </Container>
        </main>
        <Footer />
      </LayoutProvider>
    </body>
  </html>
)

export default RootLayout
