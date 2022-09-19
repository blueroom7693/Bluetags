import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { isLogined } from "../atom";
import { response } from "../constants/response";
import { axiosInstance } from "./../axiosInstance";

interface IContext {
  isLogin: boolean;
  user: IUser;
}

export interface IUser {
  _id: string;
  username: string;
  name: string;
  password: string;
  admin: boolean;
  favoriteNft: [string];
  likes: [string];
}

export const DataContext = createContext<IContext>({} as IContext);

const DataProvider = ({ children }: any) => {
  const [isLogin, setIsLogin] = useRecoilState(isLogined);
  const [token, setToken, removeToken] = useCookies(["token"]);
  const [user, setUser] = useState({} as IUser);
  useEffect(() => {
    async function getUser() {
      if (token["token"] && token["token"] !== "undefined") {
        const data = await axiosInstance
          .get(`/api/v1/user/data/`, {
            headers: {
              Authorization: `Bearer ${token["token"]}`,
            },
          })
          .then((response) => {
            setIsLogin(true);
            setUser(response.data);
          })
          .catch((error) => {
            if (error.response.data.name === "TokenExpiredError") {
              setUser({} as IUser);
              setIsLogin(false);
              removeToken("token");
            }
          });
      }
    }
    getUser();
  }, [token]);

  return (
    <DataContext.Provider value={{ isLogin, user }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
