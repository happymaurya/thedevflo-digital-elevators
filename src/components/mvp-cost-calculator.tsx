import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

type Scope = "lean" | "standard" | "advanced";
type Region = "india" | "global";

const SCOPE_WEEKS: Record<Scope, { eng: number; design: number; label: string; features: string }> = {
  lean: { eng: 6, design: 2, label: "Lean MVP", features: "Auth, one core workflow, Stripe, basic dashboard" },
  standard: { eng: 10, design: 3, label: "Standard SaaS MVP", features: "Auth + roles, 2–3 workflows, billing, admin, analytics" },
  advanced: { eng: 16, design: 5, label: "Advanced MVP", features: "Multi-tenant, integrations, AI features, mobile-ready" },
};

// Blended weekly rates (USD) for a small senior team of 2 engineers + 1 designer.
const RATES: Record<Region, { eng: number; design: number; label: string }> = {
  india: { eng: 2800, design: 1800, label: "India (Delhi NCR studio)" },
  global: { eng: 9500, design: 6500, label: "US / EU agency" },
};

const INFRA_MONTHLY = { lean: 60, standard: 180, advanced: 450 };

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function MvpCostCalculator() {
  const [scope, setScope] = useState<Scope>("standard");
  const [region, setRegion] = useState<Region>("india");

  const estimate = useMemo(() => {
    const s = SCOPE_WEEKS[scope];
    const r = RATES[region];
    const engineering = s.eng * r.eng;
    const design = s.design * r.design;
    const infra = INFRA_MONTHLY[scope] * 3; // first 3 months of runway
    const pm = Math.round((engineering + design) * 0.1); // ~10% PM + QA
    const total = engineering + design + infra + pm;
    return { engineering, design, infra, pm, total, weeks: s.eng, features: s.features };
  }, [scope, region]);

  return (
    <div className="rounded-3xl border border-primary/25 bg-primary/[0.04] p-6 sm:p-8">
      <div className="flex items-center gap-2 text-primary">
        <Calculator className="size-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">SaaS MVP cost calculator</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Rough ballpark for a 2 engineer + 1 designer team. Real quotes vary with scope, integrations and team seniority.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-muted-foreground">Scope</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(Object.keys(SCOPE_WEEKS) as Scope[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setScope(k)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  scope === k
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-primary/40"
                }`}
              >
                {SCOPE_WEEKS[k].label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground">Team location</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {(Object.keys(RATES) as Region[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setRegion(k)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  region === k
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-white/10 bg-white/[0.03] text-muted-foreground hover:border-primary/40"
                }`}
              >
                {RATES[k].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Estimated total</div>
            <div className="text-display mt-1 text-4xl font-bold text-primary">{fmt(estimate.total)}</div>
            <div className="mt-1 text-xs text-muted-foreground">~{estimate.weeks} weeks · {estimate.features}</div>
          </div>
        </div>
        <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
          <div className="flex justify-between border-b border-white/5 pb-2"><dt className="text-muted-foreground">Engineering</dt><dd className="font-medium">{fmt(estimate.engineering)}</dd></div>
          <div className="flex justify-between border-b border-white/5 pb-2"><dt className="text-muted-foreground">UI/UX design</dt><dd className="font-medium">{fmt(estimate.design)}</dd></div>
          <div className="flex justify-between border-b border-white/5 pb-2"><dt className="text-muted-foreground">PM + QA (10%)</dt><dd className="font-medium">{fmt(estimate.pm)}</dd></div>
          <div className="flex justify-between border-b border-white/5 pb-2"><dt className="text-muted-foreground">Infra (first 3 mo)</dt><dd className="font-medium">{fmt(estimate.infra)}</dd></div>
        </dl>
      </div>
    </div>
  );
}
