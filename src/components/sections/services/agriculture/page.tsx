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
  Sprout,
  Users2
} from "lucide-react";

export default function OrganicAgriculture() {
  const [activeTab, setActiveTab] = useState<"formations" | "accompagnement" | "diagnostic">("formations");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const standards = ["Certification BIO (UE / NOP / JAS / NATURLAND)", "UEBT : Sourcing with respect", "Système de Contrôle Interne (SCI)", "Bonnes Pratiques Agricoles (BPA)"];

  const courses = [
    {
      level: "Formule Découverte",
      duration: "1 Jour",
      price: "150 000 Ar / participant",
      badge: "Fondements BIO",
      audience: ["Chefs de groupements", "Investisseurs agricoles", "Ingénieurs agronomes", "Étudiants"],
      topics: [
        "Principes et exigences fondamentales de l'agriculture biologique (UE, NOP, JAS)",
        "UEBT (Union for Ethical BioTrade) : principes clés de sourcing éthique et équitable",
        "Sensibilisation aux principes de lutte biologique et compostage moderne",
        "Bonnes Pratiques Agricoles et d'Hygiène de récolte (BPA)"
      ],
      benefits: [
        "Comprendre le cahier des charges de l'agriculture biologique",
        "Distinguer les différents marchés internationaux et exigences",
        "Certificat de participation nominatif remis"
      ]
    },
    {
      level: "Formule Expert",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Structuration Coopératives",
      audience: ["Responsables de coopératives", "Futurs inspecteurs internes", "Animateurs de filières", "Consultants"],
      topics: [
        "Conception et mise en place d'un Système de Contrôle Interne (SCI) requis pour les groupes",
        "Préparation concrète à la certification BIO et gestion documentaire associée",
        "UEBT : mise en œuvre pratique dans les chaînes d'approvisionnement",
        "Techniques d'adaptation au changement climatique et de restauration de la biodiversité"
      ],
      benefits: [
        "Savoir piloter un réseau de producteurs de manière rigoureuse",
        "Canevas types de documents de SCI et de fiches producteurs fournis",
        "Études de cas réels de filières malgaches (vanille, huiles essentielles, épices)"
      ]
    },
    {
      level: "Formule Auditeur Interne",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Contrôle Interne",
      audience: ["Inspecteurs internes de SCI", "Cadres de coopératives", "Directeurs QHSE"],
      topics: [
        "Méthodologie d'inspection interne des parcelles agricoles",
        "Détecter les dérives (utilisation d'intrants proscrits, dérive de voisinage)",
        "Gestion des non-conformités des producteurs et retrait du groupe",
        "Rédaction de rapports d'inspection clairs pour l'organisme certificateur"
      ],
      benefits: [
        "Autonomie totale de contrôle au sein de votre coopérative",
        "Grilles d'inspection terrain éprouvées",
        "Mises en situation sous forme de jeux de rôle"
      ]
    }
  ];

  const genericPacks = [
    {
      name: "Pack Express",
      duration: "3 à 6 mois",
      price: "À partir de 10 000 000 Ar",
      targets: "Petits exploitants ou coopératives émergentes souhaitant formaliser leurs pratiques de base.",
      features: ["Diagnostic initial de fertilité et potentiel BIO", "Mise en place des Bonnes Pratiques Agricoles (BPA)", "Formation des producteurs aux alternatives d'intrants chimiques", "Création des premières fiches parcelles", "Préparation à l'audit blanc"]
    },
    {
      name: "Pack Performance",
      duration: "6 à 9 mois",
      price: "À partir de 15 000 000 Ar",
      targets: "Coopératives structurées visant l'exportation réglementaire vers l'Europe (BIO UE).",
      features: ["Intégralité du Pack Express", "Conception complète du Système de Contrôle Interne (SCI)", "Formation et habilitation des inspecteurs internes de la coopérative", "Cartographie GPS des parcelles", "Accompagnement lors du premier audit officiel par l'organisme agréé"]
    },
    {
      name: "Pack Excellence",
      duration: "9 à 12 mois",
      price: "À partir de 20 000 000 Ar",
      targets: "Filières d'excellence ciblant la multi-certification (BIO, NOP, JAS, NATURLAND, UEBT).",
      features: ["Intégralité du Pack Performance", "Intégration des requis UEBT (Biodiversité, Juste rémunération)", "Mise en place de plans de préservation et d'adaptation climatique", "Gestion complète des relations de certification internationales", "Assistance terrain pendant tous les audits externes"]
    }
  ];

  const questions = [
    {
      id: 1,
      text: "Quel est le statut actuel d'utilisation d'engrais chimiques ou de pesticides sur vos parcelles ?",
      options: [
        { score: 1, label: "Utilisation régulière ou occasionnelle d'engrais/pesticides chimiques." },
        { score: 2, label: "Pratiques traditionnelles (sans chimie), mais sans traçabilité ni gestion de dérives." },
        { score: 3, label: "Zéro intrant chimique, compostage biologique et traitement naturel maîtrisé." }
      ]
    },
    {
      id: 2,
      text: "Pour les ventes groupées, disposez-vous d'un Système de Contrôle Interne (SCI) actif ?",
      options: [
        { score: 1, label: "Non, nous ne connaissons pas le principe du SCI." },
        { score: 2, label: "Nous avons recensé les producteurs, mais nous ne réalisons pas d'inspections internes écrites." },
        { score: 3, label: "Oui, un SCI est structuré avec des contrats, un inspecteur interne et des rapports annuels." }
      ]
    },
    {
      id: 3,
      text: "Comment gérez-vous le risque de contamination croisée par des voisins non biologiques ?",
      options: [
        { score: 1, label: "Aucune précaution spécifique, nous ne connaissons pas leurs pratiques." },
        { score: 2, label: "Le risque est identifié, mais sans délimitation stricte ni zones tampons." },
        { score: 3, label: "Mise en place de haies de protection, zones tampons de récolte et chartes de voisinage." }
      ]
    },
    {
      id: 4,
      text: "Quel est votre but d'exportation ou de valorisation de votre filière ?",
      options: [
        { score: 1, label: "Améliorer le rendement et préserver la fertilité naturelle de notre sol malgache." },
        { score: 2, label: "Obtenir le label BIO pour valoriser nos produits sur le marché national d'excellence." },
        { score: 3, label: "Accéder à l'exportation officielle (Europe, USA, Japon) avec une forte valeur ajoutée." }
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
        "Maturité : Pratiques Conventionnelles. Vos parcelles nécessitent d'abord une phase de transition. Nous vous suggérons notre **Formule Formation Découverte (BPA & Fondements BIO)** ou notre **Pack Express** afin d'amorcer sereinement votre conversion vers le biologique."
      );
    } else if (totalScore <= 9) {
      setQuizResult(
        "Maturité : Naturel non Structuré. Vos cultures n'utilisent aucun produit chimique, mais l'absence de traçabilité, de SCI et de contrats producteurs bloque l'obtention du certificat export. Notre **Formule Formation Expert (SCI & Préparation BIO)** ou notre **Pack Performance** conviendra parfaitement pour structurer votre groupe."
      );
    } else {
      setQuizResult(
        "Maturité : Prêt à l'Audit (Avancé). Vos filières de contrôle interne sont excellentes. Pour maintenir vos habilitations et certifier de nouveaux contrôleurs, formez-les avec notre **Formule Auditeur (SCI)**, ou optez pour notre **Pack Excellence** pour cibler des certifications complexes comme l'UEBT ou NATURLAND."
      );
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizResult(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10" id="service-organic-view">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Breadcrumb & Intro Banner */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-100 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-20 -mt-20 -z-0 opacity-40 blur-2xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#2A9F8E] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Sprout className="w-4 h-4" />
              Valorisation des Filières Rurales
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Agriculture Biologique & Durable
            </h1>
            <p className="text-[#2A9F8E] font-medium text-lg md:text-xl mt-3">
              Conversion BIO internationale, audits de groupements (SCI) et éthique d'approvisionnement (UEBT)
            </p>

            <div className="border-t border-slate-100 my-8" />

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-slate-800 mb-3">Valoriser le Terroir Malgache sur les Marchés Internationaux</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Madagascar possède un potentiel d'excellence agricole unique (cacao, vanille, poivres, plantes médicinales, huiles essentielles). ConforMind Consulting accompagne durablement les coopératives, exportateurs et structures agricoles vers l'agriculture biologique et l'Ethical BioTrade. Nous construisons à vos côtés des Systèmes de Contrôle Interne (SCI) robustes, clés indispensables de la certification groupée.
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
                  <h4 className="text-[#2A9F8E] font-bold text-sm uppercase tracking-wide mb-2">Engager Nos Équipes</h4>
                  <ul className="space-y-2 text-slate-700 text-xs font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Savoir structurer un SCI de groupe
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Transition BIO UE / NOP / JAS
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Sourcing UEBT éco-responsable
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-200/40 text-xs text-slate-500 italic">
                  "Soutenir durablement le renforcement des filières rurales."
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
              Diagnostic BIO & SCI (Interactif)
            </button>
          </div>
        </div>

        {/* Tab Contents: FORMATIONS */}
        {activeTab === "formations" && (
          <div className="space-y-8 animate-fade-in" id="organic-formations">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Nos Formations d'Agriculture Durable</h2>
              <p className="text-slate-500 text-sm mt-1">Donnez à vos cadres de coopératives et animateurs ruraux les outils clés requis par les certificateurs.</p>
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
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Avantages</h4>
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
          <div className="space-y-8 animate-fade-in" id="organic-packs">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Nos Packs d'Accompagnement Rural</h2>
              <p className="text-slate-500 text-sm mt-1">De la transition culturale jusqu'aux audits de certification d'organisations paysannes à Madagascar.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {genericPacks.map((pk, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/85 shadow-[0_12px_35px_rgba(15,23,42,0.03)] hover:border-[#2A9F8E]/45 hover:shadow-[0_22px_45px_rgba(42,159,142,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{pk.name}</h3>
                    <div className="flex items-center gap-2 mt-1 mb-4">
                      <span className="text-xs bg-emerald-50 text-[#2A9F8E] px-2 py-0.5 rounded font-semibold">{pk.duration}</span>
                      <span className="text-xs text-slate-400 font-medium">Temps moyen</span>
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
                      Demander une évaluation technique initiale
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Contents: DIAGNOSTIC (Interactive) */}
        {activeTab === "diagnostic" && (
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.06),_0_0_40px_rgba(42,159,142,0.03)] border border-slate-100 max-w-3xl mx-auto animate-fade-in" id="organic-quiz">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Calculateur d'Éligibilité Certification BIO</h2>
              <p className="text-slate-500 text-sm mt-1">
                Calculez le niveau de conformité de votre groupement de producteurs et préparez les audits de conversion.
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
                  Calculer notre aptitude BIO & SCI
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-emerald-50 to-[#E7F5F2] rounded-2xl p-6 md:p-8 text-center border border-emerald-100">
                <CheckCircle2 className="w-12 h-12 text-[#2A9F8E] mx-auto mb-4" />
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Recommandation Spéciale Filière</h3>
                
                <p 
                  className="text-slate-800 text-sm leading-relaxed mb-6 bg-white p-4 rounded-xl border border-emerald-100 inline-block text-left"
                  dangerouslySetInnerHTML={{ __html: quizResult.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />

                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  <button
                    onClick={handleResetQuiz}
                    className="py-2.5 px-4 bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 rounded-lg text-xs font-semibold transition-colors duration-150"
                  >
                    Corriger le diagnostic
                  </button>
                  <a
                    href="#contact-section"
                    className="py-2.5 px-4 bg-[#2A9F8E] hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors duration-150 flex items-center justify-center gap-1"
                  >
                    Demander l'Audit
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