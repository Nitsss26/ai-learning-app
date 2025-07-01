'use client'
import FooterSection from "@/components/sections/FooterSection";
import NavSection from "@/components/sections/NavSection";
// import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";


export default function BlogsDetails() {
    return (
        <div className="w-full h-full flex bg-[#020b1a]  justify-center flex-col items-center">
            <NavSection />
            <div className="relative flex justify-between items-center flex-col z-20 py-10 lg:py-40 max-w-7xl mx-auto">
                <div className="px-8">
                    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                        Blog Details
                    </h4>

                    <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                        Dive into our comprehensive courses designed to help you master AI and Machine Learning. Whether you&apos;re a beginner or an expert, we have something for everyone.
                    </p>
                </div>
            </div>





            <FooterSection />
            {/* <div className="absolute inset-0 z-0 w-full h-full">
                <Canvas>
                    <Stars radius={100} count={2500} factor={3} fade speed={1} />
                </Canvas>
            </div> */}

        </div>
    );
}