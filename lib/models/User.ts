export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "instructor" | "student";
}

export async function getUser(id: string): Promise<User | null> {
  // Placeholder: In a real app, fetch from DB
  if (id === "mock") {
    return { id: "mock", name: "Mock User", email: "mock@example.com", password: "hashedpassword", role: "student" };
  }
  return null;
}

export default User; 