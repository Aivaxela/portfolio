export function Cluster({
  name,
  link,
  description,
  imgPrimary,
  imgSecondary,
  imgTertiary,
  skills,
  repoLink,
}) {
  const commonImageAttributes =
    "rounded-lg border-4 border-gray-700 shadow-2xl duration-500";

  const commonIconAttributes =
    "w-10 h-10 group-hover:opacity-100 duration-500 md:opacity-70 ";

  return (
    <div className="md:w-[500px] md:h-[500px] flex flex-col items-center justify-center group hover:scale-105 ease-in-out duration-500 mb-10">
      <a
        className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] mb-5"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={imgPrimary}
          alt="project image primary"
          className={`absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] ${commonImageAttributes}`}
        />
        <img
          src={imgSecondary}
          alt="project image secondary"
          className={`absolute z-10 w-[75px] h-[75px] md:w-[150px] md:h-[150px] left-[-65px] bottom-[20px] md:group-hover:translate-y-[-65px] ${commonImageAttributes}`}
        />
        <img
          src={imgTertiary}
          alt="project image secondary"
          className={`absolute z-20 w-[40px] h-[40px] md:w-[75px] md:h-[75px] right-[-45px] top-[40px] md:group-hover:translate-y-20 ${commonImageAttributes}`}
        />
      </a>
      <div className="flex flex-col items-center">
        <h4 className="text-[20px] md:text-[30px] font-bold text-amber-400">
          {name}
        </h4>
        <div className="flex gap-2 duration-500">
          {skills.map((skill, index) => (
            <img
              key={index}
              className={`${commonIconAttributes}`}
              src={skill}
              alt={`skill icon ${index}`}
            />
          ))}
        </div>
        <a
          className="text-slate-200 text-sm pt-1 hover:text-amber-400 font-semibold duration-300"
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {`${repoLink ? "View on GitHub" : ""}`}
        </a>
      </div>
    </div>
  );
}
