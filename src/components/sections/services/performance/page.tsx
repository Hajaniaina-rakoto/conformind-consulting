"use client";
import React, { useState } from "react";
import { 
  TrendingUp, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Check, 
  ClipboardCheck,
  Calendar,
  Layers,
  Award
} from "lucide-react";

export default function Performance() {
  const [activeTab, setActiveTab] = useState<"formations" | "accompagnement" | "diagnostic">("formations");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const standards = ["Leadership opérationnel", "Management stratégique", "Gestion du changement", "KPIs & Tableaux de bord de performance", "Performance des PME"];

  const courses = [
    {
      level: "Formule Découverte",
      duration: "1 Jour",
      price: "150 000 Ar / participant",
      badge: "Inspirer l'Équipe",
      audience: ["Chefs d'équipe", "Superviseurs", "Chefs de projets", "Nouveaux managers"],
      topics: [
        "Les fondamentaux d'un leadership efficace et bienveillant",
        "Communication professionnelle et active au sein des équipes",
        "Gestion saine et résolutive des conflits internes",
        "Introduction à l'accompagnement et conduite du changement"
      ],
      benefits: [
        "Améliorer immédiatement l'ambiance et la cohésion de vos équipes",
        "Savoir désamorcer les tensions de manière constructive",
        "Certificat de participation nominatif"
      ]
    },
    {
      level: "Formule Expert",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Piloter la Stratégie",
      audience: ["Directeurs généraux", "Cadres dirigeants", "Responsables RH", "Chefs d'entreprises"],
      topics: [
        "Management & Performance organisationnelle globale",
        "Management stratégique et structuration organisationnelle des PME",
        "Management opérationnel de la performance : définition et cascades des objectifs",
        "Implémentation d'outils de mesure d'efficacité (KPIs, OKRs)"
      ],
      benefits: [
        "Outils de pilotage stratégique adaptés aux PME malgaches",
        "Définition claire d'un organigramme agile orienté résultats",
        "Certificat remis après validation de cas réels"
      ]
    },
    {
      level: "Formule Auditeur Interne",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Efficience Processus",
      audience: ["Auditeurs internes", "Responsables de processus", "Contrôleurs de gestion", "Consultants"],
      topics: [
        "Principes d'audit d'efficience organisationnelle",
        "Analyse de la valeur ajoutée des processus (chasse au gaspillage / Lean)",
        "Audit de climat social et de communication d'entreprise",
        "Recherches d'opportunités d'optimisation coût/délai/qualité"
      ],
      benefits: [
        "Savoir diagnostiquer une surcharge ou un goulet d'étranglement de travail",
        "Modèles de rapports et fiches d'opportunités organisationnelles",
        "Plan d'audit d'efficience prêt à l'emploi"
      ]
    }
  ];

  const genericPacks = [
    {
      name: "Pack Express",
      duration: "3 à 6 mois",
      price: "À partir de 10 000 000 Ar",
      targets: "PME en phase de croissance souhaitant clarifier leur organigramme.",
      features: ["Diagnostic d'organisation initial", "Rédaction des fiches de postes clés", "Instauration de rituels de communication d'équipes", "Définition de 3 indicateurs par processus", "Coaching de base des managers de service"]
    },
    {
      name: "Pack Performance",
      duration: "6 à 9 mois",
      price: "À partir de 15 000 000 Ar",
      targets: "Entreprises installées en phase de restructuration ou de diversification.",
      features: ["Intégralité du Pack Express", "Ingénierie de plans stratégiques à 3 ans", "Mise en place d'outils collaboratifs et automatisés", "Coaching approfondi de la Direction", "Formation aux techniques de résolution de crises"]
    },
    {
      name: "Pack Excellence",
      duration: "9 à 12 mois",
      price: "À partir de 20 000 000 Ar",
      targets: "Grandes structures industrielles visant l'alignement sur les meilleures pratiques mondiales de gouvernance.",
      features: ["Intégralité du Pack Performance", "Déploiement complet des méthodologies de performance (Lean, Kanban, OKRs)", "Rapport de réorganisation global intégrant la RSE", "Accompagnement opérationnel à la conduite du changement complexe", "Assistance continue de pilotage de crise"]
    }
  ];

  const questions = [
    {
      id: 1,
      text: "Les responsabilités de chaque collaborateur sont-elles clairement définies par écrit ?",
      options: [
        { score: 1, label: "Non, les rôles sont flous et se chevauchent souvent selon les urgences." },
        { score: 2, label: "Oui, mais les fiches de postes sont obsolètes ou trop théoriques." },
        { score: 3, label: "Oui, les responsabilités de chacun sont claires, écrites et évaluées annuellement." }
      ]
    },
    {
      id: 2,
      text: "Quel outil de suivi de performance et KPIs utilisez-vous au quotidien ?",
      options: [
        { score: 1, label: "Aucun indicateur formel, on gère à l'instinct ou selon le compte en banque." },
        { score: 2, label: "Quelques chiffres de production ou de chiffre d'affaires, mais sans cascade par service." },
        { score: 3, label: "Tableaux de bord partagés détaillant des KPIs opérationnels pour chaque processus." }
      ]
    },
    {
      id: 3,
      text: "Comment décririez-vous l'attitude de vos cadres vis-à-vis du changement ou des réorganisations ?",
      options: [
        { score: 1, label: "Forte résistance passive ou blocages constants." },
        { score: 2, label: "Ils l'acceptent avec résignation, mais sans implication dynamique." },
        { score: 3, label: "Ils sont moteurs du changement, formés à l'accompagnement et proactifs." }
      ]
    },
    {
      id: 4,
      text: "Quel défi organisationnel prédomine aujourd'hui chez vous ?",
      options: [
        { score: 1, label: "Clarifier les rôles de chacun et instaurer une saine communication." },
        { score: 2, label: "Améliorer nos performances opérationnelles (réduction des délais et coûts)." },
        { score: 3, label: "Piloter une croissance à forte échelle tout en maintenant l'harmonie sociale." }
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
        "Maturité : Organisation Floue. Votre structure souffre d'un manque de clarté des rôles et de communication. Nous recommandons vivement d'inscrire vos collaborateurs à notre **Formule Formation Découverte (Leadership & Conflits)** ou de lancer le **Pack Express** d'accompagnement pour bâtir un organigramme propre."
      );
    } else if (totalScore <= 9) {
      setQuizResult(
        "Maturité : Opérationnel Réactif. Vous fonctionnez au quotidien mais manquez de hauteur stratégique pour cascader vos objectifs objectifs globaux. Optez pour notre **Formule Formation Expert (Management stratégique et opérationnel)** ou notre **Pack Performance** pour pérenniser vos gains de productivité."
      );
    } else {
      setQuizResult(
        "Maturité : Excellente Organisation. Votre équipe maîtrise les KPIs et rituels clés. Pour stimuler la chasse aux gaspillages de vos processus, formez vos leaders avec notre **Formule Auditeur (Efficience organisationnelle)** ou recourez au **Pack Excellence**."
      );
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizResult(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10" id="service-performance-view">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Breadcrumb & Intro Banner */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-100 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-20 -mt-20 -z-0 opacity-40 blur-2xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#2A9F8E] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <TrendingUp className="w-4 h-4" />
              Pilotage & Excellence Stratégique
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Management & Performance Organisationnelle
            </h1>
            <p className="text-[#2A9F8E] font-medium text-lg md:text-xl mt-3">
              Fédérer les talents, clarifier la gouvernance et piloter les objectifs stratégiques
            </p>

            <div className="border-t border-slate-100 my-8" />

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-slate-800 mb-3">L'Humain et la Structure, Leviers Clés de Votre Croissance</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Pour qu'une organisation excelle, il ne suffit pas de posséder de bons équipements; il faut des leaders inspirants, une communication fluide de l'administration aux équipes de terrain, et une cascade claire des objectifs de performance. ConforMind Consulting structure à vos côtés l'architecture de vos PME ou industries, pour libérer l'autonomie et asseoir des indicateurs de progrès réels et mesurables.
                </p>
                <div className="flex flex-wrap gap-2">
                  {standards.map((st, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-200">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#E7F5F2] to-teal-100/30 rounded-2xl p-6 border border-emerald-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-[#2A9F8E] font-bold text-sm uppercase tracking-wide mb-2">Piliers d'Action</h4>
                  <ul className="space-y-2 text-slate-700 text-xs font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Organigrammes et fiches de poste clairs
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Indicateurs de pilotage (KPIs & OKRs)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Conduite fluide du changement
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-200/40 text-xs text-slate-500 italic">
                  "Clarté engendre motivation, rigueur assure performance."
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
              Bilan Organisationnel (Interactif)
            </button>
          </div>
        </div>

        {/* Tab Contents: FORMATIONS */}
        {activeTab === "formations" && (
          <div className="space-y-8 animate-fade-in" id="perf-formations">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Nos Cycles de Formation en Management</h2>
              <p className="text-slate-500 text-sm mt-1">Développez les postures clés de leadership et d'efficacité collective indispensables aux PME modernes.</p>
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
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Vos avantages</h4>
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
          <div className="space-y-8 animate-fade-in" id="perf-packs">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Nos Formules d'Accompagnement Managérial</h2>
              <p className="text-slate-500 text-sm mt-1">Érigez un organigramme agile, clarifiez la gouvernance et mettez en œuvre un pilotage de croissance sereine.</p>
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
                      Demander un audit organisationnel initial
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Contents: DIAGNOSTIC (Interactive) */}
        {activeTab === "diagnostic" && (
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.06),_0_0_40px_rgba(42,159,142,0.03)] border border-slate-100 max-w-3xl mx-auto animate-fade-in" id="perf-quiz">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Diagnostic d'Efficience Managériale</h2>
              <p className="text-slate-500 text-sm mt-1">
                Calculez le niveau d'efficience organisationnelle et de leadership collaboratif au sein de votre comité de direction.
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
                  Calculer l'Efficience Organisationnelle
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-emerald-50 to-[#E7F5F2] rounded-2xl p-6 md:p-8 text-center border border-emerald-100">
                <CheckCircle2 className="w-12 h-12 text-[#2A9F8E] mx-auto mb-4" />
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Bilan en Organisation</h3>
                
                <p 
                  className="text-slate-800 text-sm leading-relaxed mb-6 bg-white p-4 rounded-xl border border-emerald-100 inline-block text-left"
                  dangerouslySetInnerHTML={{ __html: quizResult.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />

                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  <button
                    onClick={handleResetQuiz}
                    className="py-2.5 px-4 bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 rounded-lg text-xs font-semibold transition-colors duration-150"
                  >
                    Corriger le bilan
                  </button>
                  <a
                    href="#contact-section"
                    className="py-2.5 px-4 bg-[#2A9F8E] hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors duration-150 flex items-center justify-center gap-1"
                  >
                    Demander l'Accompagnement
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