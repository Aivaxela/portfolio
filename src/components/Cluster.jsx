export function Cluster({
  name,
  description,
  imgPrimary,
  imgSecondary,
  imgTertiary,
}) {
  const commonImageAttributes =
    "rounded-lg border-4 border-gray-700 shadow-2xl";

  return (
    <div className="w-[500px] h-[500px] flex flex-col items-center justify-center">
      <div className="relative w-[300px] h-[300px]">
        <img
          src={imgPrimary}
          alt="project image primary"
          className={`absolute w-[300px] h-[300px] ${commonImageAttributes}`}
        />
        <img
          src={imgSecondary}
          alt="project image secondary"
          className={`absolute z-10 w-[175px] h-[175px] left-[-65px] bottom-[20px] ${commonImageAttributes}`}
        />
        <img
          src={imgTertiary}
          alt="project image secondary"
          className={`absolute z-20 w-[100px] h-[100px] right-[-45px] top-[40px] ${commonImageAttributes}`}
        />
      </div>
      <h2 className="text-[30px] p-6 font-bold">{name}</h2>
    </div>
  );
}
