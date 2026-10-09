import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Bot, Workflow, BookOpen, AudioLines } from "lucide-react";
import { TextEffect } from "@/components/text-effect";
import { Button } from "@/components/ui/button";
import { agencyFaqs } from "@/lib/agency-content";

export function AboutSection() {
  return <section id="founder" className="mx-auto mt-24 max-w-6xl border-y border-border px-6 py-16 sm:px-10">
    <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
      <div><p className="text-sm text-primary">About TheDevFlo</p><TextEffect as="h2" className="text-display mt-5 text-4xl sm:text-5xl">The people behind <span className="text-primary">the product.</span></TextEffect><p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">TheDevFlo brings product design and software engineering together to help businesses turn ideas into usable digital products. Our focus spans web, mobile, AI and cloud — from defining the problem to shaping the experience and preparing for launch.</p><Button asChild variant="link" className="mt-5 px-0"><Link to="/about">Meet TheDevFlo <ArrowUpRight /></Link></Button></div>
      <div className="content-panel p-6"><span className="text-xs uppercase text-muted-foreground">About Me</span><h3 className="text-display mt-5 text-3xl">Happy Maurya</h3><p className="mt-2 text-sm text-muted-foreground">Full Stack &amp; Mobile App Developer · Founder of TheDevFlo</p><p className="mt-5 leading-relaxed text-muted-foreground">I specialize in WordPress, MERN Stack, and Flutter, building modern websites and mobile apps that help businesses attract customers, streamline operations, and grow faster.</p><p className="mt-4 leading-relaxed text-muted-foreground">Since 2024, my mission has been to turn ideas into powerful digital solutions through reliable development, user-focused design, and innovative AI-powered technology.</p><Button asChild variant="outline" className="mt-6"><Link to="/contact">Discuss your project <ArrowUpRight /></Link></Button></div>
    </div>
  </section>;
}

export function AiSection() {
  const items = [{ Icon: Bot, title: "Chatbots & agents", description: "Support experiences and task-oriented assistants with clear boundaries and human handoff." }, { Icon: BookOpen, title: "Knowledge & RAG", description: "Answers grounded in approved documents, with source references and access controls." }, { Icon: Workflow, title: "Workflow automation", description: "Connect your tools, streamline repetitive work and keep people in control of important decisions." }, { Icon: AudioLines, title: "Voice & AI products", description: "Voice interfaces, AI SaaS features and OpenAI, Gemini or Claude integrations." }];
  return <section className="mx-auto mt-24 max-w-6xl px-6 py-12 sm:px-10"><p className="text-sm text-primary">AI development & automation</p><TextEffect as="h2" className="text-display mt-5 max-w-3xl text-4xl sm:text-6xl">Make your business <span className="text-primary">AI-powered.</span></TextEffect><p className="mt-6 max-w-2xl text-muted-foreground">Start with a real business workflow. Define the data, evaluate the output, and integrate AI where it makes a measurable difference.</p><div className="mt-10 grid gap-8 sm:grid-cols-2">{items.map(({ Icon, title, description }) => <div key={title} className="content-panel p-6"><Icon className="size-6 text-primary" /><h3 className="mt-4 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p></div>)}</div><Button asChild className="mt-10"><Link to="/services/ai-automation">Explore AI & automation <ArrowUpRight /></Link></Button></section>;
}

export function FaqSection() {
  return <section id="faq" className="mx-auto mt-24 max-w-6xl px-6 sm:px-10"><p className="text-sm text-primary">Common questions</p><TextEffect as="h2" className="text-display mt-5 text-4xl sm:text-6xl">Before we <span className="text-primary">build.</span></TextEffect><div className="mt-10 grid gap-3">{agencyFaqs.map(f => <details key={f.question} className="content-panel group p-5"><summary className="cursor-pointer text-base font-medium sm:text-lg">{f.question}</summary><p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.answer}</p></details>)}</div></section>;
}