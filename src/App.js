import { Header } from "./components/Header";
import { Intro } from "./components/Intro";

export function App() {
  return (
    <div className="flex flex-col items-center mx-auto max-w-[1440px]">
      <Header />
      <Intro />
    </div>
  );
}
