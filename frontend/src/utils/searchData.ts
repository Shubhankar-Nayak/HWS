export interface SearchItem {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  // Home page
  {
    id: "home-hero",
    title: "Your Path to Complete Well-Being",
    description: "Discover holistic programmes that nurture your mind, body, and soul",
    path: "/",
    category: "Home",
    keywords: ["wellness", "holistic", "mind", "body", "soul", "journey", "complete", "well-being"]
  },
  {
    id: "home-features-mind-body",
    title: "Mind & Body Balance",
    description: "Harmonize your physical and mental well-being through our integrated approach",
    path: "/",
    category: "Home",
    keywords: ["mind", "body", "balance", "physical", "mental", "integrated", "approach"]
  },
  {
    id: "home-features-personalized",
    title: "Personalized Journey",
    description: "Tailored programmes designed to meet your unique wellness goals",
    path: "/",
    category: "Home",
    keywords: ["personalized", "journey", "tailored", "programmes", "unique", "goals"]
  },
  {
    id: "home-features-expert",
    title: "Expert Guidance",
    description: "Learn from experienced practitioners dedicated to your transformation",
    path: "/",
    category: "Home",
    keywords: ["expert", "guidance", "practitioners", "experienced", "transformation"]
  },
  {
    id: "home-features-natural",
    title: "Natural Healing",
    description: "Embrace holistic methods rooted in ancient wisdom and modern science",
    path: "/",
    category: "Home",
    keywords: ["natural", "healing", "holistic", "ancient", "wisdom", "modern", "science"]
  },
  {
    id: "home-cta",
    title: "Ready to Transform Your Life?",
    description: "Join thousands who have discovered the power of holistic wellness",
    path: "/",
    category: "Home",
    keywords: ["transform", "life", "join", "thousands", "holistic", "wellness"]
  },

  // Programmes
  {
    id: "programmes-main",
    title: "Our Programmes",
    description: "Choose the path that resonates with your wellness goals",
    path: "/programmes",
    category: "Programmes",
    keywords: ["programmes", "path", "resonates", "wellness", "goals"]
  },
  {
    id: "programmes-mindfulness",
    title: "Mindfulness & Meditation",
    description: "Cultivate inner peace and mental clarity through guided meditation practices and mindfulness techniques",
    path: "/programmes",
    category: "Programmes",
    keywords: ["mindfulness", "meditation", "inner", "peace", "mental", "clarity", "guided", "practices", "techniques"]
  },
  {
    id: "programmes-yoga",
    title: "Yoga & Movement",
    description: "Strengthen your body and calm your mind with yoga practices suited for all levels",
    path: "/programmes",
    category: "Programmes",
    keywords: ["yoga", "movement", "strengthen", "body", "calm", "mind", "practices", "levels"]
  },
  {
    id: "programmes-nutrition",
    title: "Nutrition & Wellness",
    description: "Transform your relationship with food through holistic nutrition guidance and personalized meal planning",
    path: "/programmes",
    category: "Programmes",
    keywords: ["nutrition", "wellness", "food", "holistic", "guidance", "meal", "planning", "personalized"]
  },
  {
    id: "programmes-breath",
    title: "Breath & Energy Work",
    description: "Harness the power of breathwork to release tension and activate your body's natural healing abilities",
    path: "/programmes",
    category: "Programmes",
    keywords: ["breath", "energy", "work", "breathwork", "tension", "activate", "healing", "abilities"]
  },
  {
    id: "programmes-complete",
    title: "Complete Wellness Package",
    description: "Our comprehensive programme combining all aspects of holistic well-being for total transformation",
    path: "/programmes",
    category: "Programmes",
    keywords: ["complete", "wellness", "package", "comprehensive", "holistic", "transformation", "total"]
  },

  // Mental Health page sections
  {
    id: "mh-psychotherapy",
    title: "PSYCOTHAREPY",
    description: "Our psychotherapy offering spans evidence-based approaches including CBT, DBT, EMDR, and integrative counselling.",
    path: "/programmes/mental-health",
    category: "Mental Health",
    keywords: [
      "psychotherapy",
      "psycotherapy",
      "psycotharepy",
      "therapy",
      "cbt",
      "dbt",
      "emdr",
      "counselling",
      "integrated psychotherapy",
      "mindfulness",
      "acceptance and commitment therapy",
      "act",
      "compassion focused",
      "trauma focused"
    ]
  },
  {
    id: "mh-addiction-recovery",
    title: "Addiction and Recovery",
    description: "Discreet, structured support for dependency or early recovery with integrated planning and therapy support.",
    path: "/programmes/mental-health",
    category: "Mental Health",
    keywords: [
      "addiction",
      "recovery",
      "dependency",
      "integrated planning",
      "therapy support",
      "screening",
      "risk evaluation"
    ]
  },
  {
    id: "mh-neurodiversity",
    title: "Neurodiversity",
    description: "Sensitive assessments and tailored support for ADHD or Autism Spectrum presentations.",
    path: "/programmes/mental-health",
    category: "Mental Health",
    keywords: [
      "adhd",
      "autism",
      "spectrum",
      "executive functioning",
      "assessment",
      "support"
    ]
  },
  {
    id: "mh-psychometrics",
    title: "Psychological Profiling & Psychometrics",
    description: "Detailed evaluations across cognitive, emotional, social, and behavioural domains.",
    path: "/programmes/mental-health",
    category: "Mental Health",
    keywords: [
      "psychometrics",
      "profiling",
      "cognitive",
      "emotional",
      "behavioural",
      "resilience",
      "screening"
    ]
  },

  // FAQ
  {
    id: "faq-main",
    title: "Frequently Asked Questions",
    description: "Everything you need to know about your journey with us",
    path: "/faq",
    category: "FAQ",
    keywords: ["faq", "questions", "frequently", "asked", "journey"]
  },
  {
    id: "faq-holistic",
    title: "What is holistic wellness?",
    description: "Holistic wellness is an approach to health that considers the whole person—body, mind, spirit, and emotions",
    path: "/faq",
    category: "FAQ",
    keywords: ["holistic", "wellness", "approach", "health", "whole", "person", "body", "mind", "spirit", "emotions"]
  },
  {
    id: "faq-duration",
    title: "How long are the programmes?",
    description: "Programme durations vary from 4 to 16 weeks depending on which path you choose",
    path: "/faq",
    category: "FAQ",
    keywords: ["duration", "programmes", "weeks", "path", "choose"]
  },
  {
    id: "faq-experience",
    title: "Do I need prior experience?",
    description: "No prior experience is necessary! Our programmes are designed to accommodate all levels",
    path: "/faq",
    category: "FAQ",
    keywords: ["experience", "prior", "necessary", "levels", "accommodate"]
  },

  // Contact
  {
    id: "contact-main",
    title: "Get In Touch",
    description: "We'd love to hear from you. Send us a message and we'll respond as soon as possible",
    path: "/contact",
    category: "Contact",
    keywords: ["contact", "touch", "message", "respond", "hear"]
  },

  // Exclusive Access
  {
    id: "exclusive-main",
    title: "Exclusive Membership",
    description: "Unlock premium wellness experiences and transform your journey with exclusive access",
    path: "/exclusive-access",
    category: "Exclusive Access",
    keywords: ["exclusive", "membership", "premium", "experiences", "transform", "journey", "access"]
  },
  {
    id: "exclusive-essential",
    title: "Essential Membership",
    description: "2 group sessions per month, Community access, Resource library, Monthly newsletter",
    path: "/exclusive-access",
    category: "Exclusive Access",
    keywords: ["essential", "membership", "group", "sessions", "community", "resource", "library", "newsletter"]
  },
  {
    id: "exclusive-premium",
    title: "Premium Membership",
    description: "Unlimited group sessions, 1 private session per month, Priority support, All Essential benefits",
    path: "/exclusive-access",
    category: "Exclusive Access",
    keywords: ["premium", "membership", "unlimited", "private", "session", "priority", "support", "benefits"]
  },
  {
    id: "exclusive-elite",
    title: "Elite Membership",
    description: "All Premium benefits, 4 private sessions per month, Personalized programme, VIP event access",
    path: "/exclusive-access",
    category: "Exclusive Access",
    keywords: ["elite", "membership", "private", "sessions", "personalized", "programme", "vip", "event", "access"]
  },

  // Navbar: Care Pathway
  {
    id: "carepathway-main",
    title: "Care Pathway",
    description: "Explore our structured care pathway for personalised, step-by-step wellbeing support.",
    path: "/carepathway",
    category: "Care Pathway",
    keywords: ["care", "pathway", "structured", "support", "assessment", "programme"]
  },

  // Navbar: About
  {
    id: "about-main",
    title: "About",
    description: "Learn about HWS and our holistic approach to wellbeing.",
    path: "/about",
    category: "About",
    keywords: ["about", "hws", "holistic", "approach", "mission"]
  },

  // Navbar: Levels of Engagement
  {
    id: "levels-main",
    title: "Levels of Engagement",
    description: "Understand our engagement levels to find the right depth of support.",
    path: "/levels-of-engagement",
    category: "Levels",
    keywords: ["levels", "engagement", "depth", "support"]
  },

  // Navbar: HWS Retreats
  {
    id: "retreats-main",
    title: "HWS Retreat",
    description: "Discover restorative retreats designed for deep rejuvenation.",
    path: "/retreats-restorative",
    category: "Retreats",
    keywords: ["retreat", "restorative", "rejuvenation", "wellbeing", "programme"]
  },
];

