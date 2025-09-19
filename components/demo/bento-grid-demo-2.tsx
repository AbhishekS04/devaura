import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  ClipboardCopy,
  FileText,
  PenTool,
  Table,
} from "lucide-react";
import CardDemo from "@/components/ui/cards-demo-1";

export default function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => {
        // Replace "The Art of Design" card (index 2) with CardDemo
        if (i === 2) {
          return (
            <div
              key={i}
              className={cn(
                "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
                item.className
              )}
            >
              {/* Header with background image */}
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative">
                <div
                  className={cn(
                    "w-full h-full bg-cover bg-center transition-all duration-500",
                    "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)]",
                    "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                    "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50"
                  )}
                />
              </div>
              
              {/* Content section matching bento grid style */}
              <div className="transition duration-200 group-hover/bento:translate-x-2">
                <PenTool className="h-4 w-4 text-neutral-500" />
                <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
                  Background Overlays
                </div>
                <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                  This card is for some special elements, like displaying background gifs on hover only.
                </div>
              </div>
            </div>
          );
        }
        
        return (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        );
      })}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <ClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <FileText className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <PenTool className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Table className="h-4 w-4 text-neutral-500" />,
  },
];
