import React, { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { store } from '../stores/store'
import { Provider } from 'react-redux'

import '../styles/globals.css'

import 'tailwindcss/tailwind.css';

import { Cabin } from 'next/font/google'

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
        {/* <div className={`${cabin.variable}`}> */}
        {getLayout(<Component {...pageProps} />)}
        {/* </div> */}
      </Provider>
    </>
  )
}

export default App
