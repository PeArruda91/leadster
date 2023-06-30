import StyledComponentsRegistry from './lib/registry'
import { Inter } from 'next/font/google'
import Navbar from './components/navBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Leadster',
  description: 'Generated by create next app',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}