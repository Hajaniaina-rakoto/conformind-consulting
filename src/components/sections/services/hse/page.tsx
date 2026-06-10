"use client";
import React, { useState } from "react";
import { 
  Shield, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Clock, 
  Users, 
  Check, 
  ShieldAlert,
  ClipboardCheck,
  Calendar,
  Activity,
  UserCheck
} from "lucide-react";

export default function Hse() {
  const [activeTab, setActiveTab] = useState<"formations" | "accompagnement" | "diagnostic">("formations");
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const standards = ["ISO 45001", "SST (Santé & Sécurité au Travail)", "Prévention des Risques", "Arbre des Causes", "HSE Opérationnel"];

  const courses = [
    {
      level: "Formule Découverte",
      duration: "1 Jour",
      price: "150 000 Ar / participant",
      badge: "Indispensable SST",
      audience: ["Membres du CSE", "Équipiers de première intervention", "Responsables RH", "Étudiants"],
      topics: [
        "Introduction simplifiée au référentiel ISO 45001",
        "Sensibilisation active SST (Sauveteur Secouriste du Travail)",
        "Les fondamentaux de l'analyse des risques professionnels",
        "Gestion pratique des situations d'urgence (incendies, évacuation)"
      ],
      benefits: [
        "Savoir réagir vite et bien en cas d'accident sur site",
        "Identifier immédiatement un comportement dangereux",
        "Certificat nominatif de secourisme de base"
      ]
    },
    {
      level: "Formule Expert",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Devenir Responsable HSE",
      audience: ["Responsables HSE", "Directeurs d'usine", "Médecins du travail", "Ingénieurs de maintenance"],
      topics: [
        "Interprétation pas-à-pas de l'ISO 45001 (Santé et Securité au Travail)",
        "Méthodologie d'analyse des accidents du travail (Arbre des Causes)",
        "Management et Leadership HSE : fédérer les équipes",
        "Prévention technique des maladies professionnelles et troubles musculo-squelettiques (TMS)"
      ],
      benefits: [
        "Capacité à piloter le Document Unique d'Évaluation des Risques",
        "Modèles d'analyse des causes fondamentales d'accidents",
        "Compétences pour animer des causeries sécurité au quotidien"
      ]
    },
    {
      level: "Formule Auditeur Interne",
      duration: "2 Jours",
      price: "350 000 Ar / participant",
      badge: "Conformité Légale",
      audience: ["Auditeurs internes", "Responsables QHSE", "Évaluateurs légaux"],
      topics: [
        "Planification et exécution d'audits internes de conformité HSE sur site",
        "Examen des registres obligatoires et contrôle des équipements (EPI/EPC)",
        "Construction de check-lists réglementaires",
        "Suivi et validation définitive des actions correctives de sécurité"
      ],
      benefits: [
        "Savoir réaliser une ronde sécurité constructive et respectée",
        "Check-lists d'audit thématiques prêtes à l'emploi",
        "Simulation interactive d'audit blanc"
      ]
    }
  ];

  const genericPacks = [
    {
      name: "Pack Express",
      duration: "3 à 6 mois",
      price: "À partir de 10 000 000 Ar",
      targets: "PME et ateliers désireux de réduire d'urgence le taux d'accidents de travail.",
      features: ["Évaluation de conformité réglementaire", "Document Unique d'Évaluation des Risques (DUER)", "Plan d'affichage de sécurité obligatoire", "Sensibilisation SST de base pour 5 personnes", "Plan d'évacuation d'urgence standard"]
    },
    {
      name: "Pack Performance",
      duration: "6 à 9 mois",
      price: "À partir de 15 000 000 Ar",
      targets: "Industries de production souhaitant ancrer une solide culture de prévention.",
      features: ["Intégralité du Pack Express", "Mise en place d'un système de causeries hebdomadaires", "Procédure approfondie d'analyse post-accident", "Suivi des Troubles Musculo-Squelettiques", "Formation certifiée SST pour l'ensemble des cadres de terrain"]
    },
    {
      name: "Pack Excellence",
      duration: "9 à 12 mois",
      price: "À partir de 20 000 000 Ar",
      targets: "Grandes entreprises ou chantiers à haut risque visant l'alignement ISO 45001.",
      features: ["Intégralité du Pack Performance", "Accompagnement continu vers la certification ISO 45001", "Audit à blanc approfondi", "Simulations d'accidents majeurs & réponse coordonnée", "Intégration du CSE aux décisions stratégiques HSE"]
    }
  ];

  const questions = [
    {
      id: 1,
      text: "Votre entreprise dispose-t-elle d'une liste écrite décrivant les risques professionnels par poste ?",
      options: [
        { score: 1, label: "Non, nous n'en avons jamais formalisé par écrit." },
        { score: 2, label: "Le document existe (DUER basique), mais il n'est presque jamais relu ni mis à jour." },
        { score: 3, label: "Oui, nous avons une cartographie dynamique des risques, actualisée chaque année." }
      ]
    },
    {
      id: 2,
      text: "Comment sont gérés les Équipements de Protection Individuelle (EPI : casques, chaussures, gants) ?",
      options: [
        { score: 1, label: "Les ouvriers s'équipent de manière aléatoire, pas de politique d'obligation." },
        { score: 2, label: "Nous distribuons des EPI, mais nous contrôlons rarement s'ils sont portés correctement." },
        { score: 3, label: "Distribution systématique, registre rigoureux des dotations et contrôles quotidiens." }
      ]
    },
    {
      id: 3,
      text: "Combien d'employés sont formés aux gestes de secourisme d'urgence (SST) dans vos locaux ?",
      options: [
        { score: 1, label: "Aucun employé n'est réellement formé au secourisme." },
        { score: 2, label: "Seule une ou deux personnes de l'administration disposent d'anciennes notions." },
        { score: 3, label: "Plus de 15% de nos effectifs terrain sont sauveteurs-secouristes certifiés actifs." }
      ]
    },
    {
      id: 4,
      text: "Comment analysez-vous un accident de travail lorsqu'il survient ?",
      options: [
        { score: 1, label: "On soigne le blessé, et l'activité reprend le plus vite possible sans étude." },
        { score: 2, label: "On note l'accident dans un cahier, de manière basique." },
        { score: 3, label: "Analyse systématique via l'Arbre des Causes en comité CSE pour éviter toute récidive." }
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
        "Maturité : Statut Critique. La sécurité de vos employés et votre responsabilité juridique de gérant sont engagées ! Optez d'urgence pour notre **Formule Formation Découverte (Secourisme & Incendies)** ou engagez un **Pack Express** afin d'établir de toute urgence votre Document Unique d'Évaluation des Risques."
      );
    } else if (totalScore <= 9) {
      setQuizResult(
        "Maturité : Risques Modérés. Vous possédez de bonnes intentions et quelques équipements, mais le manque de procédures d'analyse post-accident ou le port indiscipliné des EPI compromet vos efforts. La **Formule Formation Expert (Arbre des causes et Leadership HSE)** ou notre **Pack Performance** stabilisera votre posture de chef de file."
      );
    } else {
      setQuizResult(
        "Maturité : Excellente Prévention. Vos équipes travaillent dans un cadre hautement encadré ! Pour aller plus loin ou asseoir une dynamique de certification ISO 45001, nous recommandons notre **Formule Auditeur Interne** d'évaluation systématique ou le **Pack Excellence**."
      );
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setQuizResult(null);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10" id="service-hse-view">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Breadcrumb & Intro Banner */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-100 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -mr-20 -mt-20 -z-0 opacity-40 blur-2xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-red-50 text-[#2A9F8E] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Shield className="w-4 h-4" />
              Protection de l'Humain au Travail
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-none">
              Hygiène, Santé & Sécurité (HSE)
            </h1>
            <p className="text-[#2A9F8E] font-medium text-lg md:text-xl mt-3">
              Zéro accident, conformité réglementaire et structuration de la culture prévention (ISO 45001)
            </p>

            <div className="border-t border-slate-100 my-8" />

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold text-slate-800 mb-3">La Sécurité au Travail : un Devoir Humain, une Assurance Économique</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Un accident est un drame humain, doublé d'une désorganisation industrielle coûteuse. En associant formation SST réactive des cadres, analyses poussées d'incidents (Arbres des Causes) et rondes d'audits de conformité physique, ConforMind aide vos équipes à progresser ensemble vers le zéro accident, dans le respect strict des normes de sécurité malgaches et de l'ISO 45001.
                </p>
                <div className="flex flex-wrap gap-2">
                  {standards.map((st, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 font-mono text-xs px-3 py-1.5 rounded-lg border border-slate-200">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#E7F5F2] to-red-100/30 rounded-2xl p-6 border border-emerald-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-[#2A9F8E] font-bold text-sm uppercase tracking-wide mb-2">Objectifs Majeurs</h4>
                  <ul className="space-y-2 text-slate-700 text-xs font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Document Unique d'Évaluation Risques
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Sauveteurs Secouristes formés (SST)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#2A9F8E]" />
                      Maîtrise de l'arbre des causes
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-200/40 text-xs text-slate-500 italic">
                  "L'humain au cœur de la performance industrielle durable."
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
              Évaluation des Risques HSE (Interactif)
            </button>
          </div>
        </div>

        {/* Tab Contents: FORMATIONS */}
        {activeTab === "formations" && (
          <div className="space-y-8 animate-fade-in" id="hse-formations">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Nos Sessions de Formation en Sécurité au Travail</h2>
              <p className="text-slate-500 text-sm mt-1">Des compétences requises par la loi et certifiées par des directeurs d'audits expérimentés.</p>
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
                      Planifier une session
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
          <div className="space-y-8 animate-fade-in" id="hse-packs">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Un Accompagnement de Proximité et de Rigueur</h2>
              <p className="text-slate-500 text-sm mt-1">Nos packs d'accompagnement terrain sont conçus pour structurer vos chantiers et sites industriels.</p>
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
                      Demander un diagnostic conformité initial gratuit
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Contents: DIAGNOSTIC (Interactive) */}
        {activeTab === "diagnostic" && (
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_25px_60px_rgba(15,23,42,0.06),_0_0_40px_rgba(42,159,142,0.03)] border border-slate-100 max-w-3xl mx-auto animate-fade-in" id="hse-quiz">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900">Évaluation de Votre Positionnement HSE</h2>
              <p className="text-slate-500 text-sm mt-1">
                Mesurez le degré de protection de vos salariés et votre conformité légale en matière de santé et sécurité au travail.
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
                  Analyser mon score de risques au travail
                </button>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-emerald-50 to-[#E7F5F2] rounded-2xl p-6 md:p-8 text-center border border-emerald-100">
                <CheckCircle2 className="w-12 h-12 text-[#2A9F8E] mx-auto mb-4" />
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Résultat du Diagnostic de Prévention</h3>
                
                <p 
                  className="text-slate-800 text-sm leading-relaxed mb-6 bg-white p-4 rounded-xl border border-emerald-100 inline-block text-left"
                  dangerouslySetInnerHTML={{ __html: quizResult.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
                />

                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  <button
                    onClick={handleResetQuiz}
                    className="py-2.5 px-4 bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 rounded-lg text-xs font-semibold transition-colors duration-150"
                  >
                    Effacer mes réponses
                  </button>
                  <a
                    href="#contact-section"
                    className="py-2.5 px-4 bg-[#2A9F8E] hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors duration-150 flex items-center justify-center gap-1"
                  >
                    Prendre un rendez-vous
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