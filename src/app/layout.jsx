import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Login from '@/components/login/login'

const monteserrat = Montserrat({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GS-2',
}

export default function RootLayout() {
  return (
    <html lang="pt-br">
      <body>
        <Login/>
      </body>
    </html>
  )
}