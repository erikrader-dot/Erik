import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Overview from "./pages/Overview";
import ReplacementScanner from "./pages/ReplacementScanner";
import FleetExpansion from "./pages/FleetExpansion";
import PartnerLoyalty from "./pages/PartnerLoyalty";
import HiringSignals from "./pages/HiringSignals";
import WinLoss from "./pages/WinLoss";
import ReferenceMatcher from "./pages/ReferenceMatcher";
import CustomerRisk from "./pages/CustomerRisk";
import RelationshipMap from "./pages/RelationshipMap";
import TCOCalculator from "./pages/TCOCalculator";
import CompetitorSimulator from "./pages/CompetitorSimulator";
import EarlyWarning from "./pages/EarlyWarning";
import DecisionSimulator from "./pages/DecisionSimulator";
import Methodology from "./pages/Methodology";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Overview />} />
          <Route path="/replacement-scanner" element={<ReplacementScanner />} />
          <Route path="/fleet-expansion" element={<FleetExpansion />} />
          <Route path="/partner-loyalty" element={<PartnerLoyalty />} />
          <Route path="/hiring-signals" element={<HiringSignals />} />
          <Route path="/win-loss" element={<WinLoss />} />
          <Route path="/reference-matcher" element={<ReferenceMatcher />} />
          <Route path="/customer-risk" element={<CustomerRisk />} />
          <Route path="/relationship-map" element={<RelationshipMap />} />
          <Route path="/tco-calculator" element={<TCOCalculator />} />
          <Route path="/competitor-simulator" element={<CompetitorSimulator />} />
          <Route path="/early-warning" element={<EarlyWarning />} />
          <Route path="/decision-simulator" element={<DecisionSimulator />} />
          <Route path="/methodology" element={<Methodology />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
