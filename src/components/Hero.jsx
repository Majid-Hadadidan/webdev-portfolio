import heroSvg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

function Hero() {
  return (
    <div className="bg-emerald-100 py-24">
      <div className=" align-element grid gap-8 md:grid-cols-2">
        <article>
          <h2 className="text-7xl  tracking-wider font-bold ">I'm majid</h2>
          <p className="capitalize tracking-wide mt-4 text-slate-700 text-3xl">
            Front-End Developer
          </p>
          <p className="capitalize mt-2 tracking-wide text-lg text-slate-700 ">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroSvg} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
}
export default Hero;
