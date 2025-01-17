const { client } = require("../helpers/helpers");

const getUser = async () => {
  try {
    const response = await client.get("/users/getallusers");
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export { getUser };
