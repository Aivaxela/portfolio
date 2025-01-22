import udemyCertImg from "../assets/udemy-cert.png";
import ttCertImg from "../assets/tt-cert.png";

export function Skill({ icon, title, issuer, date }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center w-fit p-2 border-pink-200 rounded-3xl">
        <img className="drop-shadow-2xl" src={icon} alt="certificate icon" />
        <h4 className="font-semibold text-xl text-center">{title}</h4>
        <p className="text-gray-600 text-lg font-semibold">{`${issuer} ${date}`}</p>
      </div>
    </div>
  );
}
