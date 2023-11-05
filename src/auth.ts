import React, { useState } from "react";

export interface Auth {
  loggedIn: boolean;
}

export const AuthContext = React.createContext<Auth | undefined>(undefined);

export function useAuth() {
  const [auth, setAuth] = useState<Auth>({ loggedIn: false });
  return { auth, setAuth };
}
