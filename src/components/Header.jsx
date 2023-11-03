import {  useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Header = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    toast.error("User Logout!");
    navigate("/login");
  };
  return (
    <nav className="bg-slate-400 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-black text-xl font-bold">Todos</div>
        <div className="space-x-4">
          <button
            onClick={handleLogout}
            className="text-black hover:font-bold hover:rounded-md
               hover:bg-red-400 hover:p-1"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
