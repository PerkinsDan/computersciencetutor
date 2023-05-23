import Link from 'next/link'

export default function Page() {
    const links = [
        {name: "8520", href: "gcse/aqa/8520"},
    ]

    return (
        <main className="flex min-h-screen flex-col items-center gap-12 p-12">
            <div className='flex gap-12'>
                {links.map(({name, href}) => (
                    <Link key={name} href={href}>{name}</Link>
                ))}
            </div>
        </main >
    )
}
