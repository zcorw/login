export interface userInfo {
  username?: string;
  email: string;
  password: string;
}

export interface loginInfo extends userInfo {
  id: string;
  token: string;
} 