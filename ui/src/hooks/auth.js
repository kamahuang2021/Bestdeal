import {useState, useCallback, useEffect} from "react";

const storageName = "bestdeal";

// Nice hooks! But as I am not familiar with writing custom hooks, I thought hooks would typically
// take some parameters. What is the benefit of doing this compared to just exporting pure functions?
export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [ready, setReady] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken
    }));
  }, []);


  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.userId);
    }
    setReady(true);
  }, [login]);


  return { login, logout, token, userId, ready };
};
