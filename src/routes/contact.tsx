import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, Calendar, Globe, Ticket, UserPlus } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { EVENTBRITE_URL, MEETING_INFO, VISIT_EXPECTATIONS } from "@/data/grafted";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Grafted | Visit a Meeting in Edmonton" },
      {
        name: "description",
        content:
          "Contact Grafted to visit a weekly business networking meeting in Edmonton, ask a membership question, or learn more about future branches.",
      },
      { property: "og:title", content: "Contact Grafted | Visit a Meeting in Edmonton" },
      {
        property: "og:description",
        content:
          "Reach out to visit Grafted, ask about membership, or learn about future branches.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Come visit the room."
        subtitle="Whether you are ready to visit, curious about membership, or wondering if Grafted is the right fit, reach out. We will help you take the next step."
      />

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <div className="space-y-8">
              <SectionHeading eyebrow="Details" number="01">
                Where and when to find us.
              </SectionHeading>
              <ul className="space-y-4 text-deep-waters">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-refined-gold" strokeWidth={1.5} />
                  {MEETING_INFO.city}, {MEETING_INFO.province}
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="mt-1 h-4 w-4 text-refined-gold" strokeWidth={1.5} />
                  {MEETING_INFO.day} at {MEETING_INFO.time}
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 text-refined-gold" strokeWidth={1.5} />
                  <a className="underline-offset-4 hover:underline" href={`mailto:${MEETING_INFO.email}`}>
                    {MEETING_INFO.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="mt-1 h-4 w-4 text-refined-gold" strokeWidth={1.5} />
                  {MEETING_INFO.domain}
                </li>
              </ul>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-refined-gold/35 bg-river-pale p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-deep-waters text-refined-gold">
                      <Ticket className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-eyebrow text-[10px] uppercase tracking-[0.28em] text-refined-gold">
                        Visit Grafted
                      </div>
                      <h3 className="mt-2 font-serif text-2xl text-deep-waters">
                        Reserve your spot for an upcoming meeting.
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-deep-waters/75">
                        Register through Eventbrite so we know to expect you. Your first three visits are free. Lunch is on your own.
                      </p>
                    </div>
                  </div>
                  <Button asChild className="mt-6 bg-refined-gold text-deepest hover:bg-sunrise-copper font-eyebrow text-xs uppercase tracking-[0.2em]">
                    <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer">Reserve Your Spot</a>
                  </Button>
                </div>

                <div className="rounded-2xl border border-border bg-background p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-deep-waters text-refined-gold">
                      <UserPlus className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-eyebrow text-[10px] uppercase tracking-[0.28em] text-refined-gold">
                        Membership
                      </div>
                      <h3 className="mt-2 font-serif text-2xl text-deep-waters">
                        Ready to become a member?
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-deep-waters/75">
                        Membership is $150 CAD per month. Start your member signup, then complete your profile so the directory is ready when billing is connected.
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="mt-6 border-deep-waters/25 text-deep-waters hover:bg-deep-waters/5 font-eyebrow text-xs uppercase tracking-[0.2em]">
                    <Link to="/join">Apply for Membership</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="font-eyebrow text-[10px] uppercase tracking-[0.28em] text-refined-gold">
                  What to expect when you visit
                </div>
                <ul className="mt-4 space-y-2 text-deep-waters/85">
                  {VISIT_EXPECTATIONS.map((v) => (
                    <li key={v} className="flex items-start gap-3">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-refined-gold" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
