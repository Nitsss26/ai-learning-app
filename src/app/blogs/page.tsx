'use client'
import FooterSection from "@/components/sections/FooterSection";
import NavSection from "@/components/sections/NavSection";
import { CarouselContext } from "@/components/ui/cards-carousel";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { IconCalendar, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { ImageProps } from "next/image";
import Link from "next/link";
import { useState, useRef, useContext, useEffect, JSX } from "react";
import NextImage from "next/image";

const data = [
    {
        id: 1,
        category: "Release Copilot AI Free Trial",
        title: "Experience Copilot AI for Free",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 2,
        category: "Productivity",
        title: "Enhance your productivity.",
        src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 3,
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },

    {
        id: 4,
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 5,
        category: "iOS",
        title: "Photography just got better.",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 6,
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 7,
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 8,
        category: "Design",
        title: "Designing with Tailwind CSS.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 9,
        category: "Product",
        title: "Introducing the new Apple Watch.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 10,
        category: "iOS",
        title: "iOS 16 is here.",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 11,
        category: "Productivity",
        title: "Enhance your productivity with our new app.",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 12,
        category: "Productivity",
        title: "Enhance your productivity with our new app.",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 13,
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer.",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 14,
        category: "Design",
        title: "Designing with Tailwind CSS.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 15,
        category: "Product",
        title: "Introducing the new Apple Watch.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
    },
    {
        id: 16,
        category: "iOS",
        title: "iOS 16 is here.",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',

    },
]


export default function Blogs() {
    return (
        <div className="w-full h-full flex bg-[#020b1a]  justify-center flex-col items-center">
            <NavSection />
            <div className="relative flex justify-between items-center flex-col z-20 py-10 lg:py-40 max-w-7xl mx-auto">
                <div className="px-8">
                    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                        Explore Our Blogs
                    </h4>

                    <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                        Dive into our comprehensive courses designed to help you master AI and Machine Learning. Whether you're a beginner or an expert, we have something for everyone.
                    </p>
                </div>
            </div>

            <BlogsList />



            <FooterSection />
            <div className="absolute inset-0 z-0 w-full h-full">
                <Canvas>
                    <Stars radius={100} count={2500} factor={3} fade speed={1} />
                </Canvas>
            </div>

        </div>
    );
}

function BlogsList() {
    return (
        <div
            className={cn(
                "w-full flex flex-row justify-center items-center gap-4 flex-wrap mb-4",
                "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
        >
            {data.map((item, index) => (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.1,
                            delay: 0.01 * index,
                            ease: "easeOut",
                            once: true,
                        },
                    }}
                    key={"card" + index}
                    className="rounded-3xl overflow-hidden w-[90%] md:w-96"
                >
                    <Card  card={item} />
                </motion.div>
            ))}
        </div>
    );
}

export const Card = ({
    card,
    layout = false,
}: {
    card: {
        id: number;
        category: string;
        title: string;
        src: string;
        publishDate: string;
    };
    layout?: boolean;
}): JSX.Element => {


    return (
        <Link href={`/blogs/${card.id}`}>
            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                className="relative z-10 flex h-80 w-full flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                <div className="relative z-40 p-8">
                    <motion.p
                        layoutId={layout ? `category-${card.category}` : undefined}
                        className="text-left font-sans text-sm mb-2 font-medium text-white md:text-base"
                    >
                        <div className="flex items-center gap-2">
                            <IconCalendar className="text-black dark:text-white" />
                            {card.publishDate}
                        </div>
                    </motion.p>
                    <motion.p
                        layoutId={layout ? `title-${card.title}` : undefined}
                        className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
                    >
                        {card.title}
                    </motion.p>
                </div>
                <img
                    className={cn(
                        "absolute inset-0 h-full w-full transition duration-300"
                    )}
                    src={card.src}
                    alt={"Background of a beautiful view"}
                    style={{ objectFit: "cover" }}

                />
            </motion.button>
        </Link>
    );
};



