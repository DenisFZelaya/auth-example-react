import { createContext, useCallback, useContext, useMemo, useState } from "react";

const MY_AUTH_APP_1 = "MY_AUTH_APP_1";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(MY_AUTH_APP_1 ?? false) // si es null cambia a false
  );

  const login = useCallback(function () {
    window.localStorage.setItem(MY_AUTH_APP_1, true);
    setIsAuthenticated(true);
  }, []); // esto nos permite solo ejecutarla una vez

  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP_1);
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext(){
    return useContext(AuthContext);
}
