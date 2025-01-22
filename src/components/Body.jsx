import { Clusters } from "./Clusters";
import { SkillsBar } from "./SkillsBar";

export function Body() {
  return (
    <div className="flex max-w-[1440px] gap-2">
      <SkillsBar />
      <Clusters />
    </div>
  );
}
