import style from "@/app/components/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className="bg-white p-5 rounded-[10px] mt-5">
      <form action="" className={style.form}>
        <input type="text" placeholder="Title" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose a Category</option>
          <option value="goods">Goods</option>
          <option value="service">Service</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <textarea
          name="description"
          id="description"
          rows="8"
          placeholder="Description"
        ></textarea>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
