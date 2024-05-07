import HeaderBox from "@/components/HeaderBox";
import TotalbalanceBox from "@/components/TotalbalanceBox";
import React from "react";

const Home = () => {
  const LoggedIn = {
    firstName: "Prajwal",
  };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={LoggedIn?.firstName}
          subtext="Access and manage your account and transactions effeciently"
        />

        <TotalbalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.45}
        />
      </div>
    </section>
  );
};

export default Home;
