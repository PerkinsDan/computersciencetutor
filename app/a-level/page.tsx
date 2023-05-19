import Link from 'next/link'

export default function ALevel() {
    const links = [
        {name: "Cambridge International", href: "a-level/cambridge-international"},
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
