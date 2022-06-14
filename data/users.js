import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Karim Khan",
    email: "karim@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Akib Khan",
    email: "akib@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;