import dotenv from "dotenv";
import connectDB from "./config/db";
import products from "./data/products";
import users from "./data/users";
import Order from "./models/orderModel";
import Product from "./models/productModel";
import User from "./models/userModel";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.create(users);
    await Product.create(products);
    await User.create(users);

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data Imported Successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.delete(users);
    await Product.delete(products);
    await User.delete(users);

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data Imported Successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};


if (process.argv[2] === "-destroy") {
    destroyData();
    }
    else {
        importData();
    }
    