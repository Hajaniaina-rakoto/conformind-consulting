"use client";
import React, { useState } from "react";
import { 
  Leaf, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Check, 
  ClipboardCheck,
  Calendar,
  Globe,
  HeartHandshake
} from "lucide-react";

export default function EnvironmentSocial() {
  const [activeTab, setActiveTab] = useState<"formations" | "accompagnement" | "diagnostic">("formations");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const standards = ["ISO 14001", "ISO 26000 (RSE)", "Responsabilité Sociétale", "Critères ESG", "Économie Circulaire"];

  const courses = [
    {
      level: "Formule Découverte",
      duration: "1 Jour",
      price: "150 000 Ar / participant",
      badge: "Sensibilisation",
      audience: ["Comités de Direction", "Collaborateurs", "Porteurs de projets", "Étudiants"],
      topics: [
        "Comprendre l'ISO 14001 et le Système de Management Environnemental",
        "Sensibilisation globale aux 7 questions centrales de l'ISO 26000",
        "Introduction simplifiée à l'ESG (Environnement, Social, Gouvernance)",
        "Les fondamentaux de l'économie circulaire appliqués aux PME"
      ],
      benefits: [
        "Éveiller la conscience collective des équipes",
        "Aligner la culture d'entreprise sur l'éthique moderne",
        "Certificat de participation nominatif"
      ]
    },
    {
      level: "Formule Expert",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Pilotage & Impact",
      audience: ["Responsables RSE / ESG", "Directeurs RH", "Responsables QHSE", "Consultants"],
      topics: [
        "Interprétation et déploiement pratique de l'ISO 14001",
        "Mise en œuvre d'une démarche RSE structurée et mesurable",
        "Comprendre, calculer et auditer les critères ESG majeurs",
        "Rédaction de rapports de durabilité de marque"
      ],
      benefits: [
        "Bâtir une politique RSE conforme aux attentes institutionnelles et bailleurs",
        "Maîtriser les outils de suivi d'impact environnemental",
        "Matrices d'évaluation des impacts clés fournies"
      ]
    },
    {
      level: "Formule Auditeur Interne",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Vérification",
      audience: ["Auditeurs internes", "Responsables QHSE", "Évaluateurs RSE"],
      topics: [
        "Méthodes d'audit d'impact environnemental et social",
        "Méthodologies d'évaluation éthique (SMETA, Fair Trade)",
        "Droits des travailleurs et des hommes au travail : points de contrôle",
        "Valorisation et gestion du dossier de traitement des déchets"
      ],
      benefits: [
        "Compétence d'auto-évaluation interne",
        "Préparation sereine aux audits de conformité internationaux",
        "Modèles de guides d'entretien éthique"
      ]
    }
  ];

  const genericPacks = [
    {
      name: "Pack Express",
      duration: "3 à 6 mois",
      price: "À partir de 10 000 000 Ar",
      targets: "Petites et moyennes organisations souhaitant structurer leur première charte éco-sociale.",
      features: ["Auto-évaluation initiale du statut RSE", "Rédaction de la Charte d'Engagements RSE", "Sensibilisation verte des collaborateurs", "Plan d'action de gestion des déchets", "Étude d'impact environnemental succincte"]
    },
    {
      name: "Pack Performance",
      duration: "6 à 9 mois",
      price: "À partir de 15 000 000 Ar",
      targets: "Entreprises souhaitant pérenniser leur gouvernance et s'aligner sur l'ISO 14001.",
      features: ["Intégralité du Pack Express", "Ingénierie du Système de Management Environnemental (SME)", "Suivi quantitatif des émissions et de l'efficience énergétique", "Audit d'écarts de gouvernance", "Formation des ambassadeurs internes RSE"]
    },
    {
      name: "Pack Excellence",
      duration: "9 à 12 mois",
      price: "À partir de 20 000 000 Ar",
      targets: "Organisations visant la conformité ESG pour rassurer des investisseurs ou partenaires internationaux.",
      features: ["Intégralité du Pack Performance", "Préparation certifiante ISO 14501/26000", "Bilan Carbone ou Bilan Hydrique", "Mise en place de lignes directrices d'éthique sociale (SMETA / Fair Trade)", "Assistance lors d'audits de notation extra-financière"]
    }
  ];

  const questions = [
    {
      id: 1,
      text: "Votre entreprise a-t-elle établi une gestion et valorisation de ses déchets ?",
      options: [
        { score: 1, label: "Non, tout part à la décharge publique de manière mixte." },
        { score: 2, label: "Le tri existe pour certains matériaux évidents (cartons, plastique), mais sans filière de valorisation." },
        { score: 3, label: "Oui, nous suivons un tri rigoureux et collaborons avec des reconditionneurs locaux." }
      ]
    },
    {
      id: 2,
      text: "Connaissez-vous et surveillez-vous la consommation d'énergie et d'eau de vos installations ?",
      options: [
        { score: 1, label: "Nous recevons les factures d'eau/électricité, sans de réels indicateurs de suivi." },
        { score: 2, label: "Nous suivons notre budget d'énergie, mais sans plan de sobriété environnementale." },
        { score: 3, label: "Oui, nous avons un tableau de bord et des objectifs clairs de décarbonation." }
      ]
    },
    {
      id: 3,
      text: "Votre démarche intègre-t-elle le respect des droits des travailleurs et le bien-être social ?",
      options: [
        { score: 1, label: "Nous appliquons uniquement la loi du travail en vigueur sans programme additionnel." },
        { score: 2, label: "Nous essayons de favoriser de bonnes conditions, mais sans comité de veille formalisé." },
        { score: 3, label: "Nous avons une charte éthique stricte et un comité actif pour le bien-être au travail." }
      ]
    },
    {
      id: 4,
      text: "Vos partenaires et bailleurs vous interrogent-ils sur vos engagements éco-responsables ?",
      options: [
        { score: 1, label: "Jamais à notre connaissance." },
        { score: 2, label: "Parfois, cela devient un sujet de discussion lors des négociations." },
        { score: 3, label: "Fréquemment, c'est désormais une exigence bloquante pour nos contrats." }
      ]
    }
  ];

  const handleSelectOption = (qId: number, score: number) => {
    setQuizAnswers(prev => ({ ...prev, [qId]: score }));
  };

  const calculateRecommendation = () => {
    if (Object.keys(quizAnswers).length < questions.length) {
      alert("Veuillez répondre à toutes les questions avant de calculer le résultat.");
      return;
    }
    const totalScore = Object.keys(quizAnswers).reduce((acc, cur) => acc + quizAnswers[Number(cur)], 0);
    
    if (totalScore <= 6) {
      setQuizResult(
        "Maturité : RSE Initiale. Votre posture est réactive. Pour anticiper la législation et inspirer confiance, nous suggérons d'intégrer notre **Formule Formation Découverte (SME & RSE)** ou d'initier un **Pack Express** afin d'ériger votre première charte verte."
      );
    } else if (totalScore <= 9) {
      setQuizResult(
        "Maturité : Émergente. Vos équipes s'en soucient mais manquent d'outils et d'indicateurs opérationnels. La **Formule Formation Expert (Gestion ESG / Durabilité)** ou notre **Pack Performance** vous aidera à transformer vos intentions positives en indicateurs mesurables."
      );
    } else {
      setQuizResult(
        "Maturité : Avancée / Stratégique. Félicitations ! Vous comprenez l'impact concret du développement durable. Pour valoriser cette distinction à l'international, formez un auditeur avec notre **Formule Auditeur (Impact éco-social)** ou optez pour le **Pack Excellence**."
      );
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizResult(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10" id="service-environment-view">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Breadcrumb & Intro Banner */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-100 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-20 -mt-20 -z-0 opacity-40 blur-2xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#2A9F8E] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Globe className="w-4 h-4" />
              Responsabilité & Durabilité
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Environnement & Responsabilité Sociale
            </h1>
            <p className="text-[#2A9F8E] font-medium text-lg md:text-xl mt-3">
              Engager les organisations dans la transition écologique et éthique (RSE / ESG / ISO 14001)
            </p>

            <div className="border-t border-slate-100 my-8" />

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-slate-800 mb-3">La RSE : de l'Intention morale à la Valeur Extra-Financière</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dans une économie mondiale de plus en plus attentive, l'impact écologique et les valeurs éthiques guident les décisions d'achat et le soutien des bailleurs. ConforMind accompagne les PME et institutions de Madagascar dans l'appropriation de l'ISO 14001, la réduction de l'empreinte environnementale, la gestion structurée des déchets et le respect strict des droits des collaborateurs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {standards.map((st, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-200">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#E7F5F2] to-emerald-100/30 rounded-2xl p-6 border border-emerald-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-[#2A9F8E] font-bold text-sm uppercase tracking-wide mb-2">Engager Vos Colocs</h4>
                  <ul className="space-y-2 text-slate-700 text-xs font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Gestion vertueuse des déchets
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Respect des droits des travailleurs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Sobriété énergétique & carbone
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-200/40 text-xs text-slate-500 italic">
                  "Concilier impératif économique et responsabilité humaine."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-8 border-b border-slate-200">
          <div className="inline-flex gap-2 p-1 bg-slate-200/60 rounded-xl mb-4">
            <button
              onClick={() => setActiveTab("formations")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === "formations"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Calendar className="w-4 h-4 inline mr-2 -mt-0.5" />
              Programmes de Formation
            </button>
            <button
              onClick={() => setActiveTab("accompagnement")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === "accompagnement"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ClipboardCheck className="w-4 h-4 inline mr-2 -mt-0.5" />
              Packs d'Accompagnement
            </button>
            <button
              onClick={() => setActiveTab("diagnostic")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === "diagnostic"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <HelpCircle className="w-4 h-4 inline mr-2 -mt-0.5" />
              Bilan RSE & ESG (Interactif)
            </button>
          </div>
        </div>

        {/* Tab Contents: FORMATIONS */}
        {activeTab === "formations" && (
          <div className="space-y-8 animate-fade-in" id="env-formations">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Nos Solutions de Formation Éco-sociale</h2>
              <p className="text-slate-500 text-sm mt-1">Insufflez des compétences d'éco-conception, de durabilité et d'audit extra-financier chez vos talents.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {courses.map((course, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                    course.level === "Formule Expert" 
                      ? "border-emerald-300 shadow-[0_22px_50px_rgba(42,159,142,0.18)] ring-4 ring-emerald-400/10 hover:shadow-[0_25px_60px_rgba(42,159,142,0.25)] hover:-translate-y-1" 
                      : "border-slate-150 shadow-[0_8px_30px_rgba(15,23,42,0.02)] hover:border-emerald-300/60 hover:shadow-[0_20px_45px_rgba(42,159,142,0.08)] hover:-translate-y-1"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold text-[#2A9F8E] uppercase tracking-wide bg-[#E7F5F2] px-3 py-1 rounded-full">
                        {course.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1">{course.level}</h3>
                    <p className="font-mono text-xs font-semibold text-emerald-600 tracking-tight bg-emerald-50/50 inline-block px-2 py-0.5 rounded border border-emerald-100/50 mb-4">
                      {course.price}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> Public Éligible
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {course.audience.map((aud, aIdx) => (
                          <span key={aIdx} className="bg-slate-100 text-slate-600 text-[11px] px-2 py-1 rounded-md">
                            {aud}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Thématiques Clés</h4>
                      <ul className="space-y-2">
                        {course.topics.map((top, tIdx) => (
                          <li key={tIdx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                            {top}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Avantages Clés</h4>
                    <ul className="space-y-2 mb-4">
                      {course.benefits.map((ben, bIdx) => (
                        <li key={bIdx} className="text-xs text-slate-500 flex items-start gap-1.5">
                          <Check className="w-4 h-4 shrink-0 text-emerald-500" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact-section"
                      className="w-full flex items-center justify-center gap-2 bg-slate-950 hover:bg-[#2A9F8E] text-white rounded-xl py-2.5 text-xs font-semibold tracking-wide transition-colors duration-200"
                    >
                      S'inscrire à ce module
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Contents: ACCOMPAGNEMENT PACKS */}
        {activeTab === "accompagnement" && (
          <div className="space-y-8 animate-fade-in" id="env-packs">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Incarnez l'Engagement en Entreprise</h2>
              <p className="text-slate-500 text-sm mt-1">Des plans directeurs adaptés aux PME malgaches pour structurer, auditer et valoriser votre éco-gouvernance.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {genericPacks.map((pk, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/85 shadow-[0_12px_35px_rgba(15,23,42,0.03)] hover:border-[#2A9F8E]/45 hover:shadow-[0_22px_45px_rgba(42,159,142,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{pk.name}</h3>
                    <div className="flex items-center gap-2 mt-1 mb-4">
                      <span className="text-xs bg-emerald-50 text-[#2A9F8E] px-2 py-0.5 rounded font-semibold">{pk.duration}</span>
                      <span className="text-xs text-slate-400 font-medium">Temps requis</span>
                    </div>

                    <p className="text-slate-500 text-xs leading-normal mb-4 italic">
                      {pk.targets}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
                      <span className="text-xs font-mono text-slate-400 block mb-1">Budget d'investissement</span>
                      <span className="text-[#2A9F8E] font-bold text-lg font-mono">{pk.price}</span>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">Compris dans le pack</h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {pk.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2A9F8E] shrink-0 mt-1.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4">
                    <a
                      href="#contact-section"
                      className="w-full flex items-center justify-center bg-[#2A9F8E] hover:bg-emerald-700 text-white rounded-xl py-3 text-xs font-semibold tracking-wide transition-colors duration-200"
                    >
                      Planifier un pré-diagnostic initial
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Contents: DIAGNOSTIC (Interactive) */}
        {activeTab === "diagnostic" && (
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.06),_0_0_40px_rgba(42,159,142,0.03)] border border-slate-100 max-w-3xl mx-auto animate-fade-in" id="env-quiz">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Bilan d'Impact RSE & ESG</h2>
              <p className="text-slate-500 text-sm mt-1">
                Calculez rapidement le score de durabilité et d'engagement social de vos bureaux ou sites d'exploitation.
              </p>
            </div>

            {!quizResult ? (
              <div className="space-y-8">
                {questions.map((q) => (
                  <div key={q.id} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-base font-bold text-slate-800 mb-3 flex items-start gap-2">
                      <span className="bg-emerald-50 text-[#2A9F8E] w-6 h-6 rounded-full inline-flex items-center justify-center font-mono text-xs shrink-0">
                        {q.id}
                      </span>
                      {q.text}
                    </h3>

                    <div className="grid gap-3">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = quizAnswers[q.id] === opt.score;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectOption(q.id, opt.score)}
                            className={`text-left p-3.5 rounded-xl text-xs font-medium border transition-all duration-150 flex items-center justify-between ${
                              isSelected
                                ? "border-[#2A9F8E] bg-[#E7F5F2] text-[#2A9F8E] shadow-sm font-semibold"
                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            <span>{opt.label}</span>
                            {isSelected && <CheckCircle2 className="w-4.5 h-4.5 shrink-0 text-[#2A9F8E]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                <button
                  onClick={calculateRecommendation}
                  className="w-full py-3 bg-slate-900 hover:bg-[#2A9F8E] text-white rounded-xl font-bold text-sm tracking-wide transition-all duration-200 shadow-sm shadow-slate-900/10 flex items-center justify-center gap-2"
                >
                  <ClipboardCheck className="w-4.5 h-4.5" />
                  Calculer mon Positionnement
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-emerald-50 to-[#E7F5F2] rounded-2xl p-6 md:p-8 text-center border border-emerald-100">
                <CheckCircle2 className="w-12 h-12 text-[#2A9F8E] mx-auto mb-4" />
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Bilan RSE Synthétique</h3>
                
                <p 
                  className="text-slate-800 text-sm leading-relaxed mb-6 bg-white p-4 rounded-xl border border-emerald-100 inline-block text-left"
                  dangerouslySetInnerHTML={{ __html: quizResult.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />

                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  <button
                    onClick={handleResetQuiz}
                    className="py-2.5 px-4 bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 rounded-lg text-xs font-semibold transition-colors duration-150"
                  >
                    Corriger mes réponses
                  </button>
                  <a
                    href="#contact-section"
                    className="py-2.5 px-4 bg-[#2A9F8E] hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors duration-150 flex items-center justify-center gap-1"
                  >
                    Créer notre Charte
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}