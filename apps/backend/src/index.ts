import { User } from "@qeetro/types";

const user: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

console.log(user);
