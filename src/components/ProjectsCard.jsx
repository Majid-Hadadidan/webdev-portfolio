import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
function ProjectsCard({ img, github, title, text, url }) {
  return (
    <article className="bg-white shadow-md rounded-lg hover:shadow-xl duration-300 ">
      <img
        src={img}
        alt={title}
        className="object-cover rounded-t-lg w-full h-64"
      />

      <div className="capitalize p-8">
        {/* title */}
        <h2 className="text-xl font-medium tracking-wide ">{title}</h2>

        {/* text */}
        <p className="leading-loose  mt-4 text-slate-700">{text}</p>
        <div className="flex mt-4 gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
         
        </div>
      </div>
    </article>
  );
}
export default ProjectsCard;
