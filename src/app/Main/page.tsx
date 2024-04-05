"use client"


import * as React from "react"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


;


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


  import Autoplay from "embla-carousel-autoplay"
   
  import { Button } from "@/components/ui/button"


  import { Input } from "@/components/ui/input"

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  



export default function Component() {

   
   
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
  return (<>
  <div className="flex flex-row gap-3 bg-yellow-400 align-middle">
    <div className="h-[70px] text-white text-xl bg-black w-full rounded-md ml-3 mr-3">
    
      <div className="flex flex-row gap-1  justify-between items-center">
      <p  className="font-bold text-2xl text-yellow-400 m-3 ">
        Yellowindow

      </p>
      <ul className="flex flex-row gap-5 justify-center items-center mr-9 text-sm">
        <li>
           <a href="#"> Meditation</a>
        </li>
        <li>
           <a href="./Journal/"> Journal</a>
        </li>
        <li>
           <a href="#">WellBeing</a>
        </li>
        <li>
          <a href="#"> Profile</a>
        </li>
      </ul>
      </div>


    </div>
  </div>

     
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-yellow-400">
        
      <div className="container space-y-10 xl:space-y-16 p-5">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          Hi, let your mental wellness start here 
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
           
            <div className="space-x-4">
               
            <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
               Past Month
              </Link>
              <ResponsiveContainer width="100%" height="80%">
                 <LineChart width={300} height={100} data={data}>
                     <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                      </LineChart>
                      </ResponsiveContainer>
            </div>
            <p>Your mood history based on your inputs </p>
          </div>
          <Card  className="border-none ">
             <CardHeader  className="flex flex-col justify-center items-center gap-2" >
                 <CardTitle>How was your mood</CardTitle>
                 <Button className="w-[20vw]  bg-yellow-400">Very Good </Button>
                 <Button className="w-[20vw]  bg-blue-500">Good </Button>
                 <Button className="w-[20vw] bg-pink-700 ">Okay</Button>
                 <Button className="w-[20vw]  bg-slate-600">Not good  </Button>
                 
                 </CardHeader>
                    <CardFooter>
                         <p> We store this data to track your daily progress</p>
                         </CardFooter>
                         
            </Card>

            <Card className="border-none bg-black">
         
             <CardHeader className="flex flex-col justify-center items-center">
                 
                 <Carousel className="w-full max-w-[16vw] "   plugins={[plugin.current]}
              
                 onMouseEnter={plugin.current.stop}
                 onMouseLeave={plugin.current.reset} >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                        </Card>
                                        </div>
                                        </CarouselItem>
                                        ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                        </Carousel>


                 <Button className="w-[20vw] bg-slate-700">Connect To A New Certified Therapist  </Button>
                 <Button className="w-[20vw]  bg-slate-700 ">Talk to your Therapist  </Button>
                
                 
                 </CardHeader>

                      
            </Card>
            
        </div>
      
        <div className="h-[50vh] bg-white rounded-md m-7 p-4 font-bold">
    <p className="text-3xl p-5 text-bold">Popular Groups </p>
    
    
    <div >
        <div className="flex flex-row gap-5">
        <Card className="w-[20vw]">
  <CardHeader>
    <CardTitle>m/Safe_Space </CardTitle>
    <CardDescription>We listen to your struggles, no matter how small or how scary. This is your safe space, come here free of judgement and fear. </CardDescription>
  </CardHeader>
  <CardContent>
    <p>83k | Members</p>
  </CardContent>
  <Button className="m-2 "> Join Now </Button>
</Card>

<Card className="w-[20vw]">
  <CardHeader>
    <CardTitle>m/Well-Beiings</CardTitle>
    <CardDescription>We here at well beings listen to you, your struggles and your goals, to help you better understand yourself at the end</CardDescription>
  </CardHeader>
  <CardContent>
    <p>112k | Members </p>
  </CardContent>
 <Button className="m-2 "> Join Now </Button>
</Card>


<Card className="w-[20vw]">
  <CardHeader>
    <CardTitle>m/Chronic_Patients</CardTitle>
    <CardDescription>This is a forum for chronic patients to not feel alone. Connect with a community that shares in your struggles</CardDescription>
  </CardHeader>
  <CardContent>
    <p>112k | Members </p>
  </CardContent>
 <Button className="m-2 "> Join Now </Button>
</Card>



<Card className="w-[20vw]">
  <CardHeader>
    <CardTitle>m/Senior_Citizens</CardTitle>
    <CardDescription>Hello everyone!! This is a group of senior citizens to interact with each other, and expand our social circle!! Please join!! </CardDescription>
  </CardHeader>
  <CardContent>
    <p>112k | Members </p>
  </CardContent>
 <Button className="m-2 "> Join Now </Button>
</Card>













        </div>
       
      </div>


      </div>

      </div>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 dark:bg-zinc-100">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white">
          Stay Connected
        </h2>
        <p className="mx-auto max-w-[700px] text-zinc-100 md:text-lg dark:text-zinc-800">
          Subscribe to our newsletter and follow us on our social media.
        </p>
        <div className="w-full max-w-md space-y-2 my-4">
          <form className="flex space-x-2">
            <Input className="max-w-lg flex-1 text-zinc-900 bg-white" placeholder="Enter your email" type="email" />
            <Button className="text-black border-white" type="submit" variant="outline">
              Subscribe
            </Button>
          </form>
        </div>
        <div className="flex justify-center space-x-4">
          <Link aria-label="Facebook page" className="text-white" href="#">
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="Twitter profile" className="text-white" href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="Instagram profile" className="text-white" href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="LinkedIn profile" className="text-white" href="#">
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>


     
    </section>


</>
  )

  function FacebookIcon(props : any ) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )}

    function InstagramIcon(props  : any) {
        return (
          <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        )
        }


      
function LinkedinIcon(props : any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>


    )
  }



function TwitterIcon(props : any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }
  
      
   
  
}
