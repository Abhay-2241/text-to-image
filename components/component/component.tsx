"use client";

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import Image from "next/image";
import {LoaderCircle} from "lucide-react";

export function Component() {
  const [prompt,setPrompt] = useState("");
  const [image,setImage] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        {/* <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="container space-y-10 xl:space-y-16 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-10 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Generate Stunning AI Images
                </h1>
                <p className="mx-auto  max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unleash your creativity with our powerful AI image generation tool. Simply enter a description and let
                  the AI do the rest.
                </p>
              </div>
              <div className="space-x-4 -mt-6">
             
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Create Your Image Here</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Enter a description of the image you want to generate and let our AI do the rest.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-lg space-y-4">
                <div className="inline-flex w-full space-x-2">
                <Input className="flex-1" 
                placeholder="Enter a description..." 
                type="text" 
                value={prompt}
                onChange={(e)=>setPrompt(e.target.value)}
                />
                <Button
                variant="default"
                onClick={async()=>{
                setLoading(true);
                const response = await fetch(" https://backend-hono.dasabhay215.workers.dev?prompt=" + prompt)
                const blob = await response.blob();
                setImage(URL.createObjectURL(blob));
                setLoading(false);
                }}
                >Generate</Button>
                </div>
              <div className="aspect-video overflow-hidden rounded-xl">
              {loading ? (
    <div className="w-full h-full flex items-center justify-center">
      <LoaderCircle className="animate-spin h-[120px] w-100"/>
    </div>
  ) : (
    <Image
      alt="Generated Image"
      className="w-full h-full object-cover"
      height={800}
      width={450}
      src={image ? image : "/placeholder.svg"}
      style={{
        aspectRatio: "800/450",
        objectFit: "cover",
      }}
    />
  )}
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Image Generator. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props:any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
