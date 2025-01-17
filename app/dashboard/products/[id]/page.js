import style from "@/app/components/dashboard/products/singleProduct/singleProduct.module.css";

import Image from "next/image";

const SingleProduct = () => {
  return (
    <div className="space-y-10 py-10">
      <div className="max-w-[300px] text-center bg-slate-200 h-max rounded-[10px] p-5">
        <div className="w-[100%] bg-white h-[200px] relative rounded-[10px] mb-4 overflow-hidden">
          <Image src="/user.png" alt="" fill />
        </div>
        Iphone
      </div>
      <div className="flex-[3]  bg-white rounded-[10px] p-5">
        <form action="" className={style.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="JohnDoe@gmail.com" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="234" />
          <label>Color</label>
          <input type="number" name="Color" placeholder="black" />
          <label>Size</label>
          <textarea type="number" name="Size" placeholder="medium" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="service">Service</option>
            <option value="goods">Goods</option>
          </select>
          <label>Description</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            placeholder="description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
