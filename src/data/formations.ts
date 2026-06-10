// export const formations = [
//   {
//     slug: "decouverte",
//     title: "Formule Découverte",
//     duration: "1 jour",
//     price: "150 000 Ar",
//     category: "Initiation",

//     image: "/images/formations/decouverte.jpg",

//     description:
//       "Acquérez rapidement les fondamentaux des référentiels qualité, sécurité, environnement et agriculture durable.",

//     objectifs: [
//       "Comprendre les bases des référentiels",
//       "Identifier les exigences principales",
//       "Découvrir les bonnes pratiques",
//       "Préparer une montée en compétences",
//     ],

//     programmes: [
//       "Introduction HACCP",
//       "Introduction ISO 22000",
//       "Introduction ISO 9001",
//       "Introduction ISO 14001",
//       "Sensibilisation SST",
//       "Introduction à la RSE",
//     ],
//   },

//   {
//     slug: "expert",
//     title: "Formule Expert",
//     duration: "2 jours",
//     price: "350 000 Ar",
//     category: "Perfectionnement",

//     image: "/images/formations/expert.jpg",

//     description:
//       "Maîtrisez les référentiels et apprenez à les mettre en œuvre efficacement dans votre organisation.",

//     objectifs: [
//       "Comprendre les exigences détaillées",
//       "Déployer un système de management",
//       "Mettre en place les outils nécessaires",
//       "Préparer la certification",
//     ],

//     programmes: [
//       "ISO 9001",
//       "ISO 22000",
//       "ISO 45001",
//       "ISO 14001",
//       "RSE",
//       "ESG",
//       "Food Defense",
//       "Food Fraud",
//     ],
//   },

//   {
//     slug: "auditeur-interne",
//     title: "Auditeur Interne",
//     duration: "2 jours",
//     price: "350 000 Ar",
//     category: "Audit",

//     image: "/images/formations/auditeur.jpg",

//     description:
//       "Développez les compétences nécessaires pour conduire des audits internes performants.",

//     objectifs: [
//       "Préparer un audit interne",
//       "Conduire les entretiens",
//       "Identifier les écarts",
//       "Rédiger les rapports d'audit",
//     ],

//     programmes: [
//       "Techniques d'audit",
//       "Préparation des audits",
//       "Gestion des constats",
//       "Plan d'action",
//       "Suivi des non-conformités",
//     ],
//   },

//   {
//     slug: "etudiants",
//     title: "Programme Étudiants",
//     duration: "Flexible",
//     price: "À partir de 50 000 Ar",
//     category: "Étudiants",

//     image: "/images/formations/etudiants.jpg",

//     description:
//       "Préparez votre insertion professionnelle et découvrez les métiers du QHSE.",

//     objectifs: [
//       "Construire un CV efficace",
//       "Réussir un entretien",
//       "Découvrir les métiers QHSE",
//       "Développer son leadership",
//     ],

//     programmes: [
//       "Insertion professionnelle",
//       "Communication professionnelle",
//       "Leadership",
//       "Métiers du QHSE",
//       "Développement personnel",
//     ],
//   },
// ];

export type Formation = {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  price: string;
  priceDetail?: string;
  category: string;
  categoryColor: "teal" | "blue" | "amber" | "purple";
  image: string;
  description: string;
  audience: string[];
  objectifs: string[];
  programmes: {
    theme: string;
    items: string[];
  }[];
  avantages: string[];
};

