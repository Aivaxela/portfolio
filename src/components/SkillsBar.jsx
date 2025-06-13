import { Skill } from "./Skill";
import udemyCertImg from "../assets/udemy-cert.png";
import ttCertImg from "../assets/tt-cert.png";

export function SkillsBar() {
  return (
    <div className="w-[300px] p-4 bg-gradient-to-b backdrop-blur-[6px] bg-white/10 rounded-2xl">
      <h3 className="text-[36px] border-b-8 border-amber-200/80 mb-8 pb-5 font-bold text-center text-amber-400">
        Education
      </h3>
      <div className="flex flex-col gap-2">
        <Skill
          icon={ttCertImg}
          title={"Fullstack Software Engineering Program"}
          issuer={"TripleTen"}
          date={"2024"}
        />
        <Skill
          icon={udemyCertImg}
          title={"C# Intermediate"}
          issuer={"Udemy"}
          date={"2024"}
        />
        <Skill
          icon={udemyCertImg}
          title={"2D Game Developer"}
          issuer={"Udemy"}
          date={"2023"}
        />
      </div>
    </div>
  );
}
