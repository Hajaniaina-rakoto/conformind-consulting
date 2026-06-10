"use client";
import React, { useState } from "react";
import { 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Bookmark, 
  Users, 
  Clock, 
  Check, 
  ShieldAlert,
  ClipboardCheck,
  Calendar
} from "lucide-react";

export default function Quality() {
  const [activeTab, setActiveTab] = useState<"formations" | "accompagnement" | "diagnostic">("formations");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const standards = ["ISO 9001", "SMQ (Système de Management Qualité)", "Audit Qualité", "ISO 19011 (Lignes directrices d'audit)"];

  const courses = [
    {
      level: "Formule Découverte",
      duration: "1 Jour",
      price: "150 000 Ar / participant",
      badge: "Fondations",
      audience: ["Dirigeants d'entreprise", "Responsables débutants", "Entrepreneurs", "Étudiants"],
      topics: [
        "Introduction aux concepts fondamentaux de la SMQ",
        "Décryptage simplifié de l'ISO 9001",
        "Méthodologie d'analyse des risques (première approche)",
        "Gestion des non-conformités et des réclamations"
      ],
      benefits: [
        "Comprendre les concepts essentiels sans jargon complexe",
        "Disposer d'outils simples immédiatement applicables",
        "Certificat nominatif de participation"
      ]
    },
    {
      level: "Formule Expert",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Approfondi (Recommandé)",
      audience: ["Responsables Qualité", "Coordinateurs Processus", "Futurs référents", "Consultants"],
      topics: [
        "Interprétation complète et rigoureuse de la norme ISO 9001:2015",
        "Structuration d'un système documentaire efficace (allégé et agile)",
        "Définition d'indicateurs clés (KPIs) et animation de tableaux de bord",
        "Outils d'excellence opérationnelle et de résolution de problèmes"
      ],
      benefits: [
        "Vision stratégique et opérationnelle intégrée",
        "Matrice d'écarts et modèles de documents fournis",
        "Alternance de théorie et d'études de cas pratiques"
      ]
    },
    {
      level: "Formule Auditeur Interne",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Spécialisation",
      audience: ["Auditeurs internes", "Responsables QHSE", "Évaluateurs"],
      topics: [
        "Planification et préparation d'un audit de conformité selon l'ISO 19011",
        "Techniques d'entretien d'audit et collecte de preuves",
        "Formuler des constats clairs (Écarts, observations, points forts)",
        "Rapport d'audit et suivi des actions d'amélioration"
      ],
      benefits: [
        "Mises en situation réelles et simulations d'audits",
        "Maîtrise complète de la posture de l'auditeur",
        "Outils de check-list d'audit personnalisables"
      ]
    }
  ];

  const genericPacks = [
    {
      name: "Pack Express",
      duration: "3 à 6 mois",
      price: "À partir de 10 000 000 Ar",
      targets: "PME et structures souhaitant structurer rapidement leur démarche.",
      features: ["Diagnostic initial de conformité", "Plan d'action prioritaire", "Sensibilisation des équipes", "Élaboration des processus clés", "Audit blanc de préparation"]
    },
    {
      name: "Pack Performance",
      duration: "6 à 9 mois",
      price: "À partir de 15 000 000 Ar",
      targets: "Organisations visant un déploiement robuste avec outillage digital.",
      features: ["Intégralité du Pack Express", "Ingénierie documentaire complète", "Coaching individuel des pilotes de processus", "Outils de pilotage de performance", "Suivi régulier post-déploiement"]
    },
    {
      name: "Pack Excellence",
      duration: "9 à 12 mois",
      price: "À partir de 20 000 000 Ar",
      targets: "Entreprises visant l'excellence opérationnelle et la certification officielle.",
      features: ["Intégralité du Pack Performance", "Accompagnement continu jusqu'à l'audit de certification", "Assistance active lors de l'audit externe", "Traitement des écarts & plan d'amélioration à long terme", "Coaching de la Direction générale"]
    }
  ];

  const questions = [
    {
      id: 1,
      text: "Votre entreprise dispose-t-elle de processus formalisés par écrit ?",
      options: [
        { score: 1, label: "Non, tout repose sur l'expérience orale et les habitudes." },
        { score: 2, label: "Oui, mais ils ne sont pas toujours mis à jour ni partagés." },
        { score: 3, label: "Oui, ils sont clairs, documentés et compris par tout le monde." }
      ]
    },
    {
      id: 2,
      text: "Comment analysez-vous et suivez-vous les réclamations clients ?",
      options: [
        { score: 1, label: "On gère au cas par cas, sans enregistrement ni analyse globale." },
        { score: 2, label: "On note les réclamations, mais on cherche rarement les causes profondes." },
        { score: 3, label: "Nous avons un processus strict avec des indicateurs et un plan d'action correctif." }
      ]
    },
    {
      id: 3,
      text: "Avez-vous déjà réalisé des audits internes pour évaluer vos processus ?",
      options: [
        { score: 1, label: "Jamais, nous ne savons pas vraiment comment faire." },
        { score: 2, label: "On a fait des contrôles rapides, mais sans méthodologie structurée." },
        { score: 3, label: "Oui, un plan d'audit annuel est suivi et documenté." }
      ]
    },
    {
      id: 4,
      text: "Quel est votre objectif principal à court terme ?",
      options: [
        { score: 1, label: "Comprendre les bases et apprendre à poser des fondations saines." },
        { score: 2, label: "Améliorer nos outils internes, structurer notre documentation." },
        { score: 3, label: "Obtenir ou préparer une certification officielle ISO 9001." }
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
        "Maturité : Fondations (Débutant). Nous vous recommandons notre **Formule Formation Découverte** ou notre **Pack Express d'accompagnement** pour poser les premières briques de votre SMQ."
      );
    } else if (totalScore <= 9) {
      setQuizResult(
        "Maturité : En cours de structuration. Notre **Formule Formation Expert** ou notre **Pack Performance** conviendra parfaitement pour consolider vos processus, former vos pilotes et optimiser la documentation."
      );
    } else {
      setQuizResult(
        "Maturité : Avancée. Nous vous conseillons notre **Formule Formation Auditeur Interne** afin de maintenir votre dynamique de progrès, ou notre **Pack Excellence** pour décrocher en toute sérénité votre certification ISO 9001 !"
      );
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizResult(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10" id="service-quality-view">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Breadcrumb & Intro Banner */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-100 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-20 -mt-20 -z-0 opacity-40 blur-2xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#2A9F8E] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4" />
              Management d'Excellence
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Qualité & Performance Système
            </h1>
            <p className="text-[#2A9F8E] font-medium text-lg md:text-xl mt-3">
              Mise en conformité, structuration SMQ et certification ISO 9001
            </p>

            <div className="border-t border-slate-100 my-8" />

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-slate-800 mb-3">Notre Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Pour ConforMind, la conformité n'est pas une simple contrainte administrative, mais un puissant levier stratégique de croissance et d'efficience opérationnelle. Nous marions une expertise rigoureuse des normes internationales (comme l'ISO 9001:2015) avec une intégration pragmatique adaptée aux réalités du tissu économique malgache.
                </p>
                <div className="flex flex-wrap gap-2">
                  {standards.map((st, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-200">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-[#E7F5F2] rounded-2xl p-6 border border-emerald-100/50 flex flex-col justify-between">
                <div>
                  <h4 className="text-[#2A9F8E] font-bold text-sm uppercase tracking-wide mb-2">Pourquoi S'engager ?</h4>
                  <ul className="space-y-2.5 text-slate-700 text-xs font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Améliorer la satisfaction clients
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Réduire les non-conformités et rebuts
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Ouvrir l'accès aux marchés export
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-200/40 text-xs text-slate-500 italic">
                  "Une norme bien comprise est génératrice de profits."
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
              Diagnostic d'Éligibilité (Interactif)
            </button>
          </div>
        </div>

        {/* Tab Contents: FORMANTS */}
        {activeTab === "formations" && (
          <div className="space-y-8 animate-fade-in" id="quality-formations">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Nos Formules de Formation Qualité</h2>
              <p className="text-slate-500 text-sm mt-1">Des apprentissages basés sur des ateliers terrains, certifiés par des formateurs d'expérience.</p>
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
                        <Users className="w-3.5 h-3.5" /> Public Cible
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
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Vos acquis</h4>
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
                      className="w-full flex items-center justify-center gap-2 bg-slate-950 hover:bg-emerald-700 text-white rounded-xl py-2.5 text-xs font-semibold tracking-wide transition-colors duration-200"
                    >
                      S'inscrire à ce module
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Note on Promos in document */}
            <div className="bg-gradient-to-r from-emerald-50 to-[#E7F5F2] border border-emerald-100 rounded-2xl p-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl text-[#2A9F8E] shadow-sm shrink-0">
                  <Bookmark className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">Promo Spéciale Salon & Entreprise!</h4>
                  <p className="text-slate-600 text-xs leading-relaxed max-w-xl">
                    Profitez de <strong className="text-emerald-700">10% de réduction</strong> dès 3 participants de la même entité, et <strong className="text-emerald-700">15% de réduction</strong> dès 5 inscrits. Nous remettons un certificat officiel de participation.
                  </p>
                </div>
              </div>
              <div className="font-mono text-sm font-semibold text-slate-700 px-4 py-2 bg-white rounded-xl border border-emerald-100 shadow-sm shrink-0 text-center">
                Tarif découverte : 150 000 Ar / jour
              </div>
            </div>
          </div>
        )}

        {/* Tab Contents: ACCOMPAGNEMENT PACKS */}
        {activeTab === "accompagnement" && (
          <div className="space-y-8 animate-fade-in" id="quality-packs">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Packs d'Accompagnement Sur Mesure</h2>
              <p className="text-slate-500 text-sm mt-1">Un déploiement de proximité pour assurer la pérennité de vos systèmes de management.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {genericPacks.map((pk, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/85 shadow-[0_12px_35px_rgba(15,23,42,0.03)] hover:border-[#2A9F8E]/45 hover:shadow-[0_22px_45px_rgba(42,159,142,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{pk.name}</h3>
                    <div className="flex items-center gap-2 mt-1 mb-4">
                      <span className="text-xs bg-emerald-50 text-[#2A9F8E] px-2 py-0.5 rounded font-semibold">{pk.duration}</span>
                      <span className="text-xs text-slate-400 font-medium">Temps estimé</span>
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
                      Demander un audit diagnostic initial gratuit
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Contents: DIAGNOSTIC (Interactive) */}
        {activeTab === "diagnostic" && (
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.06),_0_0_40px_rgba(42,159,142,0.03)] border border-slate-100 max-w-3xl mx-auto animate-fade-in" id="quality-quiz">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Test d'Éligibilité & Maturité Qualité</h2>
              <p className="text-slate-500 text-sm mt-1">
                Calculez votre maturité opérationnelle en 4 étapes et découvrez le parcours optimal d'accompagnement.
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
                  Calculer mon Score de Maturité
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-emerald-50 to-[#E7F5F2] rounded-2xl p-6 md:p-8 text-center border border-emerald-100">
                <CheckCircle2 className="w-12 h-12 text-[#2A9F8E] mx-auto mb-4" />
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Résultat du Diagnostic</h3>
                
                <p 
                  className="text-slate-800 text-sm leading-relaxed mb-6 bg-white p-4 rounded-xl border border-emerald-100 inline-block text-left"
                  dangerouslySetInnerHTML={{ __html: quizResult.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />

                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  <button
                    onClick={handleResetQuiz}
                    className="py-2.5 px-4 bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 rounded-lg text-xs font-semibold transition-colors duration-150"
                  >
                    Recommencer le test
                  </button>
                  <a
                    href="#contact-section"
                    className="py-2.5 px-4 bg-[#2A9F8E] hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors duration-150 flex items-center justify-center gap-1"
                  >
                    Prendre contact
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