export const formations: Formation[] = [
  {
    slug: "decouverte",
    title: "Formule Découverte",
    tagline: "Acquérez rapidement les fondamentaux des référentiels",
    duration: "1 jour",
    price: "150 000 Ar",
    priceDetail: "par participant",
    category: "Initiation",
    categoryColor: "teal",
    image: "/images/formations/decouverte.jpg",
    description:
      "Nos formations découverte sont conçues pour les personnes souhaitant acquérir rapidement les fondamentaux d'un domaine et comprendre les exigences essentielles des référentiels.",
    audience: [
      "Dirigeants d'entreprise",
      "Responsables débutants",
      "Entrepreneurs",
      "Porteurs de projet",
      "Professionnels en reconversion",
      "Étudiants",
    ],
    objectifs: [
      "Comprendre les bases des principaux référentiels QHSE",
      "Identifier les exigences essentielles applicables",
      "Découvrir les bonnes pratiques sectorielles",
      "Préparer une montée en compétences ciblée",
    ],
    programmes: [
      {
        theme: "Food Safety",
        items: [
          "Initiation à l'HACCP",
          "Introduction à l'ISO 22000",
          "Bonnes pratiques d'hygiène (BPH/BPF)",
          "Culture Food Safety",
          "Gestion des allergènes",
          "Traçabilité alimentaire",
        ],
      },
      {
        theme: "Qualité",
        items: [
          "Introduction à l'ISO 9001",
          "Gestion des non-conformités",
          "Analyse des risques",
          "Outils qualité essentiels",
        ],
      },
      {
        theme: "Santé & Sécurité au Travail",
        items: [
          "Introduction à l'ISO 45001",
          "Sensibilisation SST",
          "Prévention des risques professionnels",
          "Gestion des situations d'urgence",
        ],
      },
      {
        theme: "Environnement & Durabilité",
        items: [
          "Introduction à l'ISO 14001",
          "Sensibilisation à la RSE",
          "Introduction à l'ESG",
          "Économie circulaire",
        ],
      },
      {
        theme: "Filières Agricoles",
        items: [
          "Introduction à l'agriculture biologique",
          "UEBT : principes fondamentaux",
          "Bonnes pratiques agricoles",
        ],
      },
      {
        theme: "Management",
        items: [
          "Leadership efficace",
          "Communication professionnelle",
          "Gestion des conflits",
          "Gestion du changement",
        ],
      },
    ],
    avantages: [
      "Formation courte et pratique",
      "Accessible à tous les niveaux",
      "Exercices et études de cas",
      "Certificat de participation",
    ],
  },

  {
    slug: "expert",
    title: "Formule Expert",
    tagline: "Maîtrisez les référentiels et déployez-les concrètement",
    duration: "2 jours",
    price: "350 000 Ar",
    priceDetail: "par participant",
    category: "Perfectionnement",
    categoryColor: "blue",
    image: "/images/formations/expert.jpg",
    description:
      "Ces formations approfondies permettent de maîtriser les exigences et leur application concrète au sein des organisations. Devenez un professionnel capable de mettre en œuvre les référentiels.",
    audience: [
      "Responsables Qualité",
      "Responsables Production",
      "Responsables HSE",
      "Coordinateurs",
      "Consultants",
      "Futurs référents internes",
    ],
    objectifs: [
      "Comprendre les exigences détaillées des référentiels",
      "Déployer un système de management efficace",
      "Mettre en place les outils de pilotage nécessaires",
      "Préparer l'organisation à la certification",
    ],
    programmes: [
      {
        theme: "Food Safety",
        items: [
          "Maîtriser la méthode HACCP",
          "Interprétation ISO 22000:2018",
          "Food Defense",
          "Food Fraud",
          "Culture Food Safety",
        ],
      },
      {
        theme: "Qualité",
        items: [
          "Interprétation ISO 9001:2015",
          "Gestion documentaire",
          "KPI et tableaux de bord",
          "Excellence opérationnelle",
        ],
      },
      {
        theme: "Santé & Sécurité au Travail",
        items: [
          "Interprétation ISO 45001",
          "Analyse des accidents",
          "Leadership HSE",
        ],
      },
      {
        theme: "Environnement",
        items: [
          "Interprétation ISO 14001",
          "Mise en œuvre d'une démarche environnementale",
        ],
      },
      {
        theme: "Durabilité",
        items: [
          "Mise en œuvre de la RSE",
          "Comprendre les critères ESG",
        ],
      },
      {
        theme: "Filières Agricoles",
        items: [
          "Mise en place d'un SCI",
          "Préparation BIO",
          "UEBT : mise en œuvre pratique",
        ],
      },
    ],
    avantages: [
      "Approche opérationnelle",
      "Cas pratiques concrets",
      "Outils directement applicables",
      "Certificat de participation",
    ],
  },

  {
    slug: "auditeur-interne",
    title: "Auditeur Interne",
    tagline: "Apprenez à évaluer, améliorer et créer de la valeur",
    duration: "2 jours",
    price: "350 000 Ar",
    priceDetail: "par participant",
    category: "Audit",
    categoryColor: "amber",
    image: "/images/formations/auditeur.jpg",
    description:
      "Développez les compétences nécessaires pour conduire des audits internes efficaces. Préparez, conduisez et capitalisez sur chaque mission d'audit.",
    audience: [
      "Responsables Qualité",
      "Responsables Production",
      "Responsables HSE",
      "Coordinateurs",
      "Consultants",
      "Futurs auditeurs internes",
    ],
    objectifs: [
      "Préparer et planifier un audit interne",
      "Conduire les entretiens avec professionnalisme",
      "Identifier et documenter les écarts",
      "Rédiger des rapports d'audit exploitables",
    ],
    programmes: [
      {
        theme: "Techniques d'audit",
        items: [
          "Principes et types d'audit",
          "Préparation du plan d'audit",
          "Techniques d'entretien",
          "Collecte des preuves",
        ],
      },
      {
        theme: "Conduite de l'audit",
        items: [
          "Réunion d'ouverture",
          "Audit terrain",
          "Gestion des constats",
          "Réunion de clôture",
        ],
      },
      {
        theme: "Suivi et amélioration",
        items: [
          "Rédaction du rapport d'audit",
          "Plan d'action corrective",
          "Suivi des non-conformités",
          "Indicateurs d'efficacité",
        ],
      },
    ],
    avantages: [
      "Approche opérationnelle",
      "Mises en situation réelles",
      "Outils directement applicables",
      "Certificat de participation",
    ],
  },

  {
    slug: "etudiants",
    title: "Formule Étudiants",
    tagline: "Investissez aujourd'hui dans votre avenir professionnel",
    duration: "Flexible",
    price: "À partir de 50 000 Ar",
    priceDetail: "1 thème · 3 thèmes : 120 000 Ar · 5 thèmes : 200 000 Ar",
    category: "Étudiants",
    categoryColor: "purple",
    image: "/images/formations/etudiants.jpg",
    description:
      "Préparez votre insertion professionnelle et découvrez les métiers du QHSE. Des parcours adaptés à chaque niveau d'études pour construire une carrière solide.",
    audience: [
      "Étudiants niveau Baccalauréat",
      "Étudiants niveau Licence",
      "Étudiants niveau Master et plus",
      "Jeunes diplômés",
    ],
    objectifs: [
      "Construire un CV percutant et professionnel",
      "Réussir ses entretiens d'embauche",
      "Découvrir les métiers et débouchés du QHSE",
      "Développer son leadership et sa communication",
    ],
    programmes: [
      {
        theme: "Insertion professionnelle",
        items: [
          "Réussir son entretien",
          "Construire un CV gagnant",
          "Réussir sa première prise de poste",
        ],
      },
      {
        theme: "Parcours Master & plus",
        items: [
          "Devenir Responsable Qualité",
          "Devenir Responsable Production",
          "Devenir Responsable HSE",
          "Devenir Auditeur Interne",
          "Devenir Consultant QHSE",
        ],
      },
      {
        theme: "Parcours Licence",
        items: [
          "Chargé Qualité",
          "Contrôleur Qualité",
          "Assistant QHSE",
          "Assistant Production",
          "Animateur HSE",
        ],
      },
      {
        theme: "Niveau Baccalauréat",
        items: [
          "Superviseur de production",
          "Agent de contrôle qualité",
          "Agent de traçabilité",
          "Animateur Hygiène et Sécurité",
          "Gestionnaire de stock",
        ],
      },
      {
        theme: "Développement personnel",
        items: [
          "Leadership",
          "Communication professionnelle",
          "Les métiers d'avenir du QHSE",
        ],
      },
    ],
    avantages: [
      "Tarifs accessibles et modulables",
      "Conseils personnalisés",
      "Attestation de participation",
      "Accès au réseau ConforMind",
    ],
  },
];