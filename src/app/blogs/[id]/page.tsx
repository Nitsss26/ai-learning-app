'use client'
import FooterSection from "@/components/sections/FooterSection";
import NavSection from "@/components/sections/NavSection";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
 import { Content } from "next/font/google";
// import { useRouter } from 'next/router';
const data = [
    {
        id: 1,
        category: "Release Copilot AI Free Trial",
        title: "Experience Copilot AI for Free",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
         content: `Experience Copilot AI for Free and discover how artificial intelligence can transform the way you work, learn, and create. Whether you're a developer writing complex code, a student working on assignments, a professional drafting reports, or a creator building content, Copilot AI is designed to be your intelligent partner every step of the way. With real-time suggestions, smart completions, and contextual understanding, it streamlines your workflow and saves you valuable time.

By trying Copilot AI for free, you get access to its powerful capabilities without any commitment. Explore how it understands your input, adapts to your writing style, and helps you generate ideas, solve problems, and stay productive. It’s like having a personal assistant that’s always available—ready to support you whether you're brainstorming, debugging, writing, or researching.

No downloads, no credit cards—just jump in and experience the future of AI-powered assistance. Start your free journey today and see how Copilot AI can elevate your productivity and creativity to the next level.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence",
          linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
        },
    {
        id: 2,
        category: "Productivity",
        title: "Enhance your productivity.",
        src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
    author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
      linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 3,
        category: "Product",
        title: "Launching the new Apple Vision Pro.",
        src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `Apple Vision Pro combines digital content with your physical space...`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
          linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },

    {
        id: 4,
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 5,
        category: "iOS",
        title: "Photography just got better.",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 6,
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 7,
        category: "Product",
        title: "Maps for your iPhone 15 Pro Max.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
        name: "Bereket A.",
        role: "AI Researcher",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
          linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
      },
    },
    {
        id: 8,
        category: "Design",
        title: "Designing with Tailwind CSS.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
          linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 9,
        category: "Product",
        title: "Introducing the new Apple Watch.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
    author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 10,
        category: "iOS",
        title: "iOS 16 is here.",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 11,
        category: "Productivity",
        title: "Enhance your productivity with our new app.",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 12,
        category: "Productivity",
        title: "Enhance your productivity with our new app.",
        src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 13,
        category: "Hiring",
        title: "Hiring for a Staff Software Engineer.",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 14,
        category: "Design",
        title: "Designing with Tailwind CSS.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 15,
        category: "Product",
        title: "Introducing the new Apple Watch.",
        src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `In today’s fast-paced world, maximizing productivity is key to staying ahead. Learn how to manage your time effectively, eliminate distractions, and leverage digital tools like task managers and AI assistants. With small, consistent changes, you can significantly improve focus and efficiency, leading to better outcomes and work-life balance.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
    {
        id: 16,
        category: "iOS",
        title: "iOS 16 is here.",
        src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        publishDate: 'September 15, 2022',
        content: `Copilot AI is a revolutionary tool that enhances productivity by assisting with real-time code suggestions, intelligent completions, and contextual help. Whether you're a beginner or a professional developer, Copilot AI empowers you to code faster and smarter, with fewer bugs and more confidence in your solutions. Start your journey today and explore the future of assisted programming.`,
        author: {
      name: "Bereket A.",
      role: "AI Researcher",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Aarav Mehta is an AI researcher and educator passionate about making complex technologies simple and accessible. With a deep background in machine learning, natural language processing, and model optimization, he bridges the gap between cutting-edge AI research and practical real-world applications. Through AI Learn, Aarav is committed to empowering learners by breaking down technical barriers, sharing real-world projects, and fostering a global community of AI enthusiasts. When he's not building intelligent systems, he’s busy mentoring students, exploring the latest AI trends, or writing guides to help others navigate the evolving world of artificial intelligence.",
    linkedin: 'https://www.linkedin.com/in/madan-vishwakarma',
    twitter: 'https://twitter.com/madan_ai',
    },
    },
]
const relatedTopics = [
  {
    title: "Understanding Neural Networks",
    tag: "Deep Learning",
    description: "A beginner-friendly guide to how neural networks work with hands-on examples.",
    link: "/blog/understanding-neural-networks",
  },
  {
    title: "Evaluating AI Models",
    tag: "Model Evaluation",
    description: "Learn the key metrics and techniques for evaluating your AI models effectively.",
    link: "/blog/evaluating-ai-models",
  },
  {
    title: "Prompt Engineering in LLMs",
    tag: "LLMs",
    description: "Tips and tricks for crafting better prompts for large language models like GPT.",
    link: "/blog/prompt-engineering-guide",
  },
  {
    title: "AI Ethics and Responsibility",
    tag: "AI Ethics",
    description: "Explore the ethical challenges and responsibilities when building AI systems.",
    link: "/blog/ai-ethics-responsibility",
  },
  {
    title: "Transfer Learning Explained",
    tag: "Model Training",
    description: "Speed up training and improve performance using pre-trained models effectively.",
    link: "/blog/transfer-learning-explained",
  },
  {
    title: "Natural Language Processing (NLP)",
    tag: "NLP",
    description: "Understand the basics of NLP, tokenization, embeddings, and language understanding.",
    link: "/blog/nlp-basics-guide",
  },
];






export default function BlogsDetails({params } : { params: { id: string } }) {
    
  
const  id  = params.id;
  const blog = data.find((item) => item.id === parseInt(id));

  if (!blog) return <p className="text-white text-center mt-10">Blog not found...</p>;
    return (
        <div className="w-full h-full flex bg-[#020b1a]  justify-center flex-col items-center">
            <NavSection />
            <div className="relative flex justify-between items-center flex-col z-20 py-10 lg:py-40 max-w-7xl mx-auto">
                <div className="px-8">
                    <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white dark:text-white">
                        Blog Details
                    </h4>

                    <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                        Dive into our comprehensive courses designed to help you master AI and Machine Learning. Whether you're a beginner or an expert, we have something for everyone.
                    </p>
                <div className="min-h-screen bg-[#020b1a] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Blog Image */}
        <img
          src={blog.src}
          alt={blog.title}
          className="rounded-xl w-full h-[400px] object-cover mb-6 shadow-lg border border-gray-700"
        />

        {/* Meta Info */}
        {/* <div className="flex justify-center items-center gap-4 text-gray-400 text-sm mb-6">
          <span>📅 {blog.publishDate}</span>
          <span>🏷️ {blog.category}</span>
        </div> */}
        <div className="flex justify-center items-center gap-6 text-gray-300 text-lg font-semibold mb-10">
  <span className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
    📅 {blog.publishDate}
  </span>
  <span className="flex items-center gap-2 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
    🏷️ {blog.category}
  </span>
  </div>

        {/* Blog Content */}
        <p className="text-lg leading-relaxed text-gray-300">
          {blog.content}
        </p>
      </div>
    </div>
    <section className="bg-[#020617] py-20 px-6 md:px-20 mt-24 text-white">
  <div className="max-w-4xl mx-auto">
    <h3 className="text-3xl font-bold mb-10 flex items-center gap-2">
       About the Author
    </h3>

    <div className="flex flex-col md:flex-row items-center gap-8 bg-[#020617] p-8 rounded-3xl border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-blue-500/10">
      <img
        src={blog.author.avatar}
        alt={blog.author.name}
        className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-md hover:scale-105 transition-transform duration-300"
      />

      <div className="text-left">
        <h4 className="text-2xl font-semibold text-blue-400">
          {blog.author.name}
        </h4>
        <p className="text-sm text-gray-400 mb-2">{blog.author.role}</p>
        <p className=" text-gray-300 text-lg leading-relaxed max-w-xl">
          {blog.author.bio}
        </p>

        <div className="mt-4 flex gap-4">
          {/* Optional social links */}
          <a
            href={blog.author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            🔗 LinkedIn
          </a>
          <a
            href={blog.author.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            🐦 Twitter
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="mt-20 px-4 md:px-20">
  <h2 className="text-3xl font-bold text-white mb-10">📚 Related Topics</h2>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {relatedTopics.map((topic, index) => (
      <a
        key={index}
        href={topic.link}
        className="group relative bg-[#020617] border border-gray-700 p-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-blue-500/20 hover:border-blue-500 transform hover:-translate-y-1"
      >
        {/* Animated Border Glow on Hover */}
        <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />

        {/* Tag */}
        <div className="mb-3 flex items-center gap-2 text-sm text-cyan-400 font-medium">
          🏷️ {topic.tag}
        </div>

        {/* Title */}
        <h3 className="text-xl text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {topic.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {topic.description}
        </p>
      </a>
    ))}
  </div>
</section>
<div className="mt-20 w-full flex justify-center px-4">
  <div className="bg-gradient-to-r from-[#020617] via-[#020617] to-[#020617] border border-gray-700 rounded-2xl p-8 max-w-4xl w-full text-center shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
       Level Up Your AI Skills
    </h3>
    <p className="text-base sm:text-lg text-neutral-500 mb-6">
      Join our community to access premium AI tutorials, hands-on projects, and career-building mentorship programs.
    </p>
    <button className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-100 hover:scale-105 transition-all duration-300">
      Explore Courses
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
      </svg>
    </button>
    </div>
    </div>

    </div>
    </div>






            <FooterSection />
            <div className="absolute inset-0 z-0 w-full h-full">
                <Canvas>
                    <Stars radius={100} count={2500} factor={3} fade speed={1} />
                </Canvas>
            </div>

        </div>
    );
}