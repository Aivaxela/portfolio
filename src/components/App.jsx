import { Clusters } from "./Clusters";
import { Header } from "./Header";
import { Intro } from "./Intro";

export function App() {
  return (
    <div className="flex flex-col items-center mx-auto max-w-[1440px] h-fit bg-gray-100">
      <Header />
      <Intro />
      <Clusters />
    </div>
  );
}
