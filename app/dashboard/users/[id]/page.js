import style from "@/app/components/dashboard/user/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className="flex gap-12 mt-5">
      <div className="flex-[1] text-center bg-slate-200 h-max rounded-[10px] p-5">
        <div className="w-[100%] bg-white h-[300px] relative rounded-[10px] mb-4 overflow-hidden">
          <Image src="/user.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className="flex-[3]  bg-white rounded-[10px] p-5">
        <form action="" className={style.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Email</label>
          <input type="email" name="email" placeholder="JohnDoe@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="john1234" />
          <label>Phone</label>
          <input type="number" name="phone" placeholder="+12345" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="address" />
          <label>IsAdmin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>IsActive?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
