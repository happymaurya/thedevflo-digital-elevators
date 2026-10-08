import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/home-page";
import { ProjectBrief } from "@/components/project-brief";
import { TextEffect } from "@/components/text-effect";
import { pageHead } from "@/lib/agency-content";

export const Route = createFileRoute("/contact")({
  head: pageHead("/contact", "Start a Project & Request an Estimate | TheDevFlo", "Share your website, mobile app, SaaS or AI project requirements with TheDevFlo. Prepare a project brief and request a detailed proposal by email."),
  component: () => <main className="min-h-screen"><Nav /><header className="mx-auto max-w-4xl px-4 pt-36"><p className="text-sm text-primary">Contact TheDevFlo</p><TextEffect as="h1" className="text-display mt-5 text-5xl sm:text-6xl">Your next product <span className="text-primary">starts here.</span></TextEffect><a href="mailto:hello@thedevflo.com" className="mt-6 inline-block text-primary">hello@thedevflo.com</a></header><ProjectBrief /><Footer /></main>,
});