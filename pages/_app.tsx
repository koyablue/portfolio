import React, { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { store } from '../stores/store'
import { Provider } from 'react-redux'

import '../styles/globals.css'

import 'tailwindcss/tailwind.css';

import { Cabin } from 'next/font/google'
import Head from 'next/head'

// https://nextjs.org/docs/basic-features/layouts

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin'
})

const App = ({ Component, pageProps, }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Provider store={store}>
      <style jsx global>
        {`
          :root {
            --font-cabin: ${cabin.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
      </Head>
        {/* <div className={`${cabin.variable}`}> */}
        {getLayout(<Component {...pageProps} />)}
        {/* </div> */}
      </Provider>
    </>
  )
}

export default App
