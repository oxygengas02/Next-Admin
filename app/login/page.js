import style from "@/app/components/dashboard/login/login.modules.css";

const Login = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-slate-200 flex items-center justify-center">
      <form
        action=""
        className="bg-white w-[500px] h-[500px] p-[50px] rounded-[10px] flex flex-col gap-8 justify-center"
      >
        <h2 className="text-[30px] capitalize font-bold text-center">
          bota admin
        </h2>
        <input type="text" placeholder="username" className={style.input} />
        <input type="password" placeholder="password" className={style.input} />
        <button className="p-[10px] bg-gray-500 rounded-[5px] text-white cursor-pointer hover:bg-slate-400 uppercase transition ease-in-out delay-100">
          login
        </button>
      </form>
    </div>
  );
};
export default Login;
