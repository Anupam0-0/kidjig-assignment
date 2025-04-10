import React from 'react'
import Aurora from '@/components/Aurora'
import TakeaTour from '@/components/TakeaTour'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { MarqueeSection } from '@/components/Marquee'

const Hero = () => {
    return (
        <div className='min-h-screen relative w-full bg-slate-950'>
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

            {/* <Aurora
                colorStops={["#3A29FF", "#4334B4", "#3119FF"]}
                blend={0.74}
                amplitude={1.0}
                speed={0.4}
            /> */}

            <div className='mt-20 flex flex-col justify-center items-center gap-8 '>
                <h1 className='text-7xl md:text-8xl text-center font-bold md:leading-21 text-neutral-50'>Enterprise <br />
                    AI Gateway
                </h1>
                <p className='text-neutral-200 text-lg  md:text-xl text-center w-full max-w-xl'>Unify, secure, and scale your enterprise AI infrastructure through a single, powerful gateway. Access and manage multiple AI providers with enterprise-grade security.
                </p>
                <div className='flex gap-8 my-2'>
                    <Button className='bg-slate-100 w-44 h-12 rounded-4xl text-md ' >Get Api Key <ArrowRight /></Button>
                    <ShimmerButton className='text-neutral-50'> Schedule Demo  <ArrowRight /></ShimmerButton>
                </div>
                <div className='mb-8'>
                    <TakeaTour />
                </div>
            </div>

            <MarqueeSection />
        </div>
    )
}

export default Hero