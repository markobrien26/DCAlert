// User model based on the structure of github api at
// https://api.github.com/users/{username}
export interface User {
  _id: string;
  src_ip: string;
  Created_date: Date;
}