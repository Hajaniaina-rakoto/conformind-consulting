"use client";
import React, { useState } from "react";
import { 
  Utensils, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Check, 
  ShieldAlert,
  ClipboardCheck,
  Calendar,
  Layers,
  Sparkles
} from "lucide-react";

export default function FoodSafety() {
  const [activeTab, setActiveTab] = useState<"formations" | "accompagnement" | "diagnostic">("formations");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const standards = ["HACCP", "ISO 22000 : 2018", "FSSC 22000", "IFS Food", "BRC Food", "RA UEBT"];

  const courses = [
    {
      level: "Formule Découverte",
      duration: "1 Jour",
      price: "150 000 Ar / participant",
      badge: "Indispensable Hygiène",
      audience: ["Dirigeants d'unités", "Responsables de production", "Opérateurs agro", "Étudiants"],
      topics: [
        "Initiation pratique à la méthodologie HACCP",
        "Introduction simplifiée au référentiel ISO 22000",
        "Bonnes Pratiques d'Hygiène (BPH) & de Fabrication (BPF)",
        "Culture Food Safety : sensibilisation terrain",
        "Gestion basique de la traçabilité et des allergènes"
      ],
      benefits: [
        "Savoir réagir en cas de risque sanitaire standard",
        "Acquérir les réflexes d'hygiène imposés par la loi",
        "Certificat nominatif remis en fin de journée"
      ]
    },
    {
      level: "Formule Expert",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Devenir Responsable",
      audience: ["Responsables Qualité", "Responsables Production", "Coordonneurs HACCP", "Ingénieurs agro"],
      topics: [
        "Maîtriser la méthode HACCP (les 12 étapes et 7 principes)",
        "Interprétation fine de la norme ISO 22000:2018",
        "Construction des plans de Food Defense (Défense alimentaire contre l'acte malveillant)",
        "Analyse de vulnérabilité face à la fraude alimentaire (Food Fraud)",
        "Analyse de risques avancée et gestion des allergènes"
      ],
      benefits: [
        "Capacité à construire et réviser un plan HACCP robuste",
        "Modèles d'analyse de vulnérabilité fournis",
        "Outils directes de traçabilité opérationnelle"
      ]
    },
    {
      level: "Formule Auditeur Interne",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Maîtrise des Inspections",
      audience: ["Auditeurs internes", "Responsables QHSE", "Évaluateurs Agro"],
      topics: [
        "Planifier et réaliser un audit de sécurité des aliments",
        "Valider et vérifier l'efficacité des mesures de contrôle (PRP / PRPo)",
        "Collecte objective d'indices et gestion documentaire",
        "Rédaction de plans d'action correctifs opérationnels"
      ],
      benefits: [
        "Simulations d'audits basées sur des cas réels de l'industrie",
        "Grilles d'audit de sécurité sanitaire prêtes à l'emploi",
        "Focus sur l'amélioration de la Culture Food Safety"
      ]
    }
  ];

  const genericPacks = [
    {
      name: "Pack Express",
      duration: "3 à 6 mois",
      price: "À partir de 10 000 000 Ar",
      targets: "Petits ateliers agroalimentaires souhaitant acquérir un agrément sanitaire.",
      features: ["Diagnostic initial des locaux et flux", "Mise en place des BPH/BPF", "Création du plan HACCP basique", "Plan de nettoyage & désinfection", "Formation hygiène des opérateurs"]
    },
    {
      name: "Pack Performance",
      duration: "6 à 9 mois",
      price: "À partir de 15 000 000 Ar",
      targets: "PME et exportateurs visant la mise en conformité ISO 22000.",
      features: ["Intégralité du Pack Express", "Plan de traçabilité amont/aval et retraits de lots", "Évaluation complète des risques d'allergènes et de contamination croisée", "Dossier d'agrément sanitaire complet", "Coaching de l'équipe de sécurité des aliments"]
    },
    {
      name: "Pack Excellence",
      duration: "9 à 12 mois",
      price: "À partir de 20 000 000 Ar",
      targets: "Grandes industries soumises à de strictes exigences export (FSSC 22000, BRC ou IFS).",
      features: ["Intégralité du Pack Performance", "Accompagnement continu jusqu'à la certification", "Mise en place d'un programme Food Defense et Food Fraud (Vulnerability Assessment)", "Simulations de crises et retraits de produits", "Présence physique lors de l'audit externe"]
    }
  ];

  const questions = [
    {
      id: 1,
      text: "Quelles sont les méthodes de traçabilité en place dans votre structure ?",
      options: [
        { score: 1, label: "Principalement orales ou consignées de manière anarchique." },
        { score: 2, label: "Fiches papier d'enregistrement par lot, mais avec des failles en cours de route." },
        { score: 3, label: "Système de traçabilité informatisé ou papier infaillible de la matière première au client final." }
      ]
    },
    {
      id: 2,
      text: "Comment sont gérées les Bonnes Pratiques d'Hygiène (tenue, lavage des mains...) ?",
      options: [
        { score: 1, label: "Règles informelles, pas d'équipement d'hygiène systématique." },
        { score: 2, label: "Affichées sur le terrain, mais les dérives sont courantes sans contrôle rigide." },
        { score: 3, label: "Équipements complets, sas de nettoyage stricts et contrôles microbologiques réguliers." }
      ]
    },
    {
      id: 3,
      text: "Disposez-vous d'une étude HACCP documentée et révisée régulièrement ?",
      options: [
        { score: 1, label: "Non, nous ne savons pas définir un CCP (Critical Control Point)." },
        { score: 2, label: "Oui, un plan existe, mais il n'a pas été révisé depuis longtemps." },
        { score: 3, label: "Oui, l'étude HACCP est vivante, pilotée par une équipe certifiée et à jour." }
      ]
    },
    {
      id: 4,
      text: "Face au risque d'allergènes ou de contamination croisée :",
      options: [
        { score: 1, label: "Aucune gestion spécifique n'est établie." },
        { score: 2, label: "Le risque est identifié, mais sans séparation physique absolue." },
        { score: 3, label: "Ségrégation stricte, étiquetage clair et plan de prévention validé." }
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
        "Maturité : Risque Sanitaire Élevé (Débutant). Nous vous préconisons d'urgence de former vos équipes avec notre **Formule Formation Découverte** (Initiation HACCP et BPH) ou de souscrire au **Pack Express** afin de sécuriser votre outil de production et éviter tout incident."
      );
    } else if (totalScore <= 9) {
      setQuizResult(
        "Maturité : Niveau Intermédiaire. Votre structure maîtrise les bases mais présente des zones de friction (traçabilité imparfaite, CCP peu surveillés). Notre **Formule Formation Expert (HACCP avancé)** ou notre **Pack Performance** vous aidera à bâtir une organisation résiliente de confiance."
      );
    } else {
      setQuizResult(
        "Maturité : Excellente. Vos fondations sont solides ! Afin de pérenniser cet état de l'art et préparer l'exportation, formez un auditeur interne avec notre **Formule Auditeur** ou optez pour notre **Pack Excellence** vers la certification FSSC 22000 ou BRC."
      );
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizResult(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10" id="service-foodsafety-view">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Breadcrumb & Intro Banner */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-100 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full -mr-20 -mt-20 -z-0 opacity-40 blur-2xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-[#2A9F8E] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Utensils className="w-4 h-4" />
              Agrément & Sécurité Agroalimentaire
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Food Safety
            </h1>
            <p className="text-[#2A9F8E] font-medium text-lg md:text-xl mt-3">
              Qualité et conformité des produits, de la terre à la table
            </p>

            <div className="border-t border-slate-100 my-8" />

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-slate-800 mb-3">La Sécurité Alimentaire, Clé de Voûte de l'Export</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dans le secteur agroalimentaire, la sécurité sanitaire n'est pas négociable. Qu'il s'agisse de récolte, de transformation ou de logistique d'exportation vers l'Europe, les États-Unis ou l'océan Indien, nous vous apprenons à évaluer, maîtriser et éradiquer les dangers biologiques, chimiques et physiques à l'aide des meilleurs standards mondiaux.
                </p>
                <div className="flex flex-wrap gap-2">
                  {standards.map((st, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-200">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#E7F5F2] to-teal-100/30 rounded-2xl p-6 border border-teal-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-[#2A9F8E] font-bold text-sm uppercase tracking-wide mb-2">Notre Expertise</h4>
                  <ul className="space-y-2 text-slate-700 text-xs font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Formateurs certifiés Lead Auditor
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Solutions HACCP pragmatiques
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Audit de vulnérabilité fraude/défense
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-teal-200/40 text-xs text-slate-500 italic">
                  "Exigence maximale pour une confiance client durable."
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
              Diagnostic HACCP (Interactif)
            </button>
          </div>
        </div>

        {/* Tab Contents: FORMATIONS */}
        {activeTab === "formations" && (
          <div className="space-y-8 animate-fade-in" id="food-formations">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Nos Formules de Formation en Sécurité Alimentaire</h2>
              <p className="text-slate-500 text-sm mt-1">Conformez vos ateliers aux normes locales d'hygiène et préparez l'excellence de certification.</p>
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
                        <Users className="w-3.5 h-3.5" /> Public Target
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
            
            <div className="bg-gradient-to-r from-emerald-50 to-[#E7F5F2] border border-emerald-100 rounded-2xl p-6 mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl text-[#2A9F8E] shadow-sm shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">Tarifs préférentiels pour groupements agricoles</h4>
                  <p className="text-slate-600 text-xs leading-relaxed max-w-xl">
                    Nous croyons en un accompagnement inclusif. Les coopératives rurales et les petites filières de production biologique bénéficient de grilles de tarifs adaptées. Parlez-en à nos experts !
                  </p>
                </div>
              </div>
              <div className="font-mono text-sm font-semibold text-slate-700 px-4 py-2 bg-white rounded-xl border border-emerald-100 shadow-sm shrink-0 text-center">
                Spécial export Madagascar
              </div>
            </div>
          </div>
        )}

        {/* Tab Contents: ACCOMPAGNEMENT PACKS */}
        {activeTab === "accompagnement" && (
          <div className="space-y-8 animate-fade-in" id="food-packs">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Nos Solutions d'Accompagnement Agro</h2>
              <p className="text-slate-500 text-sm mt-1">Conformez vos installations physiques aux directives nationales et préparez les certifications les plus prestigieuses.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {genericPacks.map((pk, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/85 shadow-[0_12px_35px_rgba(15,23,42,0.03)] hover:border-[#2A9F8E]/45 hover:shadow-[0_22px_45px_rgba(42,159,142,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{pk.name}</h3>
                    <div className="flex items-center gap-2 mt-1 mb-4">
                      <span className="text-xs bg-emerald-50 text-[#2A9F8E] px-2 py-0.5 rounded font-semibold">{pk.duration}</span>
                      <span className="text-xs text-slate-400 font-medium">Durée estimée</span>
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
                      Demander un diagnostic hygiène de départ gratuit
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Contents: DIAGNOSTIC (Interactive) */}
        {activeTab === "diagnostic" && (
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.06),_0_0_40px_rgba(42,159,142,0.03)] border border-slate-100 max-w-3xl mx-auto animate-fade-in" id="foodsafety-quiz">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Évaluation HACCP & Hygiène terrain</h2>
              <p className="text-slate-500 text-sm mt-1">
                Mesurez le risque de non-conformité sanitaire de vos ateliers selon les bases HACCP de sécurité alimentaire.
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
                  Analyser mon statut de sécurité sanitaire
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-emerald-50 to-[#E7F5F2] rounded-2xl p-6 md:p-8 text-center border border-emerald-100">
                <CheckCircle2 className="w-12 h-12 text-[#2A9F8E] mx-auto mb-4" />
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Reconstitution du Diagnostic</h3>
                
                <p 
                  className="text-slate-800 text-sm leading-relaxed mb-6 bg-white p-4 rounded-xl border border-emerald-100 inline-block text-left"
                  dangerouslySetInnerHTML={{ __html: quizResult.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />

                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  <button
                    onClick={handleResetQuiz}
                    className="py-2.5 px-4 bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 rounded-lg text-xs font-semibold transition-colors duration-150"
                  >
                    Réinitialiser l'analyse
                  </button>
                  <a
                    href="#contact-section"
                    className="py-2.5 px-4 bg-[#2A9F8E] hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors duration-150 flex items-center justify-center gap-1"
                  >
                    Obtenir un Devis
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