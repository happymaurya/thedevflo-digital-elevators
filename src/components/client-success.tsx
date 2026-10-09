import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/text-effect";
import rollingPanda from "@/assets/work-rollingpanda.jpg";
import candidClicks from "@/assets/work-candidclicks.jpg";
import fingertipFlow from "@/assets/work-fingertipflow.jpg";

const spotlights = [
  { name: "The Rolling Panda", category: "Film production website", image: rollingPanda, to: "/projects/rolling-panda", summary: "A portfolio-led website for a film production house, bringing its work and creative identity into a focused digital experience.", focus: "Creative portfolio · Brand presentation" },
  { name: "Candid Clicks", category: "Photography website", image: candidClicks, to: "/projects/candid-clicks", summary: "A photography-led website that puts wedding imagery at the heart of the experience, with space to explore the studio’s work and enquire.", focus: "Visual storytelling · Project enquiries" },
  { name: "FingertipFlow", category: "Web application", image: fingertipFlow, to: "/projects/fingertipflow", summary: "A distraction-free typing trainer with multiple practice modes and live statistics, designed around a clear, focused practice experience.", focus: "Product interface · Interactive practice" },
] as const;

export function ClientSuccess() {
  const reducedMotion = useReducedMotion();
  const [carouselRef, carousel] = useEmblaCarousel({ loop: true, align: "start", duration: reducedMotion ? 0 : 30 });
  const [selected, setSelected] = useState(0);
  const updateSelection = useCallback(() => {
    if (carousel) setSelected(carousel.selectedScrollSnap());
  }, [carousel]);
  useEffect(() => {
    if (!carousel) return;
    updateSelection();
    carousel.on("select", updateSelection).on("reInit", updateSelection);
    return () => { carousel.off("select", updateSelection).off("reInit", updateSelection); };
  }, [carousel, updateSelection]);

  return (
    <section id="testimonials" aria-labelledby="client-success-heading" className="mx-auto mt-24 max-w-6xl px-6 py-12 sm:px-10">
      <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
        <p className="text-xs font-semibold text-primary">CLIENT SUCCESS STORIES</p>
        <TextEffect as="h2" className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
          <span id="client-success-heading">Real Feedback.<br /><span className="text-primary">Meaningful Results.</span></span>
        </TextEffect>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Discover how thoughtful design and reliable development help businesses turn ideas into successful digital experiences.</p>
      </motion.div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
        <div>
          <p className="text-sm font-medium">Project spotlights</p>
          <p className="mt-1 text-xs text-muted-foreground">A look at our work. Client reviews will appear once verified and approved.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="size-10 rounded-full" aria-label="Previous project spotlight" title="Previous project spotlight" aria-controls="success-carousel" onClick={() => carousel?.scrollPrev()}><ArrowLeft /></Button>
          <Button variant="outline" size="icon" className="size-10 rounded-full" aria-label="Next project spotlight" title="Next project spotlight" aria-controls="success-carousel" onClick={() => carousel?.scrollNext()}><ArrowRight /></Button>
        </div>
      </div>

      <div id="success-carousel" ref={carouselRef} role="region" aria-roledescription="carousel" aria-label="Project spotlights" className="mt-6 overflow-hidden" onKeyDown={event => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowLeft") { event.preventDefault(); carousel?.scrollPrev(); }
        if (event.key === "ArrowRight") { event.preventDefault(); carousel?.scrollNext(); }
      }} tabIndex={0}>
        <div className="-ml-5 flex touch-pan-y">
          {spotlights.map((project, index) => (
            <div key={project.name} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${spotlights.length}: ${project.name}`} className="min-w-0 shrink-0 basis-full pl-5 md:basis-1/3">
              <article className="success-card content-panel group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-primary/40 focus-within:border-primary/40">
                <div className="overflow-hidden border-b border-border">
                  <img src={project.image} alt={`${project.name} website project screenshot`} loading="lazy" decoding="async" width={1600} height={900} className="aspect-video w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-2 text-xs font-medium text-primary"><span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />Project Spotlight</p>
                  <h3 className="mt-4 text-xl font-semibold">{project.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{project.category}</p>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">{project.summary}</p>
                  <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">{project.focus}</p>
                  <Button asChild variant="link" className="mt-3 h-auto justify-start self-start p-0 text-sm"><Link to={project.to}>Explore {project.name}<ArrowUpRight /></Link></Button>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">Project spotlight {selected + 1} of {spotlights.length}</p>
      <div className="mt-6 flex justify-center gap-1">
        {spotlights.map((project, index) => <Button key={project.name} variant="ghost" size="icon" className="size-8 rounded-full" aria-label={`Show ${project.name} spotlight`} aria-current={selected === index ? "true" : undefined} onClick={() => carousel?.scrollTo(index)}><span className={`h-1.5 rounded-full transition-all ${selected === index ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/40"}`} /></Button>)}
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-5 border-y border-border py-8 sm:flex-row sm:items-center">
        <h3 className="text-2xl font-semibold">Ready to Build Something Great?</h3>
        <Button asChild size="lg" className="h-auto shrink-0 whitespace-normal py-3"><Link to="/contact">Discuss Your Project<ArrowUpRight /></Link></Button>
      </div>
    </section>
  );
}