"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center space-y-3", className)}>
      {eyebrow ? (
        <div className="inline-block rounded-lg bg-gray-800/80 backdrop-blur-sm px-3 py-1 text-xs text-gray-300">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      {description ? (
        <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
      ) : null}
    </div>
  );
}

type ToolboxItem = { title: string; icon?: React.ReactNode };

function ToolboxItems({
  items,
  className,
}: {
  items: ToolboxItem[];
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap gap-3 px-6 mt-4", className)}>
      {items.map((item) => (
        <div
          key={item.title}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80"
        >
          {item.icon}
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}

const toolboxItems: ToolboxItem[] = [
  { title: "React" },
  { title: "Next.js" },
  { title: "Tailwind CSS" },
  { title: "JavaScript" },
  { title: "GitHub" },
  { title: "TypeScript" },
];

const hobbies = [
  { title: "Cricket", emoji: "🏏", left: "5%", top: "5%" },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%" },
  { title: "Gaming", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Read", emoji: "📚", left: "55%", top: "30%" },
  { title: "Code", emoji: "💻", left: "70%", top: "52%" },
  { title: "Eat", emoji: "🍔", left: "15%", top: "65%" },
  { title: "Sleep", emoji: "😴", left: "55%", top: "72%" },
];

export function AboutSection() {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="about" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Explore who I am, what I do, and what fuels my journey."
        />

        <div className="mt-12 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader className="px-6 pt-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">My Reads</h3>
                  <p className="text-sm text-gray-400">Explore the books shaping my perspectives.</p>
                </div>
              </CardHeader>
              <CardContent>
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "tween", duration: 0.25 }}
                  className="w-40 mx-auto mt-4"
                >
                  <img
                    src="https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1200&auto=format&fit=crop"
                    alt="Book Cover"
                    className="rounded-md shadow-lg"
                  />
                </motion.div>
              </CardContent>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2 bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader className="px-6 pt-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">My Toolbox</h3>
                  <p className="text-sm text-gray-400">Explore the technologies and tools I use to craft exceptional digital experiences.</p>
                </div>
              </CardHeader>
              <CardContent>
                <ToolboxItems items={toolboxItems} />
                <ToolboxItems items={toolboxItems} className="mt-4" />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2 bg-black/40 backdrop-blur-md border-white/10">
              <CardHeader className="px-6 py-6">
                <div>
                  <h3 className="text-lg font-semibold text-white">Beyond the Code</h3>
                  <p className="text-sm text-gray-400">Explore my interests and hobbies beyond the code.</p>
                </div>
              </CardHeader>
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <a
                href="https://maps.app.goo.gl/9r8eyR9uyMfgjQtM9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <img src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=400&auto=format&fit=crop" alt="Memoji" className="size-20 rounded-full" />
                </div>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
