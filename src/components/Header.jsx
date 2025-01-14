import me from "../assets/me-removebg.png";

export function Header() {
  return (
    <header className="flex flex-col items-center bg-gradient-to-b p-10 from-teal-200 to-teal-100 w-full">
      <div className="flex justify-between w-full">
        <div className="flex flex-col justify-center text-center ml-5">
          <h1 className="text-[84px] font-bold">Riley Marcum</h1>
          <h2 className="text-xl font-semibold text-gray-500">
            IoT Specialist | Software Engineer | Hobbyist Game Developer |
            Continuous Learner
          </h2>
        </div>
        <img
          className="w-[300px] h-[300px] rounded-full bg-teal-100 p-2 shadow-2xl"
          src={me}
          alt="portrait photo of Riley"
        />
      </div>
    </header>
  );
}
