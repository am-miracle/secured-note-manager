import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const year = new Date().getFullYear()
  return (
    <html lang="en" className="m-0 p-0 box-border">
      <body className={`${inter.className} w-full h-screen px-4`}>
        <Header />
        {children}
        <footer className="text-xl text-gray-400 text-center">Note-Keeper {year}</footer>
      </body>
    </html>
  )
}
