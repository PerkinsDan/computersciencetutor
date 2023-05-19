import Link from 'next/link'

export default function Home() {
    const codePath = '/downloads/computer-science/cambridge-international/0478'

    return (
        <main className="flex min-h-screen flex-col items-center gap-12 p-12">
            <div className='text-center'>
                <h2>IGCSE</h2>
                <h1 className='text-2xl'>Cambridge International</h1>
                <h2>0478</h2>
            </div>
            <div className='max-w-lg w-full gap-4 flex flex-col'>
                <h2 className='text-center font-bold text-lg'>Specimen</h2>
                <div className='flex flex-wrap justify-around w-full gap-4'>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Past Papers</h3>
                        <Link href={codePath + '/Spec2023/0478_e23_qp_01a.pdf'} target='_blank' prefetch={false}>Spec 2023 - 01a</Link>
                        <Link href={codePath + '/Spec2023/0478_e23_qp_01b.pdf'} target='_blank' prefetch={false}>Spec 2023 - 01b</Link>
                        <Link href={codePath + '/Spec2023/0478_e23_qp_02a.pdf'} target='_blank' prefetch={false}>Spec 2023 - 02a</Link>
                        <Link href={codePath + '/Spec2023/0478_e23_qp_02b.pdf'} target='_blank' prefetch={false}>Spec 2023 - 02b</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Mark Schemes</h3>
                        <Link href={codePath + '/Spec2023/0478_e23_ms_01a.pdf'} target='_blank' prefetch={false}>Spec 2023 - 01a</Link>
                        <Link href={codePath + '/Spec2023/0478_e23_ms_01b.pdf'} target='_blank' prefetch={false}>Spec 2023 - 01b</Link>
                        <Link href={codePath + '/Spec2023/0478_e23_ms_02a.pdf'} target='_blank' prefetch={false}>Spec 2023 - 02a</Link>
                        <Link href={codePath + '/Spec2023/0478_e23_ms_02b.pdf'} target='_blank' prefetch={false}>Spec 2023 - 02b</Link>
                    </div>
                </div>
            </div>
            <div className='max-w-lg w-full gap-4 flex flex-col'>
                <h2 className='text-center font-bold text-lg'>Paper 1</h2>
                <div className='flex flex-wrap justify-around w-full gap-4'>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Past Papers</h3>
                        <Link href={codePath + '/Nov2016/0478_w16_qp_11.pdf'} target='_blank' prefetch={false}>Nov 2016 - 11</Link>
                        <Link href={codePath + '/Nov2016/0478_w16_qp_12.pdf'} target='_blank' prefetch={false}>Nov 2016 - 12</Link>
                        <Link href={codePath + '/Jun2016/0478_s16_qp_11.pdf'} target='_blank' prefetch={false}>Jun 2016 - 11</Link>
                        <Link href={codePath + '/Jun2016/0478_s16_qp_12.pdf'} target='_blank' prefetch={false}>Jun 2016 - 12</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Mark Schemes</h3>
                        <Link href={codePath + '/Nov2016/0478_w16_ms_11.pdf'} target='_blank' prefetch={false}>Nov 2016 - 11</Link>
                        <Link href={codePath + '/Nov2016/0478_w16_ms_12.pdf'} target='_blank' prefetch={false}>Nov 2016 - 12</Link>
                        <Link href={codePath + '/Jun2016/0478_s16_ms_11.pdf'} target='_blank' prefetch={false}>Jun 2016 - 11</Link>
                        <Link href={codePath + '/Jun2016/0478_s16_ms_12.pdf'} target='_blank' prefetch={false}>Jun 2016 - 12</Link>
                    </div>
                </div>
            </div>
            <div className='max-w-lg w-full gap-4 flex flex-col'>
                <h2 className='text-center font-bold text-lg'>Paper 2</h2>
                <div className='flex flex-wrap justify-around w-full gap-4'>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Past Papers</h3>
                        <Link href={codePath + '/Nov2016/0478_w16_qp_21.pdf'} target='_blank' prefetch={false}>Nov 2016 - 11</Link>
                        <Link href={codePath + '/Nov2016/0478_w16_qp_22.pdf'} target='_blank' prefetch={false}>Nov 2016 - 12</Link>
                        <Link href={codePath + '/Jun2016/0478_s16_qp_21.pdf'} target='_blank' prefetch={false}>Jun 2016 - 11</Link>
                        <Link href={codePath + '/Jun2016/0478_s16_qp_22.pdf'} target='_blank' prefetch={false}>Jun 2016 - 12</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Mark Schemes</h3>
                        <Link href={codePath + '/Nov2016/0478_w16_ms_21.pdf'} target='_blank' prefetch={false}>Nov 2016 - 11</Link>
                        <Link href={codePath + '/Nov2016/0478_w16_ms_22.pdf'} target='_blank' prefetch={false}>Nov 2016 - 12</Link>
                        <Link href={codePath + '/Jun2016/0478_s16_ms_21.pdf'} target='_blank' prefetch={false}>Jun 2016 - 11</Link>
                        <Link href={codePath + '/Jun2016/0478_s16_ms_22.pdf'} target='_blank' prefetch={false}>Jun 2016 - 12</Link>
                    </div>
                </div>
            </div>
        </main >
    )
}
