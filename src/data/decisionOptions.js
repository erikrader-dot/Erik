// Management Decision Simulator. Ratings (High/Medium/Low) are analytical
// judgments for scenario-planning purposes, grounded in real facts where
// noted — they are not verified financial projections.
export const DECISION_COMPARISONS = [
  {
    id: "dec-newbuild-retrofit",
    topic: "Newbuild Focus vs. Retrofit Focus",
    context: "Real data point: the EU ferry market is 79% newbuild / 19% retrofit cumulatively (MBF EU ferry report), but retrofits were 35-65% of deliveries in the market's early years (2013-2016) and AYK is explicitly marketing fast-retrofit as a differentiator today.",
    options: [
      {
        name: "Newbuild Focus",
        revenuePotential: "High", marginPotential: "Medium", requiredInvestment: "Medium", timeToMarket: "Slow (tied to shipbuilding cycles)",
        competitiveResponse: "Direct competition with Corvus's current core business (most named reference projects are newbuilds)", executionDifficulty: "Medium",
        technicalRisk: "Low (proven)", regulatoryRisk: "Low", partnerDependency: "High (shipyards, designers)", brandImpact: "Reinforces current positioning",
        fiveYearStrategicValue: "High — matches the segment where Corvus already has the strongest reference base",
      },
      {
        name: "Retrofit Focus",
        revenuePotential: "Medium", marginPotential: "Medium-High (less shipyard dependency)", requiredInvestment: "Medium", timeToMarket: "Fast (AYK claims days-not-months installs)",
        competitiveResponse: "Contests ground where AYK is already marketing a specific speed advantage", executionDifficulty: "Medium-High (engineering variability per existing hull)",
        technicalRisk: "Medium", regulatoryRisk: "Low", partnerDependency: "Lower (less shipyard-dependent)", brandImpact: "Opens a growth lane distinct from current newbuild-heavy reference base",
        fiveYearStrategicValue: "Medium-High — underserved relative to Corvus's current reference mix, but requires a dedicated fast-retrofit product response to compete with AYK's documented claim",
      },
    ],
    recommendedOption: "Newbuild Focus (primary) with a dedicated fast-retrofit product line (secondary) rather than an either/or choice",
    assumptionsThatCouldChange: "If AYK's retrofit-speed claim proves to be winning meaningful share in Corvus's core markets (not yet confirmed from source), retrofit should be elevated from secondary to co-equal priority.",
    sourceIds: ["mbf_eu_ferry_2024", "ayk_intro_eac", "corvus_presentation_2026"],
  },
  {
    id: "dec-direct-integrator",
    topic: "Direct Sales vs. Integrator-Led Sales",
    context: "Real data point: Corvus's own deck states >75 customers described as \"all largest integrators and yards in the world\" — i.e., Corvus's current model is already substantially integrator-led (ABB, Wärtsilä named on flagship projects).",
    options: [
      {
        name: "Direct Sales", revenuePotential: "Medium", marginPotential: "High (no integrator margin stack)", requiredInvestment: "High (build out direct commercial team)",
        timeToMarket: "Slow to build", competitiveResponse: "Could strain existing integrator relationships (ABB, Wärtsilä)", executionDifficulty: "High",
        technicalRisk: "Low", regulatoryRisk: "Low", partnerDependency: "Low (by design)", brandImpact: "Risk of appearing to compete with current integrator partners",
        fiveYearStrategicValue: "Medium — higher margin but conflicts with the relationship structure that built Corvus's current installed base",
      },
      {
        name: "Integrator-Led Sales", revenuePotential: "High (proven model)", marginPotential: "Medium", requiredInvestment: "Low (extension of current model)",
        timeToMarket: "Fast (already the operating model)", competitiveResponse: "Matches how Corvus already competes; risk is integrator dual-sourcing (see Wärtsilä/AYK finding)", executionDifficulty: "Low",
        technicalRisk: "Low", regulatoryRisk: "Low", partnerDependency: "High", brandImpact: "Consistent with current positioning",
        fiveYearStrategicValue: "High, provided the Partner Loyalty Tracker's at-risk relationships (e.g., Wärtsilä) are actively managed",
      },
    ],
    recommendedOption: "Integrator-Led Sales — Corvus's documented customer base is already built this way, and this build's own Partner Loyalty Tracker shows real risk in the integrator relationships that already exist, which a pivot to direct sales would only add to.",
    assumptionsThatCouldChange: "If a specific large account (e.g., Buquebus-scale) proves reachable only via a direct relationship, a hybrid model may be warranted for flagship deals.",
    sourceIds: ["corvus_presentation_2026"],
  },
  {
    id: "dec-hardware-service",
    topic: "Hardware Revenue vs. Recurring Service Revenue",
    context: "Real data point: Corvus already sells a digital services suite (Vessel Information Portal, Digital SOH monitoring, battery sizing tool used on 3,000+ projects) — the foundation for recurring revenue already exists but is not disclosed as a separate revenue line.",
    options: [
      {
        name: "Hardware-Led", revenuePotential: "High (current model, >$160M FY2025 revenue)", marginPotential: "Medium", requiredInvestment: "Low (status quo)",
        timeToMarket: "N/A (current)", competitiveResponse: "Matches how all named competitors currently compete (AYK, Echandia both hardware-first)", executionDifficulty: "Low",
        technicalRisk: "Low", regulatoryRisk: "Low", partnerDependency: "Medium", brandImpact: "Neutral (status quo)",
        fiveYearStrategicValue: "Medium — proven but exposed to commoditization as more manufacturers reach type-approval parity (118 manufacturers now tracked by MBF)",
      },
      {
        name: "Recurring Service Revenue", revenuePotential: "Medium initially, compounding over time", marginPotential: "High (software/service margins)", requiredInvestment: "Medium (productize existing digital tools into paid tiers)",
        timeToMarket: "Medium (infrastructure already exists per Corvus's own deck)", competitiveResponse: "First-mover potential — no named competitor discloses an equivalent digital suite", executionDifficulty: "Medium",
        technicalRisk: "Low (built on existing Vessel Information Portal / Digital SOH)", regulatoryRisk: "Low", partnerDependency: "Low", brandImpact: "Reinforces Corvus's \"digital solutions are highly differentiated\" claim from its own deck",
        fiveYearStrategicValue: "High — directly extends a real, already-built asset (the digital services suite) that no competitor in the reviewed documents matches",
      },
    ],
    recommendedOption: "Grow Recurring Service Revenue on top of the existing hardware base — Corvus already built the underlying digital infrastructure (Vessel Information Portal, Digital SOH, sizing tool) per its own deck; monetizing it is a lower-risk move than most strategic pivots on this page.",
    assumptionsThatCouldChange: "If a competitor discloses an equivalent or superior digital/monitoring offering (none found in the reviewed documents), the first-mover advantage assumption weakens.",
    sourceIds: ["corvus_presentation_2026"],
  },
  {
    id: "dec-existing-vs-geo-expansion",
    topic: "Existing-Market Investment vs. Geographic Expansion",
    context: "Real data point: AYK has explicitly stated 2025-2026 expansion into Asia-Pacific plus shore-to-ship infrastructure; Corvus's disclosed factory footprint (Norway, Canada, USA) and service network (Norway, North America, Japan, China, Poland) does not show a dedicated Asia-Pacific manufacturing or sales buildout.",
    options: [
      {
        name: "Existing-Market Investment", revenuePotential: "Medium-High", marginPotential: "High (efficiency gains in known markets)", requiredInvestment: "Low-Medium",
        timeToMarket: "Fast", competitiveResponse: "Cedes ground in Asia-Pacific to AYK's stated expansion", executionDifficulty: "Low",
        technicalRisk: "Low", regulatoryRisk: "Low", partnerDependency: "Low", brandImpact: "Reinforces leadership in current strongholds (Europe, North America)",
        fiveYearStrategicValue: "Medium — safe but concedes a region a named competitor has explicitly targeted",
      },
      {
        name: "Geographic Expansion (esp. Asia-Pacific)", revenuePotential: "High (long-term)", marginPotential: "Medium (near-term, due to setup costs)", requiredInvestment: "High",
        timeToMarket: "Slow", competitiveResponse: "Directly contests AYK's stated 2025-2026 Asia-Pacific push", executionDifficulty: "High",
        technicalRisk: "Medium", regulatoryRisk: "Medium (new class-society/regulatory environments)", partnerDependency: "High (new regional partners needed)", brandImpact: "Signals global ambition",
        fiveYearStrategicValue: "High if executed well — the region is not yet a stated Corvus stronghold and a named competitor is actively moving there",
      },
    ],
    recommendedOption: "Selective Geographic Expansion into Asia-Pacific, timed against AYK's stated 2025-2026 window rather than a full re-allocation away from existing markets.",
    assumptionsThatCouldChange: "If Corvus's existing 15-office/3-region footprint already has undisclosed Asia-Pacific coverage, the urgency of this move is lower than assessed here.",
    sourceIds: ["corvus_presentation_2026", "ayk_intro_eac"],
  },
];
