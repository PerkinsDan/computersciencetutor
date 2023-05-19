import Link from 'next/link'

export default function Home() {
    const links = [
        { name: "GCSE", href: "/gcse" },
        { name: "IGCSE", href: "/igcse" },
        { name: "A-Level", href: "/a-level" },
    ]

    return (
        <main className="flex min-h-screen flex-col items-center gap-12 p-12">
            <div className='flex flex-col text-center gap-4'>
                <h2 className='font-bold'>Select Your Level:</h2>
                <div className='flex gap-12'>
                    {links.map(({ name, href }) => (
                        <Link key={name} href={href}>{name}</Link>
                    ))}
                </div>
            </div>
        </main >
    )
}
