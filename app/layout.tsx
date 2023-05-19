import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Exam Paper Vault',
    description: 'All the exam papers you need! For GCSE & A Level Students.',
}

const Navbar = () => {
    return (
        <div className='flex sticky top-0 justify-between p-8 border-b backdrop-blur-3xl md:px-40'>
            <Link href="/">Exam Paper Vault</Link>
            <div className='flex gap-8'>
                <Link href="/">Home</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
