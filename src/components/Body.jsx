import { Clusters } from "./Clusters";
import { SkillsBar } from "./SkillsBar";

export function Body() {
  return (
    <div className="flex max-w-[1440px]">
      <SkillsBar />
      <Clusters />
    </div>
  );
}
