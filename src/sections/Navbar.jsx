import React from 'react'
import Image from 'next/image'
import { RainbowButton } from "@/components/magicui/rainbow-button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

  

const Navbar = () => {
    return (
        <div className='py-4 px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 flex items-center justify-between border border-b-neutral-200/20'>
            {/* logo */}
            <div className='flex items-end gap-3 relative -top-0.5'>
                <Image src="https://platform.kidjig.com/kidjiglogo.png" height={50} width={30} alt='kidjig' />
                <h3 className='text-xl font-bold relative top-0.5'>Kidjid</h3>
                <Select className=''>
                    <SelectTrigger className="w-[80px] ml-2 rounded-lg h-2 scale-90 relative top-1 ">
                        <SelectValue placeholder="v1.8" />
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-900/80 text-slate-50/70 rounded-lg shadow-lg border border-neutral-200/20">
                        <SelectItem value="1.8">v1.8</SelectItem>
                        <SelectItem value="1.5">v1.5</SelectItem>
                        <SelectItem value="1.2">v1.2</SelectItem>
                    </SelectContent>
                </Select>
                <div className='hidden md:flex gap-4 text-md items-center px-2 relative text-slate-50/70 '>
                    <div> Docs</div>
                    <div>Pricing</div>
                    <div>Support</div>
                </div>
            </div>

            {/* light side */}
            <div className='flex items-center gap-6 text-slate-50/70 '>
                <Input className='hidden md:block' type="text" placeholder="Search Documentation..." />
                <RainbowButton>Login</RainbowButton>
            </div>
        </div>
    )
}
export default Navbar