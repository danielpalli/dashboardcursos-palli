export interface UserResponse {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string[];
  active: boolean;
  avatar?: string;
}

