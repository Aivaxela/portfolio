import certImg from "../assets/cert.png";

export function Skill() {
  return (
    <div className="flex items-center w-[300px] gap-3 p-2 border-8 border-pink-200 rounded-3xl">
      <img className="" src={certImg} alt="certificate icon" />
      <h3 className="font-semibold text-l">C# Intermediate</h3>
    </div>
  );
}
