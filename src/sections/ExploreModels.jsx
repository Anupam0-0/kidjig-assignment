import { Zap, MessageSquare, Image, Settings, ChartNoAxesColumnIncreasing } from 'lucide-react';
import { default as ImageTag } from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const List = [
    {
        icon: <Zap size={20} />,
        name: "All",
    },
    {
        icon: <MessageSquare size={20} />,
        name: "Chat",
    },
    {
        icon: <Image size={20} />,
        name: "Image"
    }
]

const ExlporeList = [
    {
        id: 1,
        icon: <Settings />,
        name: "Simple Integration",
        content: "Simply change the endpoints in your existing setup, and you're ready to go.",
        image: "https://platform.kidjig.com/easy-to-intgr.png"
    },
    {
        id: 2,
        icon: <ChartNoAxesColumnIncreasing />,
        name: "Infinite Scalability",
        content: "Experience low latency with our AI API, deploy instantly, and surpass rate limits without impact.",
        image: "https://platform.kidjig.com/graph-pic.svg",
    }
]

const FAQs = [
    {
        id: 'item-1',
        question: "What is KidJig API?",
        answer: "KidJig API Provider - your gateway to multiple AI language models through a single, unified API interface. Our API allows you to interact with various AI models from different providers while maintaining a consistent request and response format."

    },
    {
        id: 'item-2',
        question: "How to get started?",
        answer: "To get started with the KidJig API, please create an account and generate your unique API Key. This key will grant you access to our powerful AI functionalities."

    },
    {
        id: 'item-3',
        question: "How do I contact support?",
        answer: "You can reach out to us for support through our Discord community or via email founder@kidjig.com. We're here to help!"
    }
]


export default function ExploreModels() {
    return (
        <main className='min-h-screen w-full py-20'>
            {/* head */}
            <h1 className='text-4xl md:text-6xl font-medium text-center text-neutral-100'> Explore Available Models </h1>
            <div className='flex justify-between items-center py-10 -ml-4 md:px-16 xl:px-24'>
                <div className='flex px-4 scale-75 md:scale-100'>
                    {List.map((item, i) => (
                        <button key={i} className=" flex gap-2 py-2 px-4 items-center justify-center rounded-2xl focus:bg-neutral-800">
                            <div>{item.icon}</div>
                            <p className='uppercase'>{item.name}</p>
                        </button>
                    )
                    )}
                </div>
                <input className='w-64 h-12 px-2 border-2 rounded-md border-neutral-800 outline-none hidden sm:block' placeholder="Search for Models..." />
            </div>

            {/* body */}
            <div className='px-4 md:px-16 xl:px-24'>
                <ImageTag src='https://platform.kidjig.com/og-image.png' height={10} width={1300} alt='screenshot' className='rounded-lg md:rounded-4xl mx-auto shadow-xl shadow-blue-300/20 border border-b-blue-500'></ImageTag>
            </div>

            <div className='flex flex-col items-center md:flex-row md:justify-center gap-10 py-16 px-4 '>
                {
                    ExlporeList.map((items) => (
                        <div key={items.id} className='w-[38em] h-[37em] flex flex-col gap-4 items-start justify-center p-6 rounded-4xl bg-linear-to-tl from-blue-600/60 via-neutral-900 to-neutral-900 shadow-xl shadow-blue-400/20 border border-blue-500/50 border-b-blue-600'>
                            <div className='text-blue-500 scale-150'>{items.icon}</div>
                            <h2 className='text-4xl text-slate-100 font-medium'>{items.name}</h2>
                            <p className='text-md text-slate-100/80' >{items.content}</p>
                            <ImageTag className='rounded-2xl' src={items.image} height={10} width={600} alt='code-example'></ImageTag>
                        </div>

                    ))
                }

            </div>


            {/* Accordion */}

            <div className='max-w-7xl mx-auto py-10'>
                <h2 className='text-4xl text-white/90 md:text-6xl font-semibold px-10'>Frequently Ask Questions</h2>
                <div className='w-full md:max-w-6xl md:mx-auto py-10 px-4 sm:px-10'>
                    <Accordion type="single" collapsible className="w-full">
                        {FAQs.map((item) => (
                            <AccordionItem value={item.id} key={item.id}>
                                <AccordionTrigger className='text-xl text-slate-100/90'>{item.question}</AccordionTrigger>
                                <AccordionContent className={`text-[16px] text-slate-100/80 tracking-wide`}>{item.answer} </AccordionContent>                            </AccordionItem>
                        ))
                        }
                    </Accordion>
                </div>
            </div>
            <div className='h-[0.5px] bg-neutral-100/80 mx-20 '></div>

        </main>
    )
}