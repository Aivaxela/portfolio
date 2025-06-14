import me from "../assets/me-removebg.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export function Header() {
  return (
    <header className="flex flex-col max-w-[1440px] items-center bg-gradient-to-b p-10 rounded-3xl border-2 border-slate-400/60 mb-4 w-full backdrop-blur-[6px] bg-white/10">
      <div className="flex flex-col gap-3 md:flex-row md:gap-0 justify-between w-full">
        <div className="flex flex-col justify-center items-center text-center ml-5">
          <h1 className="text-[48px] md:text-[84px] text-amber-400 font-bold">
            Riley Marcum
          </h1>
          <h2 className="text-md md:text-xl font-semibold text-amber-200 mb-5">
            IoT Specialist | Software Engineer | Hobbyist Game Developer |
            Continuous Learner
          </h2>
          <div className="flex gap-14 px-8 py-2">
            <a
              href="https://www.linkedin.com/in/rileymarcum/"
              target="_blank"
              className="p-2 rotate-45 border-4 rounded-md border-amber-400 hover:bg-amber-400 transition-all duration-300"
            >
              <img
                className="w-10 h-10 -rotate-45"
                src={linkedin}
                alt="linkedin"
              />
            </a>
            <a
              href="https://github.com/aivaxela"
              target="_blank"
              className="p-2 rotate-45 border-4 rounded-md border-amber-400 hover:bg-amber-400 transition-all duration-300"
            >
              <img className="w-10 h-10 -rotate-45" src={github} alt="github" />
            </a>
          </div>
        </div>
        <img
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] self-center rounded-full p-2 shadow-2xl bg-amber-400/10"
          src={me}
          alt="portrait photo of Riley"
        />
      </div>
    </header>
  );
}
