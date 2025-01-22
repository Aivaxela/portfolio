import me from "../assets/me-removebg.png";

export function Header() {
  return (
    <header className="flex flex-col max-w-[1440px] items-center bg-gradient-to-b p-10 rounded-3xl mt-4 from-orange-200 to-orange-100 w-full">
      <div className="flex flex-col gap-3 md:flex-row md:gap-0 justify-between w-full">
        <div className="flex flex-col justify-center text-center ml-5">
          <h1 className="text-[48px] md:text-[84px] font-bold">Riley Marcum</h1>
          <h2 className="text-md md:text-xl font-semibold text-gray-500">
            IoT Specialist | Software Engineer | Hobbyist Game Developer |
            Continuous Learner
          </h2>
        </div>
        <img
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] self-center rounded-full bg-orange-100 p-2 shadow-2xl"
          src={me}
          alt="portrait photo of Riley"
        />
      </div>
    </header>
  );
}