// Only show pages that exist in the navbar
export const NAVBAR_PATHS: string[] = [
  "/carepathway",
  "/about",
  "/faq",
  "/contact",
  "/levels-of-engagement",
  "/retreats-restorative",
  "/programmes/mental-health",
  "/programmes/wellness-longevity",
  "/programmes/holistic-wellbeing",
];

// Simple normalization helper
const normalize = (s: string) => s.toLowerCase().trim();

// Levenshtein distance for typo tolerance
const levenshtein = (a: string, b: string): number => {
  const s = a.toLowerCase();
  const t = b.toLowerCase();
  const m = s.length;
  const n = t.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = s[i - 1] === t[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // deletion
        dp[i][j - 1] + 1, // insertion
        dp[i - 1][j - 1] + cost // substitution
      );
    }
  }
  return dp[m][n];
};

// Fuzzy search function (with typo tolerance)
export const searchItems = (query: string): SearchItem[] => {
  if (!query.trim()) return [];

  const lowerQuery = normalize(query);

  const allowed = new Set(NAVBAR_PATHS);

  return searchData
    .map(item => {
      // Calculate relevance score
      let score = 0;

      // Exact title match gets highest score
      if (normalize(item.title).includes(lowerQuery)) {
        score += 10;
      }

      // Description match
      if (normalize(item.description).includes(lowerQuery)) {
        score += 5;
      }

      // Keyword matches
      const keywordMatches = item.keywords.filter(keyword =>
        normalize(keyword).includes(lowerQuery)
      ).length;
      score += keywordMatches * 3;

      // Partial matches in title/description
      const titleWords = normalize(item.title).split(' ');
      const descWords = normalize(item.description).split(' ');

      titleWords.forEach(word => {
        if (word.startsWith(lowerQuery)) score += 2;
        if (word.includes(lowerQuery)) score += 1;
      });

      descWords.forEach(word => {
        if (word.startsWith(lowerQuery)) score += 1;
        if (word.includes(lowerQuery)) score += 0.5;
      });

      // Typo tolerance using Levenshtein distance across title words and keywords
      const allCandidateWords = [
        ...titleWords,
        ...item.keywords.map(k => normalize(k))
      ];

      let bestDist = Infinity;
      for (const w of allCandidateWords) {
        bestDist = Math.min(bestDist, levenshtein(lowerQuery, w));
      }
      // Scoring based on distance (0 is exact)
      if (bestDist === 0) {
        score += 6; // reinforce exact word match
      } else if (bestDist === 1) {
        score += 4; // single typo
      } else if (bestDist === 2) {
        score += 3; // minor typo tolerance
      } else if (bestDist === 3) {
        score += 1; // weak match
      }

      return { ...item, score };
    })
    .filter(item => item.score > 0 && allowed.has(item.path))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8); // Limit to top 8 results
};