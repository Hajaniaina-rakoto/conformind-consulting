import React, { useState } from "react";
import { 
  Calculator, 
  HelpCircle, 
  Users, 
  BookOpen, 
  Sparkles,
  ArrowRight,
  PlusCircle,
  FileSpreadsheet,
  Check,
  CheckCircle2,
  Percent
} from "lucide-react";

export default function PricingCalculator() {
  const [trainingType, setTrainingType] = useState<"none" | "decouverte" | "expert" | "auditeur" | "etudiant">("decouverte");
  const [domain, setDomain] = useState<string>("quality");
  const [participants, setParticipants] = useState<number>(1);
  const [etudiantThemes, setEtudiantThemes] = useState<number>(1);

  const [packType, setPackType] = useState<"none" | "express" | "performance" | "excellence">("none");
  const [auditType, setAuditType] = useState<"none" | "diagnostic" | "complet" | "pre-audit">("none");

  const [applySalonPromo, setApplySalonPromo] = useState<boolean>(true);

  // Price points in Ariary based strictly on PDF
  const prices = {
    training: {
      decouverte: 150000, // 1 jour, 150000 Ar/part
      expert: 350000,     // 2 jours, 350000 Ar/part
      auditeur: 350000,   // 2 jours, 350000 Ar/part
      etudiant: {
        1: 50000,        // 1 theme: 50 000 Ar
        3: 120000,       // 3 themes: 120 000 Ar
        5: 200000        // 5 themes: 200 000 Ar
      }
    },
    packs: {
      none: 0,
      express: 10000000,   // à partir de 10 000 000 Ar
      performance: 15000000, // à partir de 15 000 000 Ar
      excellence: 20000000   // à partir de 20 000 000 Ar
    },
    audits: {
      none: 0,
      diagnostic: 2500000,  // à partir de 2 500 000 Ar
      complet: 4500000,     // à partir de 4 500 000 Ar
      "pre-audit": 6500000  // à partir de 6 500 000 Ar
    }
  };

  // Compute Calculation
  const calculateTotal = () => {
    let rawTrainingCost = 0;
    let discountPercent = 0;

    // 1. Calculate training
    if (trainingType === "decouverte" || trainingType === "expert" || trainingType === "auditeur") {
      const basePrice = prices.training[trainingType];
      rawTrainingCost = basePrice * participants;

      // Apply participant discounts (Document Page 10)
      if (participants >= 5) {
        discountPercent = 15; // 15% dès 5 participants
      } else if (participants >= 3) {
        discountPercent = 10; // 10% dès 3 participants
      }
    } else if (trainingType === "etudiant") {
      if (etudiantThemes <= 2) {
        rawTrainingCost = prices.training.etudiant[1] * participants;
      } else if (etudiantThemes <= 4) {
        rawTrainingCost = prices.training.etudiant[3] * participants;
      } else {
        rawTrainingCost = prices.training.etudiant[5] * participants;
      }
    }

    const discountedTrainingCost = rawTrainingCost * (1 - discountPercent / 100);

    // 2. Accompagnement pack cost
    let packCost = prices.packs[packType];

    // 3. Audits/Diagnostics cost
    let auditCost = prices.audits[auditType];

    // Combine costs
    let total = discountedTrainingCost + packCost + auditCost;

    // Apply general Salon Promo Code (Document: "10% de réduction ou diagnostic d'écarts")
    let finalDiscountValue = rawTrainingCost * (discountPercent / 100);
    let specialSalonNotes: string[] = [];

    if (packType !== "none" && applySalonPromo) {
      specialSalonNotes.push("Diagnostic initial gratuit accordé (Inclus de base : Bonus Salon !)");
    }
    if (applySalonPromo && trainingType !== "etudiant") {
      // Add a slight extra promo for salon visitors
      // For instance, extra free 1 hour coaching (Document Bonus pg 6)
      if (packType !== "none" || auditType !== "none") {
        specialSalonNotes.push("1 heure de coaching à distance offerte");
        specialSalonNotes.push("Restitution rapide garantie sous 7 jours");
      }
    }

    return {
      rawTrainingCost,
      discountPercent,
      discountedTrainingCost,
      packCost,
      auditCost,
      total,
      finalDiscountValue,
      specialSalonNotes
    };
  };

  const results = calculateTotal();

  const handleThemesSelect = (val: number) => {
    setEtudiantThemes(val);
  };

  return (
    <section className="bg-white rounded-[32px] p-6 md:p-10 border border-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.06),_0_0_40px_rgba(42,159,142,0.02)] hover:shadow-[0_28px_70px_rgba(42,159,142,0.09)] transition-all duration-500" id="interactive-price-simulator">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-emerald-50 text-[#2A9F8E] rounded-2xl">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Directeur de Budget ConforMind</h2>
          <p className="text-slate-500 text-xs">Simulez le coût approximatif de vos formations ou formules d'accompagnement.</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Input form */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Section 1: Formations */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
              Étape 1 : Formules d'Enseignement et de Formation
            </span>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {[
                { type: "none", label: "Aucune" },
                { type: "decouverte", label: "Découverte (1 j)" },
                { type: "expert", label: "Expert (2 j)" },
                { type: "auditeur", label: "Auditeur (2 j)" },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => setTrainingType(item.type as any)}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-center ${
                    trainingType === item.type
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Toggle Student specialized program */}
            <div className="flex items-center gap-1.5 mt-2 mb-4">
              <input 
                type="checkbox"
                id="is-student"
                checked={trainingType === "etudiant"}
                onChange={(e) => setTrainingType(e.target.checked ? "etudiant" : "none")}
                className="rounded border-slate-300 text-[#2A9F8E] focus:ring-[#2A9F8E] h-4 w-4 cursor-pointer"
              />
              <label htmlFor="is-student" className="text-xs text-slate-700 font-bold cursor-pointer">
                Activer la Formule Spéciale Étudiant (Tarif promotionnel)
              </label>
            </div>

            {trainingType !== "none" && (
              <div className="space-y-4 pt-3 border-t border-slate-200/60 transition-all">
                <div className="grid sm:grid-cols-2 gap-4">
                  {trainingType !== "etudiant" ? (
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Nombre de participants :
                      </label>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setParticipants(Math.max(1, participants - 1))}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
                        >
                          -
                        </button>
                        <span className="font-mono font-bold text-sm px-4">{participants}</span>
                        <button 
                          onClick={() => setParticipants(participants + 1)}
                          className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
                        >
                          +
                        </button>
                        <span className="text-[10px] text-slate-500 font-medium ml-2">
                          {participants >= 5 ? "(15% reduction appliquée)" : participants >= 3 ? "(10% reduction appliquée)" : ""}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Nombre de Thèmes Ciblés (Formule Étudiant) :
                      </label>
                      <div className="flex gap-1">
                        {[
                          { val: 1, label: "1 Thème (50k)" },
                          { val: 3, label: "3 Thèmes (120k)" },
                          { val: 5, label: "5 Thèmes (200k)" }
                        ].map((btn) => (
                          <button
                            key={btn.val}
                            onClick={() => handleThemesSelect(btn.val)}
                            className={`px-3 py-1 text-xs rounded border ${
                              etudiantThemes === btn.val 
                                ? "bg-[#2A9F8E] text-white border-[#2A9F8E] font-medium" 
                                : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                            }`}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                      Expertise thématique sélectionnée :
                    </label>
                    <select
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg p-1.5 text-xs text-slate-700 focus:ring-1 focus:ring-[#2A9F8E] focus:outline-none"
                    >
                      <option value="quality">Qualité (ISO 9001)</option>
                      <option value="food-safety">Food Safety (HACCP/ISO 22000)</option>
                      <option value="hse">Hygiène - Santé - Sécurité (SST/45001)</option>
                      <option value="organic-agriculture">Agriculture Biologique & Durable</option>
                      <option value="environment-social">Environnement & Social (RSE/14001)</option>
                      <option value="performance">Management & Performance</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Packs d'accompagnement */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
              Étape 2 : Packs d'Accompagnement Entreprise (Sur mesure)
            </span>

            <div className="grid sm:grid-cols-4 gap-2">
              {[
                { type: "none", label: "Aucun", desc: "" },
                { type: "express", label: "Pack Express", desc: "3-6 mois, dès 10M Ar" },
                { type: "performance", label: "Pack Performance", desc: "6-9 mois, dès 15M Ar" },
                { type: "excellence", label: "Pack Excellence", desc: "9-12 mois, dès 20M Ar" },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => setPackType(item.type as any)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    packType === item.type
                      ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <span className="block text-xs font-bold leading-tight">{item.label}</span>
                  {item.desc && <span className="block text-[9px] text-slate-500 mt-0.5 leading-none font-mono">{item.desc}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Audits et Diagnostic */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
              Étape 3 : Diagnostic & Audits (Formules à la carte)
            </span>

            <div className="grid sm:grid-cols-4 gap-2">
              {[
                { type: "none", label: "Aucun", price: "" },
                { type: "diagnostic", label: "Diagnostic Express", price: "Dès 2.5M Ar" },
                { type: "complet", label: "Audit Complet", price: "Dès 4.5M Ar" },
                { type: "pre-audit", label: "Pré-audit & Coaching", price: "Dès 6.5M Ar" },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => setAuditType(item.type as any)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    auditType === item.type
                      ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <span className="block text-xs font-bold leading-tight">{item.label}</span>
                  {item.price && <span className="block text-[9px] text-slate-500 mt-0.5 leading-none font-mono">{item.price}</span>}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#131E2A] to-[#0D151F] text-white rounded-3xl p-6 shadow-[0_25px_50px_rgba(15,23,42,0.4),_0_0_35px_rgba(42,159,142,0.12)] border border-slate-800/80 hover:shadow-[0_30px_60px_rgba(42,159,142,0.2)] transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs text-slate-400 uppercase font-bold tracking-widest block">DEVIS ESTIMATIF DIRECT</span>
              <span className="p-1 px-2.5 bg-emerald-500/10 text-[#42bda6] rounded-full text-[9px] font-bold uppercase tracking-wider">
                Midi madagascar
              </span>
            </div>

            {/* Price list display */}
            <div className="space-y-3 pb-6 border-b border-white/10">
              {trainingType !== "none" && (
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">
                    Formation {trainingType === "etudiant" ? "Étudiant" : trainingType.toUpperCase()} ({participants} pers)
                  </span>
                  <span className="font-mono text-slate-200">
                    {results.rawTrainingCost.toLocaleString("fr-FR")} Ar
                  </span>
                </div>
              )}

              {results.discountPercent > 0 && (
                <div className="flex justify-between text-xs text-[#2A9F8E] font-medium">
                  <span className="inline-flex items-center gap-1">
                    <Percent className="w-3.5 h-3.5 inline" /> 
                    Remise groupe de {results.discountPercent}%
                  </span>
                  <span className="font-mono">
                    -{results.finalDiscountValue.toLocaleString("fr-FR")} Ar
                  </span>
                </div>
              )}

              {packType !== "none" && (
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Accompagnement ({packType.toUpperCase()})</span>
                  <span className="font-mono text-slate-200">
                    {results.packCost.toLocaleString("fr-FR")} Ar
                  </span>
                </div>
              )}

              {auditType !== "none" && (
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Diagnostic / Audit ({auditType})</span>
                  <span className="font-mono text-slate-200">
                    {results.auditCost.toLocaleString("fr-FR")} Ar
                  </span>
                </div>
              )}

              {trainingType === "none" && packType === "none" && auditType === "none" && (
                <div className="text-slate-500 text-xs py-4 text-center">
                  Veuillez cocher au moins un service ou une formation.
                </div>
              )}
            </div>

            {/* Total Area */}
            <div className="py-6 flex flex-col gap-1.5 justify-between">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Total d'Investissement Approximatif :</span>
              <div className="text-3xl md:text-4xl font-extrabold text-[#2A9F8E] font-mono tracking-tight shrink-0">
                {results.total.toLocaleString("fr-FR")} Ar
              </div>
              <span className="text-[10px] text-slate-400 italic">
                * Tarifs hors taxes indicatifs négociables selon la taille de l'équipe et secteur rural.
              </span>
            </div>

            {/* Salon bonus list */}
            {results.specialSalonNotes.length > 0 && (
              <div className="bg-[#1e293b]/50 rounded-xl p-3 border border-emerald-500/20 mb-6">
                <span className="block text-[10px] uppercase text-[#2A9F8E] font-extrabold tracking-wide mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#2a9f8e]" /> Bonus de Devis Salon ConforMind :
                </span>
                <ul className="space-y-1">
                  {results.specialSalonNotes.map((note, nIdx) => (
                    <li key={nIdx} className="text-[10px] text-slate-300 flex items-center gap-1.5 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                id="apply-salon"
                checked={applySalonPromo}
                onChange={(e) => setApplySalonPromo(e.target.checked)}
                className="rounded border-slate-700 bg-slate-800 text-[#2A9F8E] focus:ring-[#2A9F8E] h-4 w-4 cursor-pointer"
              />
              <label htmlFor="apply-salon" className="text-[10px] text-slate-300 cursor-pointer font-bold uppercase tracking-wider">
                Appliquer le Code Promo Salon "CONFORMIND-2026"
              </label>
            </div>
            
            <a
              href="#contact-section"
              className="w-full flex items-center justify-center gap-2 bg-[#2A9F8E] hover:bg-emerald-600 text-slate-950 font-extrabold uppercase rounded-2xl py-3 text-xs tracking-wider transition-all shadow-md shadow-emerald-500/10 cursor-pointer text-center"
            >
              Envoyer cette simulation par email
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}