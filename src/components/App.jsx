import { Body } from "./Body";
import { Header } from "./Header";
import { Intro } from "./Intro";
import bg from "../assets/bg.svg";

export function App() {
  return (
    <div
      className="flex flex-col items-center min-h-screen p-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <Body />
    </div>
  );
}
