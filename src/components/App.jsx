import { useState } from "react";
import { Body } from "./Body";
import { Header } from "./Header";
import { Intro } from "./Intro";
import { Nav } from "./Nav";
import bg from "../assets/bg.svg";

export function App() {
  const [activeSection, setActiveSection] = useState("projects");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div
      className="flex flex-col items-center min-h-screen p-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <Nav
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
      <Body activeSection={activeSection} />
    </div>
  );
}
