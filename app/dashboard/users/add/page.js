import style from "@/app/components/dashboard/user/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className="bg-white p-5 rounded-[10px] mt-5">
      <form action="" className={style.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="text" placeholder="Password" name="password" required />
        <input type="phone" placeholder="Phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>isAdmin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="Address"
          rows="4"
          placeholder="Description"
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
