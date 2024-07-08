import { links } from "../components/data.jsx";

function Navbar() {
  return (
    <nav className="bg-emerald-100 ">
      <div className="flex flex-col py-4 align-element  sm:flex-row sm:gap-x-16 sm:py-16 sm:items-center ">
        <h2 className="font-bold text-3xl">
          Web <span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x-3 ">
          {links.map((item) => {
            const { id, href, text } = item;
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
