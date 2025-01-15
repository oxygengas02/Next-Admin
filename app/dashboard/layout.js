import Navbar from "../components/dashboard/navbar/page";
import Sidebar from "../components/dashboard/sidebar/page";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="grow-[1]  bg-white p-5">
        <Sidebar />
      </div>
      <div className="grow-[5]  bg-slate-100 p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
