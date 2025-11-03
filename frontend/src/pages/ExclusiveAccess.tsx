import { Link } from "react-router-dom";
import { Check, Crown, Star, Gift } from "lucide-react";

const ExclusiveAccess = () => {
  const benefits = [
    "Priority booking for all programmes",
    "Access to exclusive workshops and masterclasses",
    "One-on-one sessions with wellness experts",
    "Private community forum",
    "Monthly wellness care packages",
    "Early access to new programmes",
    "Complimentary wellness assessments",
    "Personalized wellness roadmap",
  ];

  const membershipTiers = [
    {
      icon: Star,
      name: "Essential",
      price: "$49/month",
      features: [
        "2 group sessions per month",
        "Community access",
        "Resource library",
        "Monthly newsletter",
      ],
      highlighted: false,
    },
    {
      icon: Crown,
      name: "Premium",
      price: "$99/month",
      features: [
        "Unlimited group sessions",
        "1 private session per month",
        "Priority support",
        "All Essential benefits",
      ],
      highlighted: true,
    },
    {
      icon: Gift,
      name: "Elite",
      price: "$199/month",
      features: [
        "All Premium benefits",
        "4 private sessions per month",
        "Personalized programme",
        "VIP event access",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20" style={{ fontFamily: "Playfair Display" }}>
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Exclusive Membership
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Unlock premium wellness experiences and transform your journey with exclusive access
        </p>
      </section>

      {/* Membership Tiers */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {membershipTiers.map((tier) => {
          const Icon = tier.icon;
          return (
            <div
              key={tier.name}
              className={[
                "relative rounded-2xl overflow-hidden border",
                "bg-white/70 dark:bg-white/5 backdrop-blur",
                "border-[#C8A97E]/40 hover:border-[#C8A97E]/70",
                "transition-all duration-200 hover:shadow-xl",
              ].join(" ")}
            >
              {/* Featured ribbon */}
              {tier.highlighted && (
                <div className="absolute right-0 top-0">
                  <span className="rounded-bl-xl bg-[#C8A97E] text-white text-xs font-semibold px-3 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card header */}
              <div className="p-8 text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-[#C8A97E]/10 flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-[#C8A97E]" />
                </div>
                <h3 className="text-2xl font-semibold">{tier.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8A97E]/30 to-transparent" />

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                      <Check className="h-5 w-5 text-[#4B2E16] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/booking"
                  className={[
                    "block w-full text-center rounded-lg px-4 py-2.5 font-medium transition-colors duration-200",
                    tier.highlighted
                      ? "bg-[#C8A97E] text-white hover:bg-[#B48F63]"
                      : "border border-[#C8A97E]/50 text-[#4B2E16] hover:bg-[#C8A97E]/10",
                  ].join(" ")}
                >
                  Choose Plan
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Benefits */}
      <section className="max-w-4xl mx-auto">
        <div className="rounded-3xl p-8 md:p-12 shadow-xl bg-gradient-to-br from-white via-[#F7EFE3] to-white dark:from-[#1b1b1b] dark:via-[#1f1a15] dark:to-[#1b1b1b] border border-[#C8A97E]/40">
          <h2 className="text-3xl font-bold mb-8 text-center">Member Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-[#4B2E16] flex-shrink-0 mt-0.5" />
                <span className="text-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Secondary CTA */}
          <div className="mt-10 text-center">
            <Link
              to="/programmes"
              className="inline-flex items-center justify-center rounded-lg border border-[#C8A97E]/60 px-5 py-2.5 text-sm font-medium text-[#4B2E16] hover:bg-[#C8A97E]/10 transition-colors"
            >
              Explore Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExclusiveAccess;
