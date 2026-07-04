import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/content-page";
import { servicePageHead } from "@/lib/seo-head";

export const Route = createFileRoute("/services/mobile-apps")({
  head: servicePageHead({
    path: "/services/mobile-apps",
    title: "React Native & Flutter App Development in India | TheDevFlo",
    description: "Custom React Native and Flutter mobile app development for iOS and Android. Delhi NCR based mobile team building cross-platform apps for startups, SaaS and consumer brands across India.",
    keywords: "React Native app developers India, Flutter app development, custom mobile app developers Delhi, cross platform app development India, hire mobile app developers, iOS Android developers India",
    serviceName: "Mobile App Development",
    serviceType: "Cross-Platform Mobile App Development",
  }),
  component: () => (
    <ContentPage
      eyebrow="Mobile Apps"
      title={<>React Native & Flutter apps for <span className="text-primary">iOS and Android.</span></>}
      intro="One codebase, both stores. We build production-ready cross-platform apps with native performance, offline-first data, push notifications and store-ready release pipelines."
      bullets={[
        "React Native (Expo & bare workflows)",
        "Flutter for pixel-perfect UI",
        "Native modules when you need them",
        "In-app purchases & subscriptions",
        "Push notifications & deep linking",
        "App Store & Play Store submission",
      ]}
      sections={[
        {
          heading: "What we build",
          body: <p>Consumer apps, B2B field tools, SaaS companion apps, delivery and logistics apps, and MVPs for founders validating a mobile-first idea. Every app ships with analytics, crash reporting and OTA updates.</p>,
        },
        {
          heading: "Cross-platform, not compromised",
          body: <p>React Native and Flutter let one team ship both iOS and Android at ~60% the cost of two native teams — without sacrificing performance. We drop into Swift / Kotlin only when a specific feature genuinely needs it.</p>,
        },
        {
          heading: "Launch & post-launch",
          body: <p>We handle the store review process end to end — screenshots, listings, privacy manifests, TestFlight and internal Play tracks. After launch we monitor crash-free rate, cold start times and conversion funnels.</p>,
        },
      ]}
    />
  ),
});
