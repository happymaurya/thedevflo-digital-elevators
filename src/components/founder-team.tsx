import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/text-effect";



const team = [
  {
    name: "Happy Maurya",
    role: "Founder & MERN Stack / App Developer",
    image: "/images/happy-maurya.png",
    bio: "Specializes in full-stack web development, WordPress, MERN Stack, and Flutter mobile applications, turning business ideas into scalable digital products.",
    skills: "WordPress · MERN Stack · Flutter",
  },
  {
    name: "Aman Sharma",
    role: "Python, Flask & AI Developer",
    image: "/images/aman-sharma.webp",
    bio: "Focuses on Python, Flask backend development, API integration, and AI-powered solutions to build intelligent and efficient applications.",
    skills: "Python · Flask · AI",
  },
  {
    name: "Aditya Pratap Singh",
    role: "UI/UX Designer & Video Editor",
    image: "/images/aditya-pratap-singh.webp",
    bio: "Creates engaging user interfaces, intuitive digital experiences, and polished video content that strengthen product branding and visual storytelling.",
    skills: "UI/UX · Video · Visual storytelling",
  },
];

export function FounderTeam({ page = false }: { page?: boolean }) {
  const reducedMotion = useReducedMotion();
  const [teamVisible, setTeamVisible] = useState(false);
  const reveal = {
    initial: reducedMotion ? false as const : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reducedMotion ? 0 : 0.6 },
  };

  return <>
    <div className="grid items-center gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
      <motion.div {...reveal} className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-primary/20 bg-surface md:max-w-none">
        <div aria-hidden="true" className="absolute inset-0 bg-site-grid opacity-[0.04]" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />
        <img src="/images/happy-maurya.png" alt="Happy Maurya, founder and Full Stack / Mobile App Developer at TheDevFlo" width={820} height={1330} loading={page ? "eager" : "lazy"} className="relative h-full w-full object-contain px-4 pt-5" />
      </motion.div>
      <motion.div {...reveal} className="min-w-0 py-2">
        <TextEffect as={page ? "h1" : "h2"} className="text-display text-4xl !leading-tight !tracking-normal sm:text-5xl">Happy Maurya<span className="text-primary">.</span></TextEffect>
        <p className="mt-4 text-base font-medium leading-relaxed text-primary sm:text-lg">Founder &amp; Full Stack / Mobile App Developer</p>
        <p className="mt-7 max-w-xl text-base leading-8 text-foreground/80 sm:text-lg">I build modern digital products that help businesses grow, from WordPress websites and MERN Stack applications to Flutter mobile apps and AI-powered solutions. As the founder of TheDevFlo, I focus on creating reliable, scalable, and user-friendly digital experiences.</p>
        <p className="mt-5 text-sm text-muted-foreground">Building digital solutions since 2024.</p>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
          <Button asChild><Link to="/contact">Discuss your project <ArrowUpRight className="size-4" /></Link></Button>
          {!page && <Button asChild variant="link" className="px-0"><Link to="/about">More about TheDevFlo <ArrowUpRight className="size-4" /></Link></Button>}
        </div>
      </motion.div>
    </div>

    <div className="mt-16 border-t border-border pt-12 sm:mt-20">
      <TextEffect as="h2" className="text-display text-3xl !leading-tight !tracking-normal sm:text-4xl">Meet the <span className="text-primary">Team</span></TextEffect>
      <motion.div onViewportEnter={() => setTeamVisible(true)} onViewportLeave={() => setTeamVisible(false)} viewport={{ amount: 0.1 }} data-visible={teamVisible} role="region" aria-label="TheDevFlo team" tabIndex={0} className="project-carousel team-carousel mt-8 overflow-hidden py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary">
        <div className="project-carousel-track team-carousel-track flex w-max">
        {[false, true].map(duplicate => <div key={String(duplicate)} aria-hidden={duplicate || undefined} className="project-carousel-group team-carousel-group flex shrink-0 gap-6 pr-6">
        {team.map((member, index) => <article key={member.name} className="project-carousel-card content-panel group w-[280px] shrink-0 overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40 motion-reduce:transform-none sm:w-[340px]">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated">
            <img src={member.image} alt={`${member.name}, ${member.role} at TheDevFlo`} width={800} height={600} loading="lazy" className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none ${index === 0 ? "object-contain pt-4" : "object-cover object-center"}`} />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-brand-gradient" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold leading-snug">{member.name}</h3>
            <p className="mt-2 min-h-12 text-sm font-medium leading-6 text-primary">{member.role}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{member.bio}</p>
            <p className="mt-6 border-t border-border pt-4 text-xs leading-6 text-foreground/70">{member.skills}</p>
          </div>
        </article>)}
        </div>)}
        </div>
      </motion.div>
    </div>
  </>;
}