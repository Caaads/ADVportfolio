"use client";

import { techStack } from "@/constants/techStack";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export default function TechStackSlider() {
  return (
    <section id="techstack" className="py-20 bg-background/5">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 text-center">Tech Stack</h2>

        <InfiniteSlider speed={50} gap={40}>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-4 cursor-pointer hover:scale-110 transition-transform"
            >
              <tech.icon className="text-5xl mb-2" />
              <span className="text-sm font-medium text-muted-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}