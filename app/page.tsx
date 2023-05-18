import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center gap-12 p-12">
            <h1 className='text-2xl'>Exam Paper Vault</h1>

            <div className='max-w-lg w-full gap-4 flex flex-col'>
                <h2 className='text-center font-bold text-lg'>Paper 1</h2>
                <div className='flex flex-wrap justify-around w-full gap-4'>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Past Papers</h3>
                        <Link href='/downloads/Nov2022/9618_w22_qp_11.pdf' target='_blank' prefetch={false}>Nov 2022 - 11</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_12.pdf' target='_blank' prefetch={false}>Nov 2022 - 12</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_13.pdf' target='_blank' prefetch={false}>Nov 2022 - 13</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_11.pdf' target='_blank' prefetch={false}>Jun 2022 - 11</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_12.pdf' target='_blank' prefetch={false}>Jun 2022 - 12</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_13.pdf' target='_blank' prefetch={false}>Jun 2022 - 13</Link>
                        <Link href='/downloads/Nov2021/9618_w21_qp_11.pdf' target='_blank' prefetch={false}>Nov 2021 - 11</Link>
                        <Link href='/downloads/Nov2021/9618_w21_qp_12.pdf' target='_blank' prefetch={false}>Nov 2021 - 12</Link>
                        <Link href='/downloads/Nov2021/9618_w21_qp_13.pdf' target='_blank' prefetch={false}>Nov 2021 - 13</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Mark Schemes</h3>
                        <Link href='/downloads/Nov2022/9618_w22_ms_11.pdf' target='_blank' prefetch={false}>Nov 2022 - 11</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_12.pdf' target='_blank' prefetch={false}>Nov 2022 - 12</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_13.pdf' target='_blank' prefetch={false}>Nov 2022 - 13</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_11.pdf' target='_blank' prefetch={false}>Jun 2022 - 11</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_12.pdf' target='_blank' prefetch={false}>Jun 2022 - 12</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_13.pdf' target='_blank' prefetch={false}>Jun 2022 - 13</Link>
                        <Link href='/downloads/Nov2021/9618_w21_ms_11.pdf' target='_blank' prefetch={false}>Nov 2021 - 11</Link>
                        <Link href='/downloads/Nov2021/9618_w21_ms_12.pdf' target='_blank' prefetch={false}>Nov 2021 - 12</Link>
                        <Link href='/downloads/Nov2021/9618_w21_ms_13.pdf' target='_blank' prefetch={false}>Nov 2021 - 13</Link>
                    </div>
                </div>
            </div>
            <div className='max-w-lg w-full gap-4 flex flex-col'>
                <h2 className='text-center font-bold text-lg'>Paper 2</h2>
                <div className='flex flex-wrap justify-around w-full gap-4'>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Past Papers</h3>
                        <Link href='/downloads/Nov2022/9618_w22_qp_21.pdf' target='_blank' prefetch={false}>Nov 2022 - 21</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_22.pdf' target='_blank' prefetch={false}>Nov 2022 - 22</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_23.pdf' target='_blank' prefetch={false}>Nov 2022 - 23</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_21.pdf' target='_blank' prefetch={false}>Jun 2022 - 21</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_22.pdf' target='_blank' prefetch={false}>Jun 2022 - 22</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_23.pdf' target='_blank' prefetch={false}>Jun 2022 - 23</Link>
                        <Link href='/downloads/Nov2021/9618_w21_qp_21.pdf' target='_blank' prefetch={false}>Nov 2021 - 21</Link>
                        <Link href='/downloads/Nov2021/9618_w21_qp_22.pdf' target='_blank' prefetch={false}>Nov 2021 - 22</Link>
                        <Link href='/downloads/Nov2021/9618_w21_qp_23.pdf' target='_blank' prefetch={false}>Nov 2021 - 23</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Mark Schemes</h3>
                        <Link href='/downloads/Nov2022/9618_w22_ms_21.pdf' target='_blank' prefetch={false}>Nov 2022 - 21</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_22.pdf' target='_blank' prefetch={false}>Nov 2022 - 22</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_23.pdf' target='_blank' prefetch={false}>Nov 2022 - 23</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_21.pdf' target='_blank' prefetch={false}>Jun 2022 - 21</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_22.pdf' target='_blank' prefetch={false}>Jun 2022 - 22</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_23.pdf' target='_blank' prefetch={false}>Jun 2022 - 23</Link>
                        <Link href='/downloads/Nov2021/9618_w21_ms_21.pdf' target='_blank' prefetch={false}>Nov 2021 - 21</Link>
                        <Link href='/downloads/Nov2021/9618_w21_ms_22.pdf' target='_blank' prefetch={false}>Nov 2021 - 22</Link>
                        <Link href='/downloads/Nov2021/9618_w21_ms_23.pdf' target='_blank' prefetch={false}>Nov 2021 - 23</Link>
                    </div>
                </div>
            </div>
            <div className='max-w-lg w-full gap-4 flex flex-col'>
                <h2 className='text-center font-bold text-lg'>Paper 3</h2>
                <div className='flex flex-wrap justify-around w-full gap-4'>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Past Papers</h3>
                        <Link href='/downloads/Nov2022/9618_w22_qp_31.pdf' target='_blank' prefetch={false}>Nov 2022 - 31</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_32.pdf' target='_blank' prefetch={false}>Nov 2022 - 32</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_33.pdf' target='_blank' prefetch={false}>Nov 2022 - 33</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_31.pdf' target='_blank' prefetch={false}>Jun 2022 - 31</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_32.pdf' target='_blank' prefetch={false}>Jun 2022 - 32</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_33.pdf' target='_blank' prefetch={false}>Jun 2022 - 33</Link>
                        <Link href='/downloads/Nov2021/9618_w21_qp_31.pdf' target='_blank' prefetch={false}>Nov 2021 - 31</Link>
                        <Link href='/downloads/Nov2021/9618_w21_qp_32.pdf' target='_blank' prefetch={false}>Nov 2021 - 32</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Mark Schemes</h3>
                        <Link href='/downloads/Nov2022/9618_w22_ms_31.pdf' target='_blank' prefetch={false}>Nov 2022 - 31</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_32.pdf' target='_blank' prefetch={false}>Nov 2022 - 32</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_33.pdf' target='_blank' prefetch={false}>Nov 2022 - 33</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_31.pdf' target='_blank' prefetch={false}>Jun 2022 - 31</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_32.pdf' target='_blank' prefetch={false}>Jun 2022 - 32</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_33.pdf' target='_blank' prefetch={false}>Jun 2022 - 33</Link>
                        <Link href='/downloads/Nov2021/9618_w21_ms_31.pdf' target='_blank' prefetch={false}>Nov 2021 - 31</Link>
                        <Link href='/downloads/Nov2021/9618_w21_ms_32.pdf' target='_blank' prefetch={false}>Nov 2021 - 32</Link>
                    </div>
                </div>
            </div>
            <div className='max-w-lg w-full gap-4 flex flex-col'>
                <h2 className='text-center font-bold text-lg'>Paper 4</h2>
                <div className='flex flex-wrap justify-around w-full gap-4'>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Past Papers</h3>
                        <Link href='/downloads/Nov2022/9618_w22_qp_41.pdf' target='_blank' prefetch={false}>Nov 2022 - 41</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_42.pdf' target='_blank' prefetch={false}>Nov 2022 - 42</Link>
                        <Link href='/downloads/Nov2022/9618_w22_qp_43.pdf' target='_blank' prefetch={false}>Nov 2022 - 43</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_41.pdf' target='_blank' prefetch={false}>Jun 2022 - 41</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_42.pdf' target='_blank' prefetch={false}>Jun 2022 - 42</Link>
                        <Link href='/downloads/Jun2022/9618_s22_qp_43.pdf' target='_blank' prefetch={false}>Jun 2022 - 43</Link>
                        <Link href='/downloads/Nov2021/9618_w21_qp_41.pdf' target='_blank' prefetch={false}>Nov 2021 - 41</Link>
                        <Link href='/downloads/Nov2021/9618_w21_qp_42.pdf' target='_blank' prefetch={false}>Nov 2021 - 42</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Mark Schemes</h3>
                        <Link href='/downloads/Nov2022/9618_w22_ms_41.pdf' target='_blank' prefetch={false}>Nov 2022 - 41</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_42.pdf' target='_blank' prefetch={false}>Nov 2022 - 42</Link>
                        <Link href='/downloads/Nov2022/9618_w22_ms_43.pdf' target='_blank' prefetch={false}>Nov 2022 - 43</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_41.pdf' target='_blank' prefetch={false}>Jun 2022 - 41</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_42.pdf' target='_blank' prefetch={false}>Jun 2022 - 42</Link>
                        <Link href='/downloads/Jun2022/9618_s22_ms_43.pdf' target='_blank' prefetch={false}>Jun 2022 - 43</Link>
                        <Link href='/downloads/Nov2021/9618_w21_ms_41.pdf' target='_blank' prefetch={false}>Nov 2021 - 41</Link>
                        <Link href='/downloads/Nov2021/9618_w21_ms_42.pdf' target='_blank' prefetch={false}>Nov 2021 - 42</Link>
                    </div>
                </div>
            </div>
            <div className='max-w-lg w-full gap-4 flex flex-col'>
                <h2 className='text-center font-bold text-lg'>Information</h2>
                <div className='flex flex-wrap justify-around w-full gap-4'>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Paper 2 - Insert</h3>
                        <Link href='/downloads/Nov2022/9618_w22_in_21.pdf' target='_blank' prefetch={false}>Nov 2022 - 21</Link>
                        <Link href='/downloads/Nov2022/9618_w22_in_22.pdf' target='_blank' prefetch={false}>Nov 2022 - 22</Link>
                        <Link href='/downloads/Nov2022/9618_w22_in_23.pdf' target='_blank' prefetch={false}>Nov 2022 - 23</Link>
                        <Link href='/downloads/Jun2022/9618_s22_in_21.pdf' target='_blank' prefetch={false}>Jun 2022 - 21</Link>
                        <Link href='/downloads/Jun2022/9618_s22_in_22.pdf' target='_blank' prefetch={false}>Jun 2022 - 22</Link>
                        <Link href='/downloads/Jun2022/9618_s22_in_23.pdf' target='_blank' prefetch={false}>Jun 2022 - 23</Link>
                        <Link href='/downloads/Nov2021/9618_w21_in_21.pdf' target='_blank' prefetch={false}>Nov 2021 - 21</Link>
                        <Link href='/downloads/Nov2021/9618_w21_in_22.pdf' target='_blank' prefetch={false}>Nov 2021 - 22</Link>
                        <Link href='/downloads/Nov2021/9618_w21_in_23.pdf' target='_blank' prefetch={false}>Nov 2021 - 23</Link>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='underline font-bold'>Grade Boundaries</h3>
                        <Link href='/downloads/Nov2022/9618_w22_gt.pdf' target='_blank' prefetch={false}>Nov 2022</Link>
                        <Link href='/downloads/Jun2022/9618_s22_gt.pdf' target='_blank' prefetch={false}>Jun 2022</Link>
                        <Link href='/downloads/Nov2021/9618_w21_gt.pdf' target='_blank' prefetch={false}>Nov 2021</Link>
                    </div>
                </div>
            </div>
        </main >
    )
}
