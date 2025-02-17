
export interface User {
  id: string;
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: string,
  country: string,
  role: string[],
  isActive: boolean,
  avatar: string
}
