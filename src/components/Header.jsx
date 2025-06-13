import me from "../assets/me-removebg.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export function Header() {
  return (
    <header className="flex flex-col max-w-[1440px] items-center bg-gradient-to-b p-10 rounded-3xl mt-4 w-full backdrop-blur-[6px] bg-white/10">
      <div className="flex flex-col gap-3 md:flex-row md:gap-0 justify-between w-full">
        <div className="flex flex-col justify-center items-center text-center ml-5">
          <h1 className="text-[48px] md:text-[84px] text-amber-400 font-bold">
            Riley Marcum
          </h1>
          <h2 className="text-md md:text-xl font-semibold text-amber-200/90 mb-5">
            IoT Specialist | Software Engineer | Hobbyist Game Developer |
            Continuous Learner
          </h2>
          <div className="flex gap-5 opacity-60 hover:opacity-100 bg-amber-300/0 hover:bg-amber-300/50 transition-all duration-300 px-8 py-2 rounded-full">
            <a href="https://www.linkedin.com/in/rileymarcum/" target="_blank">
              <img className="w-10 h-10" src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/aivaxela" target="_blank">
              <img className="w-10 h-10" src={github} alt="github" />
            </a>
          </div>
        </div>
        <img
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] self-center rounded-full p-2 shadow-2xl bg-amber-300/20"
          src={me}
          alt="portrait photo of Riley"
        />
      </div>
    </header>
  );
}
