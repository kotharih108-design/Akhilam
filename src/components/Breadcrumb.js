import { NavLink, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);

  return (
   <nav
  className="relative h-[130px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[450px] py-6 px-6 flex items-center"
  style={{
    backgroundImage: "url('/images/logo/breadchrumb-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* BLUE OVERLAY (LEFT → RIGHT) */}
  <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/70 to-brandBlue/0"></div>

  {/* CONTENT LAYER */}
  <div className="relative z-10 w-full">

    {/* PAGE TITLE */}
    <h1 className="text-brandOrange font-brand text-2xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-6 capitalize drop-shadow-lg">
      {path[path.length - 1].replace("-", " ")}
    </h1>

    {/* BREADCRUMB LIST */}
    <ol className="flex items-center gap-2 text-white">

      {/* HOME ICON */}
      <NavLink to="/" className="hover:text-brandOrange transition">
        <i className="fa-solid fa-house text-brandOrange"></i>
      </NavLink>

      {/* DYNAMIC LINKS */}
      {path.map((seg, index) => {
        const link = "/" + path.slice(0, index + 1).join("/");
        return (
          <li key={index} className="flex items-center gap-2">

            <i className="fa-solid fa-chevron-right text-white text-sm"></i>

            <NavLink
              to={link}
              className="capitalize hover:text-brandOrange transition"
            >
              {seg.replace("-", " ")}
            </NavLink>

          </li>
        );
      })}
    </ol>
  </div>
</nav>

  );
}
