// import Search from "@/app/components/dashboard/search/search";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "@/app/components/dashboard/user/users.module.css";
// import Pagination from "@/app/components/dashboard/pagination/pagination";

// const Users = () => {
//   return (
//     <div className="bg-white p-5 mt-5 rounded-[10px] ">
//       <div className="flex items-center justify-between mb-3">
//         <Search placeholder="Search for a user" />
//         <Link href="/dashboard/users/add">
//           <button className="bg-slate-500 p-[10px] text-white border-none rounded-[5px] cursor-pointer">
//             Add New User
//           </button>
//         </Link>
//       </div>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Created At</td>
//             <td>Role</td>
//             <td>Status</td>
//             <td>Action</td>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className={styles.user}>
//                 <Image src="/user.png" alt="" width={40} height={40} />
//                 John Doe
//               </div>
//             </td>
//             <td>john@gmail.com</td>
//             <td>13.01.2025</td>
//             <td>Admin</td>
//             <td>Active</td>
//             <td>
//               <div className="buttons">
//                 <Link href="/">
//                   <button className={`${styles.button} ${styles.view}`}>
//                     View
//                   </button>
//                 </Link>
//                 <button className={`${styles.button} ${styles.delete}`}>
//                   delete
//                 </button>
//               </div>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <Pagination />
//     </div>
//   );
// };
// export default Users;

"use client";

import Search from "@/app/components/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/dashboard/user/users.module.css";
import Pagination from "@/app/components/dashboard/pagination/pagination";
import { getUser } from "@/app/apis/usersService";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUser());
  }, []);

  console.log(users);

  return (
    <div className="bg-white p-5 mt-5 rounded-[10px]">
      <div className="flex items-center justify-between mb-3">
        <Search placeholder="Search for a user" />
        <Link href="/dashboard/users/add">
          <button className="bg-slate-500 p-[10px] text-white border-none rounded-[5px] cursor-pointer">
            Add New User
          </button>
        </Link>
      </div>
      {/* Responsive Table Container */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image src="/user.png" alt="" width={40} height={40} />
              </td>
              <td>John Doe</td>
              <td>john@gmail.com</td>
              <td>13.01.2025</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/dashboard/users/text">
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default Users;
