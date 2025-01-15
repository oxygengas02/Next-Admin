import Image from "next/image";
import styles from "./transaction.module.css";

export default function Transaction() {
  const tdstyle = "10px";
  return (
    <div className="bg-white p-5 rounded-[10px]">
      <h2 className="mb-5 font-[200]">Latest Transaction</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.userimage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.userimage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.userimage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.userimage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/user.png"
                  alt="user image"
                  width={40}
                  height={40}
                  className={styles.userimage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
