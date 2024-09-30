import { LayoutDashboard } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-16 h-[150px]">
      <h2 className="drop-shadow-2xl font-aeonik text-[85px] cursor-pointer select-none">
        LEVEL
      </h2>
      <button className="relative bg-[#050a44] shadow hover:scale-[1.05] hover:shadow-lg rounded-full w-48 h-11 font-aeonik text-white text-xl hover:text-slate-100 transition-all overflow-hidden">
        <p className="relative z-10">
          <span className="flex justify-center items-center gap-2">
            <LayoutDashboard size={14} />
            MENU
          </span>
        </p>
        <div className="wave"></div>
      </button>
    </div>
  );
};

export default Navbar;
