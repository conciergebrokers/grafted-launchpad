import { FormEvent, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Check, CreditCard, Mail } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { MEMBERSHIP_PRICING } from "@/data/grafted";
import { MEMBER_STORAGE_KEY, PendingMemberSignup, STRIPE_PLACEHOLDER_COPY } from "@/data/memberRegistration";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Become a Member | Grafted" },
      {
        name: "description",
        content:
          "Start your Grafted member signup, create your account, and complete your business profile.",
      },
      { property: "og:title", content: "Become a Member | Grafted" },
      { property: "og:url", content: "/join" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/join" }],
  }),
  component: JoinPage,
});

const fieldClass = "mt-2 w-full rounded-md border border-deep-waters/15 bg-background px-4 py-3 text-sm text-deep-waters outline-none transition focus:border-refined-gold focus:ring-2 focus:ring-refined-gold/20";
const labelClass = "font-eyebrow text-[10px] uppercase tracking-[0.22em] text-deep-waters/65";

function JoinPage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<PendingMemberSignup>({
    first_name: "",
    last_name: "",
    business_name: "",
    email: "",
    mobile_phone: "",
    public_directory_consent: false,
  });

  const update = (key: keyof PendingMemberSignup, value: string | boolean) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const continueWithGoogle = async () => {
    setErrorMessage("");
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: typeof window !== "undefined" ? `${window.location.origin}/join` : undefined,
        },
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Google sign in is being managed by Lovable. If this does not open, confirm Google OAuth is enabled in the project.");
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("saving");
    setErrorMessage("");

    if (!form.public_directory_consent) {
      setStatus("error");
      setErrorMessage("Please confirm the public directory consent before continuing.");
      return;
    }

    try {
      const supabaseAny = supabase as any;
      const { data: userResult } = await supabase.auth.getUser();
      const user = userResult?.user;
      const payload = {
        ...form,
        user_id: user?.id ?? null,
        email: user?.email ?? form.email,
        account_status: "pending_payment",
        payment_status: "stripe_placeholder",
        profile_complete: false,
        founding_member: false,
        signup_date: new Date().toISOString(),
      };

      localStorage.setItem(MEMBER_STORAGE_KEY, JSON.stringify(payload));

      await supabaseAny.from("member_profiles").upsert(payload, { onConflict: "email" });
      setStatus("saved");
      navigate({ to: "/complete-profile" });
    } catch (error) {
      console.error(error);
      localStorage.setItem(MEMBER_STORAGE_KEY, JSON.stringify(form));
      setStatus("saved");
      navigate({ to: "/complete-profile" });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Become a Member"
        title="Start your Grafted membership."
        subtitle="Create your account, save your member details, and complete your profile. Billing is being connected through Stripe and will be added before paid membership begins."
      />

      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <form onSubmit={submit} className="rounded-2xl border border-border bg-background p-6 shadow-sm md:p-8">
            <div className="font-eyebrow text-[10px] uppercase tracking-[0.28em] text-refined-gold">Step 1</div>
            <h2 className="mt-3 font-display text-4xl text-deep-waters">Create your member account.</h2>
            <p className="mt-3 text-deep-waters/75">Use Google sign in or enter your member details. Your profile will stay pending until billing and profile completion are done.</p>

            <Button type="button" onClick={continueWithGoogle} variant="outline" className="mt-6 w-full border-deep-waters/20 font-eyebrow text-xs uppercase tracking-[0.18em]">
              Continue with Google
            </Button>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label><span className={labelClass}>First name</span><input required className={fieldClass} value={form.first_name} onChange={(e) => update("first_name", e.target.value)} /></label>
              <label><span className={labelClass}>Last name</span><input required className={fieldClass} value={form.last_name} onChange={(e) => update("last_name", e.target.value)} /></label>
              <label className="md:col-span-2"><span className={labelClass}>Business name</span><input required className={fieldClass} value={form.business_name} onChange={(e) => update("business_name", e.target.value)} /></label>
              <label><span className={labelClass}>Email</span><input required type="email" className={fieldClass} value={form.email} onChange={(e) => update("email", e.target.value)} /></label>
              <label><span className={labelClass}>Mobile phone</span><input required type="tel" className={fieldClass} value={form.mobile_phone} onChange={(e) => update("mobile_phone", e.target.value)} /></label>
            </div>

            <label className="mt-6 flex gap-3 rounded-xl border border-deep-waters/10 bg-river-pale p-4 text-sm text-deep-waters/80">
              <input type="checkbox" className="mt-1" checked={form.public_directory_consent} onChange={(e) => update("public_directory_consent", e.target.checked)} />
              <span>I consent to being listed in the Grafted member directory once my profile is complete.</span>
            </label>

            {errorMessage && <p className="mt-4 text-sm text-red-700">{errorMessage}</p>}

            <Button disabled={status === "saving"} className="mt-6 bg-deep-waters text-river-sand hover:bg-still-pool font-eyebrow text-xs uppercase tracking-[0.2em]">
              {status === "saving" ? "Saving..." : "Continue to Profile"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-refined-gold/35 bg-background p-6 shadow-sm">
              <div className="font-eyebrow text-[10px] uppercase tracking-[0.28em] text-refined-gold">Membership</div>
              <div className="mt-3 font-display text-5xl text-deep-waters">{MEMBERSHIP_PRICING.label}</div>
              <p className="mt-4 text-sm leading-relaxed text-deep-waters/75">{MEMBERSHIP_PRICING.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-deep-waters/80">
                {MEMBERSHIP_PRICING.benefits.slice(0, 5).map((benefit) => (<li key={benefit} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-refined-gold" /><span>{benefit}</span></li>))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-river-pale p-6">
              <div className="flex items-center gap-3 font-serif text-xl text-deep-waters"><CreditCard className="h-5 w-5 text-refined-gold" /> Stripe placeholder</div>
              <p className="mt-3 text-sm leading-relaxed text-deep-waters/75">{STRIPE_PLACEHOLDER_COPY}</p>
              <p className="mt-3 text-xs text-deep-waters/55">TODO: connect Stripe Checkout using STRIPE_PRICE_ID and server-side Stripe secrets once account access is ready.</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 text-sm text-deep-waters/75">
              <Mail className="mb-3 h-5 w-5 text-refined-gold" />
              After this step, complete your member profile so the directory is ready when billing turns on.
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
