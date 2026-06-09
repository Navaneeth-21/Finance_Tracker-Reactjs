import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen border-r bg-white dark:border-slate-500 dark:bg-slate-900">
      <div className="p-6 ">
        <h2 className="text-lg font-bold">Main</h2>
        <nav className="mt-6">
          <ul className="space-y-5">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/transactions">Transactions</NavLink>
            </li>
            <li>
              <NavLink to="/budgets">Budgets</NavLink>
            </li>
            <li>
              <NavLink to="profile">Profile</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
