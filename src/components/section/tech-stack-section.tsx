"use client";

import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import {
  Fastapi,
  Javascript,
  Numpy,
  Pandas,
  Pytorch,
  Redis,
  ScikitLearn,
  Sql,
  TailwindCss,
  Tensorflow,
  Threejs,
  Transformers,
} from "@/components/ui/svgs/tech-logos";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  GitBranch,
} from "lucide-react";
import { useState } from "react";
import type { ComponentType, SVGProps } from "react";

type TechLogo = {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const technologies: TechLogo[] = [
  { name: "Python", icon: Python },
  { name: "PyTorch", icon: Pytorch },
  { name: "Transformers", icon: Transformers },
  { name: "TensorFlow", icon: Tensorflow },
  { name: "NumPy", icon: Numpy },
  { name: "Pandas", icon: Pandas },
  { name: "Scikit-learn", icon: ScikitLearn },
  { name: "Java", icon: Java },
  { name: "SQL", icon: Sql },
  { name: "FastAPI", icon: Fastapi },
  { name: "Node.js", icon: Nodejs },
  { name: "Docker", icon: Docker },
  { name: "Git", icon: GitBranch },
  { name: "PostgreSQL", icon: Postgresql },
  { name: "Redis", icon: Redis },
  { name: "TypeScript", icon: Typescript },
  { name: "JavaScript", icon: Javascript },
  { name: "React", icon: ReactLight },
  { name: "Next.js", icon: NextjsIconDark },
  { name: "Tailwind CSS", icon: TailwindCss },
  { name: "Three.js", icon: Threejs },
];

const firstRow = technologies.slice(0, 7);
const secondRow = technologies.slice(7);

const categories: Array<{
  title: string;
  items?: TechLogo[];
  sections?: Array<{
    title: string;
    items: TechLogo[];
  }>;
}> = [
  {
    title: "ML & AI Frameworks",
    items: [
      { name: "PyTorch", icon: Pytorch },
      { name: "Transformers", icon: Transformers },
      { name: "TensorFlow", icon: Tensorflow },
      { name: "NumPy", icon: Numpy },
      { name: "Pandas", icon: Pandas },
      { name: "Scikit-learn", icon: ScikitLearn },
    ],
  },
  {
    title: "languages",
    items: [
      { name: "Python", icon: Python },
      { name: "Java", icon: Java },
      { name: "SQL", icon: Sql },
    ],
  },
  {
    title: "Backend & DevOps",
    items: [
      { name: "FastAPI", icon: Fastapi },
      { name: "Node.js", icon: Nodejs },
      { name: "Docker", icon: Docker },
      { name: "Git", icon: GitBranch },
      { name: "PostgreSQL", icon: Postgresql },
      { name: "Redis", icon: Redis },
    ],
  },
  {
    title: "frontend",
    sections: [
      {
        title: "",
        items: [
          { name: "TypeScript", icon: Typescript },
          { name: "JavaScript", icon: Javascript },
        ],
      },
      {
        title: "frameworks & libraries",
        items: [
          { name: "React", icon: ReactLight },
          { name: "Next.js", icon: NextjsIconDark },
          { name: "Three.js", icon: Threejs },
          { name: "Tailwind CSS", icon: TailwindCss },
        ],
      },
    ],
  },
];

function TechLogoItem({ item }: { item: TechLogo }) {
  const Icon = item.icon;

  return (
    <div className="group flex min-w-24 flex-col items-center gap-2 rounded-lg border border-border bg-background/70 p-4 transition-colors hover:bg-muted/50">
      <Icon className="size-8 object-contain transition-transform duration-200 group-hover:scale-110" />
      <span className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {item.name}
      </span>
    </div>
  );
}

function TechLogoRow({
  items,
  reverse = false,
}: {
  items: TechLogo[];
  reverse?: boolean;
}) {
  const loopItems = [...items, ...items];

  return (
    <div className="tech-stack-marquee overflow-hidden">
      <div
        className={
          reverse
            ? "tech-stack-marquee-track tech-stack-marquee-track-reverse"
            : "tech-stack-marquee-track"
        }
      >
        {loopItems.map((item, index) => (
          <TechLogoItem key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex min-h-0 flex-col gap-y-5">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Tech Stack</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Technologies and tools I use to build intelligent systems and
            products.
          </p>
        </div>
      </div>
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
          expanded ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
        )}
      >
        <div className="flex min-h-0 flex-col gap-3">
          <TechLogoRow items={firstRow} />
          <TechLogoRow items={secondRow} reverse />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
        >
          {expanded ? "Show less" : "View categories"}
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-200",
              expanded && "rotate-180"
            )}
          />
        </button>
      </div>
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0">
          <div className="grid gap-3 pt-1 sm:grid-cols-2 sm:auto-rows-fr">
            {categories.map((category) => (
              <div
                key={category.title}
                className="flex h-full flex-col rounded-lg border border-border bg-background/70 p-4"
              >
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {category.title}
                </h3>
                {category.items && (
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.name}
                          className="inline-flex h-8 items-center gap-2 rounded-md border border-border bg-muted/30 px-3 text-sm text-foreground"
                        >
                          <Icon className="size-4 shrink-0" aria-hidden />
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
                {category.sections && (
                  <div className="flex flex-col gap-4">
                    {category.sections.map((section, index) => (
                      <div key={`${category.title}-${index}`} className="flex flex-col gap-2">
                        {section.title && (
                          <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">
                            {section.title}
                          </h4>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {section.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <div
                                key={item.name}
                                className="inline-flex h-8 items-center gap-2 rounded-md border border-border bg-muted/30 px-3 text-sm text-foreground"
                              >
                                <Icon className="size-4 shrink-0" aria-hidden />
                                <span>{item.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
