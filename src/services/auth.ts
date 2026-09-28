export interface User {
  email: string;
  name: string;
  password: string;
}

const USER_KEY = "snail_races_user";
const SESSION_KEY = "snail_races_session";

export const saveUserToLocalStorage = (user: User) => {
  if (!user) {
    return false;
  }
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  return true;
}

export const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
}
export const loginUser = ( email: string, password: string): boolean => {
  const user = getUserFromLocalStorage();

  if (!user) {
    return false;
  }
  if (user.email !== email || user.password !== password) {
    return false;
  }
  localStorage.setItem(SESSION_KEY, "true");

  return true;
};

export const logoutUser = (): boolean => {
  try {
    localStorage.removeItem(SESSION_KEY);
    return true;
  } catch (error) {
    console.error("Error logging out user:", error);
    return false;
  }
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem(SESSION_KEY) === "true";
}