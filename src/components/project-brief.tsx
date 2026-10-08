import { useState } from "react";
import { z } from "zod";
import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/text-effect";

const briefSchema = z.object({ name: z.string().trim().min(2, "Please enter your name.").max(100), company: z.string().trim().max(150), email: z.string().trim().email("Please enter a valid email.").max(254), whatsapp: z.string().trim().max(30).regex(/^[+\d\s()-]*$/, "Please use a valid phone number."), type: z.enum(["Website", "Web App", "Mobile App", "SaaS", "AI App", "E-commerce"]), budget: z.string().trim().max(100), timeline: z.string().trim().max(100), description: z.string().trim().min(20, "Please add at least 20 characters about your project.").max(1200) });
const types = ["Website", "Web App", "Mobile App", "SaaS", "AI App", "E-commerce"];
export function ProjectBrief() {
  const [error, setError] = useState("");
  const [emailLink, setEmailLink] = useState("");
  const fieldClass = "mt-2 block w-full rounded-md border border-foreground/70 bg-background px-3 py-3 text-sm text-foreground outline-none focus:border-foreground focus:ring-2 focus:ring-ring";
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = briefSchema.safeParse(Object.fromEntries(new FormData(event.currentTarget)));
    if (!result.success) { setError(result.error.issues[0]?.message ?? "Please check your project details."); setEmailLink(""); return; }
    setError(""); const d = result.data;
    const body = `Name: ${d.name}\nCompany: ${d.company || "Not specified"}\nEmail: ${d.email}\nWhatsApp: ${d.whatsapp || "Not specified"}\nProject: ${d.type}\nBudget: ${d.budget || "To discuss"}\nTimeline: ${d.timeline || "To discuss"}\n\nRequirements:\n${d.description}`;
    setEmailLink(`mailto:hello@thedevflo.com?subject=${encodeURIComponent(`Project brief — ${d.type}`)}&body=${encodeURIComponent(body)}`);
  }
  return <section id="estimate" className="mx-auto mt-20 max-w-4xl px-4"><p className="text-sm text-primary">Get your project estimate</p><TextEffect as="h2" className="text-display mt-5 text-4xl sm:text-5xl">Tell us about <span className="text-primary">your project.</span></TextEffect><p className="mt-5 text-muted-foreground">Share your goals for a scoped proposal. Pricing and delivery dates are confirmed after reviewing your requirements.</p><form onSubmit={prepare} onChange={() => setEmailLink("")} className="content-panel mt-10 grid gap-6 p-5 sm:grid-cols-2 sm:p-8">
    <label className="text-sm">Name *<input name="name" autoComplete="name" required minLength={2} maxLength={100} className={fieldClass} /></label>
    <label className="text-sm">Company<input name="company" autoComplete="organization" maxLength={150} className={fieldClass} /></label>
    <label className="text-sm">Email *<input name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} /></label>
    <label className="text-sm">WhatsApp<input name="whatsapp" type="tel" autoComplete="tel" maxLength={30} className={fieldClass} /></label>
    <label className="text-sm">Project type *<select name="type" className={fieldClass}>{types.map(t => <option key={t}>{t}</option>)}</select></label>
    <label className="text-sm">Preferred budget & currency<input name="budget" maxLength={100} placeholder="Your planned budget, or let's discuss" className={fieldClass} /></label>
    <label className="text-sm sm:col-span-2">Target timeline<input name="timeline" maxLength={100} placeholder="Your target launch date" className={fieldClass} /></label>
    <label className="text-sm sm:col-span-2">Project requirements *<textarea name="description" required minLength={20} maxLength={1200} rows={6} placeholder="Goals, users, key features and integrations" className={fieldClass} /></label>
    <p className="text-xs leading-relaxed text-muted-foreground sm:col-span-2">Your details stay on this page until you open your email app and send the brief. Attach requirement files in that email. Do not include passwords or confidential customer information. <a href="/privacy" className="text-primary underline">Privacy information</a></p>
    {error && <p role="alert" className="text-sm text-destructive sm:col-span-2">{error}</p>}
    <div className="flex flex-wrap items-center gap-4 sm:col-span-2"><Button type="submit" size="lg">Prepare project email <ArrowUpRight /></Button>{emailLink && <Button asChild variant="outline" size="lg"><a href={emailLink}>Open email & send brief <Mail /></a></Button>}</div>
    {emailLink && <p role="status" className="text-sm text-muted-foreground sm:col-span-2">Your brief is ready. Open your email app, add any attachments and send it to hello@thedevflo.com. Nothing has been submitted yet.</p>}
  </form></section>;
}