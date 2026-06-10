export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  featured?: boolean;

  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "certification-iso-9001",
    title:
      "Comment réussir sa certification ISO 9001",
    excerpt:
      "Les étapes essentielles pour préparer votre entreprise à la certification ISO 9001.",

    category: "Qualité",

    date: "12 Juin 2026",

    readingTime: "5 min",

    image: "/images/blog/iso9001.jpg",

    featured: true,

    content: `
La certification ISO 9001 constitue aujourd'hui un levier majeur pour améliorer la qualité et la satisfaction client.

La réussite d'un projet ISO 9001 repose sur plusieurs étapes :

- Diagnostic initial
- Analyse des écarts
- Mise en place des processus
- Formation des équipes
- Audit interne
- Certification

Une approche structurée permet d'obtenir des résultats durables et mesurables.
    `,
  },

  {
    slug: "audit-interne-hse",
    title:
      "Réussir un audit interne HSE",

    excerpt:
      "Préparez efficacement vos équipes pour vos audits HSE.",

    category: "HSE",

    date: "04 Juin 2026",

    readingTime: "6 min",

    image: "/images/blog/hse.jpg",

    content: `
L'audit interne HSE permet d'identifier les risques et les opportunités d'amélioration.

Une bonne préparation garantit une meilleure conformité réglementaire et opérationnelle.
    `,
  },

  {
    slug: "iso-22000-securite-alimentaire",
    title:
      "ISO 22000 et sécurité alimentaire",

    excerpt:
      "Les fondamentaux de la sécurité des denrées alimentaires.",

    category: "Food Safety",

    date: "28 Mai 2026",

    readingTime: "7 min",

    image: "/images/blog/food-safety.jpg",

    content: `
ISO 22000 permet d'assurer la maîtrise des risques liés à la sécurité alimentaire tout au long de la chaîne de valeur.
    `,
  },

  {
    slug: "agriculture-biologique-certification",
    title:
      "Certification en agriculture biologique",

    excerpt:
      "Comprendre les exigences des référentiels BIO internationaux.",

    category: "Agriculture",

    date: "20 Mai 2026",

    readingTime: "5 min",

    image: "/images/blog/agriculture.jpg",

    content: `
Les certifications biologiques permettent de valoriser les produits agricoles sur les marchés nationaux et internationaux.
    `,
  },

  {
    slug: "iso-14001-performance-environnementale",
    title:
      "ISO 14001 et performance environnementale",

    excerpt:
      "Réduire son impact environnemental grâce à une approche structurée.",

    category: "Environnement",

    date: "12 Mai 2026",

    readingTime: "6 min",

    image: "/images/blog/environment.jpg",

    content: `
La norme ISO 14001 aide les organisations à mettre en place un système de management environnemental performant.
    `,
  },

  {
    slug: "pilotage-performance-entreprise",
    title:
      "Les indicateurs clés de performance",

    excerpt:
      "Comment piloter efficacement la performance de votre organisation.",

    category: "Performance",

    date: "06 Mai 2026",

    readingTime: "4 min",

    image: "/images/blog/performance.jpg",

    content: `
Les KPI permettent d'orienter les décisions stratégiques et d'améliorer la performance globale de l'entreprise.
    `,
  },
];