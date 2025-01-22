import { Body } from "./Body";
import { Header } from "./Header";
import { Intro } from "./Intro";

export function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-600">
      <Header />
      <Intro />
      <Body />
    </div>
  );
}
