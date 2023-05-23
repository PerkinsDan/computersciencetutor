import Link from 'next/link'

export default function Home() {
    const codePath = '/downloads/computer-science/aqa/8520'

    return (
        <main className="flex min-h-screen flex-col items-center gap-12 p-12">
            <div className='text-center'>
                <h2>GCSE</h2>
                <h1 className='text-2xl'>AQA</h1>
                <h2>8520</h2>
            </div>
            <div className='max-w-lg w-full gap-4 flex flex-col'>
                <h2 className='text-center font-bold text-lg'>Paper 1</h2>
                <div className='flex flex-wrap justify-around w-full gap-4'>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Past Papers</h3>
                        <Link href={codePath + '/s20_qp_1.pdf'} target='_blank' prefetch={false}>Jun 2020 - 1</Link>
                        <Link href={codePath + '/s19_qp_1.pdf'} target='_blank' prefetch={false}>Jun 2019 - 1</Link>
                        <Link href={codePath + '/s18_qp_1.pdf'} target='_blank' prefetch={false}>Jun 2018 - 1</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Mark Schemes</h3>
                        <Link href={codePath + '/s20_ms_1.pdf'} target='_blank' prefetch={false}>Jun 2020 - 1</Link>
                        <Link href={codePath + '/s19_ms_1.pdf'} target='_blank' prefetch={false}>Jun 2019 - 1</Link>
                        <Link href={codePath + '/s18_ms_1.pdf'} target='_blank' prefetch={false}>Jun 2018 - 1</Link>
                    </div>
                </div>
            </div>
            <div className='max-w-lg w-full gap-4 flex flex-col'>
                <h2 className='text-center font-bold text-lg'>Paper 2</h2>
                <div className='flex flex-wrap justify-around w-full gap-4'>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Past Papers</h3>
                        <Link href={codePath + '/s20_qp_2.pdf'} target='_blank' prefetch={false}>Jun 2020 - 2</Link>
                        <Link href={codePath + '/s19_qp_2.pdf'} target='_blank' prefetch={false}>Jun 2019 - 2</Link>
                        <Link href={codePath + '/s18_qp_2.pdf'} target='_blank' prefetch={false}>Jun 2018 - 2</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Mark Schemes</h3>
                        <Link href={codePath + '/s20_ms_2.pdf'} target='_blank' prefetch={false}>Jun 2020 - 2</Link>
                        <Link href={codePath + '/s19_ms_2.pdf'} target='_blank' prefetch={false}>Jun 2019 - 2</Link>
                        <Link href={codePath + '/s18_ms_2.pdf'} target='_blank' prefetch={false}>Jun 2018 - 2</Link>
                    </div>
                </div>
            </div>
        </main >
    )
}
