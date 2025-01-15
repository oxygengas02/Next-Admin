import Pagination from "@/app/components/dashboard/pagination/pagination";
import Search from "@/app/components/dashboard/search/search";
import styles from "@/app/components/dashboard/products/products.module.css";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div className="bg-white p-5 mt-5 rounded-[10px]">
      <div className="flex items-center justify-between mb-3">
        <Search placeholder="Search for product" />
        <Link href="/dashboard/products/add">
          <button className="bg-slate-500 p-[10px] text-white border-none rounded-[5px] cursor-pointer">
            Add New product
          </button>
        </Link>
      </div>
      {/* Responsive Table Container */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image src="/product.png" alt="" width={40} height={40} />
              </td>
              <td>Iphone</td>
              <td>$1000</td>
              <td>description</td>
              <td>13.01.2025</td>
              <td>72</td>
              <td>
                <div className={styles.buttons}>
                  <Link href="/">
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

export default Products;
