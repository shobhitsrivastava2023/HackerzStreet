import React from 'react'
import { Textarea } from "@/components/ui/textarea"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
 
import { cn } from "@/lib/utils";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


  import { Button } from '@/components/ui/button';





const page = () => {
  return (
    <section className='h-full flex flex-row justify-between items-center bg-yellow-400'>

        <div className='h-screen w-[30%] '>
            <div  className='h-full  bg-black text-white'>
             <h1 className='text-3xl p-4 '>
                Journal History
             </h1>
             <div className='p-5  h-[70%]'>
             <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>yesterday</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>last week</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Last Month</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
   
             </div>
             <div>
    <Button className="w-[20vw]  bg-slate-800">Back </Button>
    </div>
           

            </div>




             </div>
             <div className=' bg-yellow-400 w-full h-screen'>
             <div className='w-full p-4'>
        <Textarea placeholder="Type your message here."  />
        </div>

    
         </div>
         <div className='p-5'>
         <Button className="w-[20vw]  bg-slate-800 p-5 w-[100px]" >Submit </Button>

         </div>
      
      
    </section>
  )
}

export default page
