"use client";

import { useRef, useState } from "react";
import {
  BriefcaseBusiness,
  ChevronDown,
  Folder,
  GraduationCap,
  Notebook,
  Trophy,
} from "lucide-react";
import Link from "next/link";

const sectionGroups = [
  {
    title: "About Me",
    count: 1,
    icon: Folder,
    items: [
      { label: "about", href: "#about" },
    ],
  },
  {
    title: "Professional",
    count: 4,
    icon: BriefcaseBusiness,
    items: [
      { label: "work", href: "#work" },
      { label: "education", href: "#education" },
      { label: "tech stack", href: "#skills" },
      { label: "github", href: "#projects" },
    ],
  },
  {
    title: "Projects",
    count: 2,
    icon: Folder,
    items: [
      { label: "hackathons", href: "#hackathons" },
      { label: "projects", href: "#projects" },
    ],
  },
];

const graphNodes = [
  { id: "about", label: "about", href: "#about", x: 205, y: 138, r: 17 },
  { id: "work", label: "work", href: "#work", x: 292, y: 202, r: 16 },
  { id: "projects", label: "projects", href: "#projects", x: 220, y: 192, r: 16 },
  { id: "education", label: "education", href: "#education", x: 130, y: 136, r: 12 },
  { id: "skills", label: "tech stack", href: "#skills", x: 324, y: 110, r: 12 },
  { id: "github", label: "github", href: "#projects", x: 170, y: 92, r: 10 },
  { id: "hackathons", label: "hackathons", href: "#hackathons", x: 260, y: 100, r: 12 },
] as const;

const graphEdges = [
  ["about", "work"],
  ["about", "projects"],
  ["about", "github"],
  ["work", "projects"],
  ["work", "skills"],
  ["projects", "education"],
  ["projects", "github"],
  ["projects", "hackathons"],
  ["education", "work"],
  ["skills", "work"],
  ["github", "hackathons"],
] as const;

function nodeById(id: string) {
  return graphNodes.find((node) => node.id === id);
}

export default function SectionsMap() {
  const dragStart = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const didDrag = useRef(false);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const handlePointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      panX: pan.x,
      panY: pan.y,
    };
    didDrag.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    if (!dragStart.current) return;
    const distanceX = event.clientX - dragStart.current.x;
    const distanceY = event.clientY - dragStart.current.y;
    if (Math.hypot(distanceX, distanceY) > 4) {
      didDrag.current = true;
    }
    setPan({
      x: dragStart.current.panX + distanceX * 0.65,
      y: dragStart.current.panY + distanceY * 0.65,
    });
  };

  const handlePointerUp = () => {
    dragStart.current = null;
  };

  const handleWheel = (event: React.WheelEvent<SVGSVGElement>) => {
    event.preventDefault();
    setZoom((currentZoom) => {
      const nextZoom = currentZoom + (event.deltaY > 0 ? -0.08 : 0.08);
      return Math.min(1.45, Math.max(0.75, nextZoom));
    });
  };

  const isActiveEdge = (fromId: string, toId: string) =>
    !hoveredNode || fromId === hoveredNode || toId === hoveredNode;

  const isActiveNode = (nodeId: string) =>
    !hoveredNode ||
    nodeId === hoveredNode ||
    graphEdges.some(
      ([fromId, toId]) =>
        (fromId === hoveredNode && toId === nodeId) ||
        (toId === hoveredNode && fromId === nodeId)
    );

  const navigateToNode = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <section aria-label="Website sections map" className="w-full">
      <div className="grid min-h-[360px] overflow-hidden rounded-xl border border-border bg-background/70 md:grid-cols-[230px_1fr]">
          <aside className="border-b border-border bg-muted/35 p-4 md:border-b-0 md:border-r">
            <div className="mb-4 flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Sections
              </p>
            </div>
            <nav className="flex flex-col gap-4">
              {sectionGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.title} className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Icon className="size-4 text-muted-foreground" />
                      <span className="flex-1">{group.title}</span>
                      <span className="text-xs tabular-nums text-muted-foreground">
                        {group.count}
                      </span>
                      <ChevronDown className="size-4 text-muted-foreground" />
                    </div>
                    <div className="ml-7 flex flex-col gap-1.5">
                      {group.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </nav>
          </aside>
          <div className="relative min-h-[340px] overflow-hidden bg-linear-to-br from-background via-muted/20 to-background">
            <svg
              viewBox="0 0 520 320"
              role="img"
              aria-label="Clickable map of portfolio sections"
              className="absolute inset-0 h-full w-full touch-none cursor-grab active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onWheel={handleWheel}
            >
              <g transform={`translate(${pan.x} ${pan.y}) scale(${zoom})`}>
                <g>
                  {graphEdges.map(([fromId, toId]) => {
                    const from = nodeById(fromId);
                    const to = nodeById(toId);
                    if (!from || !to) return null;
                    return (
                      <line
                        key={`${fromId}-${toId}`}
                        x1={from.x}
                        y1={from.y}
                        x2={to.x}
                        y2={to.y}
                        className={
                          isActiveEdge(fromId, toId)
                            ? "stroke-primary/55 transition-all duration-200"
                            : "stroke-muted-foreground/10 transition-all duration-200"
                        }
                        strokeWidth={hoveredNode && isActiveEdge(fromId, toId) ? "3" : "2"}
                      />
                    );
                  })}
                </g>
                <g>
                  {graphNodes.map((node) => (
                    <g
                      key={node.id}
                      role="link"
                      tabIndex={0}
                      aria-label={`Go to ${node.label}`}
                      className="cursor-pointer outline-none"
                      onClick={() => navigateToNode(node.href)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          navigateToNode(node.href);
                        }
                      }}
                      onPointerDown={(event) => event.stopPropagation()}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onFocus={() => setHoveredNode(node.id)}
                      onBlur={() => setHoveredNode(null)}
                    >
                      {hoveredNode === node.id && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={node.r + 9}
                          className="fill-primary/10"
                        />
                      )}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.r}
                        className={
                          isActiveNode(node.id)
                            ? "fill-primary/55 stroke-primary/70 transition-all duration-200"
                            : "fill-muted-foreground/15 stroke-muted-foreground/20 transition-all duration-200"
                        }
                        strokeWidth={hoveredNode === node.id ? "3" : "2"}
                      />
                      <text
                        x={node.x}
                        y={node.y + node.r + 13}
                        textAnchor="middle"
                        className={
                          isActiveNode(node.id)
                            ? "fill-foreground text-[10px] transition-colors duration-200"
                            : "fill-muted-foreground/35 text-[10px] transition-colors duration-200"
                        }
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}
                </g>
              </g>
            </svg>
            <div className="absolute bottom-5 left-5 z-10 grid grid-cols-3 gap-2 sm:hidden">
              <a href="#education" aria-label="Education" className="rounded-full border bg-background/80 p-2 text-muted-foreground">
                <GraduationCap className="size-4" />
              </a>
              <a href="#hackathons" aria-label="Hackathons" className="rounded-full border bg-background/80 p-2 text-muted-foreground">
                <Trophy className="size-4" />
              </a>
              <Link href="/blog" aria-label="Blog" className="rounded-full border bg-background/80 p-2 text-muted-foreground">
                <Notebook className="size-4" />
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}
