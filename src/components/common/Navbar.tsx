import { APP_NAME } from "../../constants/app";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 dark:border-slate-800 dark:bg-slate-900">
      <h1 className="text-xl font-semibold">{APP_NAME}</h1>

      <button onClick={toggleTheme} className="rounded border px-4 py-2">
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </header>
  );
};

export default Navbar;
