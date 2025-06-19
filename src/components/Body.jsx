import { Clusters } from "./Clusters";
import { SkillsBar } from "./SkillsBar";

export function Body({ activeSection }) {
  return (
    <div className="flex max-w-[1440px] gap-2">
      {activeSection === "education" ? <SkillsBar /> : <Clusters />}
    </div>
  );
}
