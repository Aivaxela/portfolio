import { Body } from "./Body";
import { Header } from "./Header";
import { Intro } from "./Intro";

export function App() {
  return (
    <div className="flex flex-col items-center h-fit bg-gray-100 ">
      <Header />
      <Intro />
      <Body />
    </div>
  );
}
