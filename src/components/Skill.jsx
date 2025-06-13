import udemyCertImg from "../assets/udemy-cert.png";
import ttCertImg from "../assets/tt-cert.png";

export function Skill({ icon, title, issuer, date }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center w-fit p-2 rounded-3xl">
        <img src={icon} alt="certificate icon" />
        <h4 className="font-semibold text-xl text-center text-amber-400">
          {title}
        </h4>
        <p className="text-amber-200/70 text-lg">{`${issuer} ${date}`}</p>
      </div>
    </div>
  );
}
