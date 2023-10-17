import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Properties in Changancherry, Alexen Kavalam',
  description: 'Want to sell your properties, homes, real estate or buy property, homes, house, real estate in or around changanacherry, kottayam, contact us to get the best price',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
