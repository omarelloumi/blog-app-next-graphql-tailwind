import './globals.css'
import { Roboto } from 'next/font/google';

const roboto_medium = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto-medium',
});

export const metadata = {
  title: 'Blog App NextJS',
  description: 'A blog app built with NextJS, GraphQL, and TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto_medium.variable} font-medium min-w-screen min-h-screen w-full h-full m-0 p-0 flex flex-col justify-start items-center`}>
        {children}
      </body>
    </html>
  )
}
