"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-32 sm:h-36 w-full max-w-[18rem] sm:max-w-[20rem] lg:w-[22rem] -skew-y-[4deg] sm:-skew-y-[6deg] lg:-skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[16rem] sm:after:w-[18rem] lg:after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-800 p-1">
          {icon}
        </span>
        <p className={cn("text-base sm:text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="text-sm sm:text-base lg:text-lg overflow-hidden text-ellipsis">{description}</p>
      <p className="text-xs sm:text-sm text-muted-foreground">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-6 sm:hover:-translate-y-8 lg:hover:-translate-y-6 sm:hover:-translate-y-8 lg:hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-4 sm:translate-x-8 lg:translate-x-16 translate-y-4 sm:translate-y-6 lg:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-8 sm:translate-x-16 lg:translate-x-32 translate-y-8 sm:translate-y-12 lg:translate-y-20 hover:translate-y-4 sm:hover:translate-y-6 lg:hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px]">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}

export function DisplayCardsDemo() {
  const defaultCards = [
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Featured",
      description: "Discover amazing content",
      date: "Just now",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] hover:-translate-y-6 sm:hover:-translate-y-8 lg:hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Popular",
      description: "Trending this week",
      date: "2 days ago",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] translate-x-4 sm:translate-x-8 lg:translate-x-12 translate-y-4 sm:translate-y-6 lg:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "New",
      description: "Latest updates and features",
      date: "Today",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className: "[grid-area:stack] translate-x-8 sm:translate-x-16 lg:translate-x-24 translate-y-8 sm:translate-y-12 lg:translate-y-20 hover:translate-y-4 sm:hover:translate-y-6 lg:hover:translate-y-10",
    },
  ];

  return (
    <div className="flex min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] w-full items-center justify-center py-10 sm:py-16 lg:py-20">
      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-3xl">
        <DisplayCards cards={defaultCards} />
      </div>
    </div>
  );
}
