import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TabNavigation from "./components/TabNavigation";
import OrderMealsTab from "./components/OrderMealsTab";
import FeedbackTab from "./components/FeedbackTab";
import NewMealsVoteTab from "./components/NewMealsVoteTab";

const TABS = [
  { id: "order", label: "Order Meals" },
  { id: "feedback", label: "Rate & Feedback" },
  { id: "vote", label: "Vote New Meals" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("order");

  const handleLogoClick = () => {
    setActiveTab("order");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header onLogoClick={handleLogoClick} />
      <TabNavigation tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />

      <main className="flex-1">
        <div
          data-tab="order"
          role="tabpanel"
          className={activeTab === "order" ? "" : "hidden"}
        >
          <OrderMealsTab />
        </div>
        <div
          data-tab="feedback"
          role="tabpanel"
          className={activeTab === "feedback" ? "" : "hidden"}
        >
          <FeedbackTab />
        </div>
        <div
          data-tab="vote"
          role="tabpanel"
          className={activeTab === "vote" ? "" : "hidden"}
        >
          <NewMealsVoteTab />
        </div>
      </main>

      <Footer />
    </div>
  );
}
