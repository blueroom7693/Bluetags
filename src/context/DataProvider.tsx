import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLogined, allSubscirbeProject, token } from "../atom";
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
  const userToken = useRecoilValue(token);
  const [isLogin, setIsLogin] = useRecoilState(isLogined);
  const [subscribedProject, setSubscribedProject] =
    useRecoilState(allSubscirbeProject);
  const [user, setUser] = useState({} as IUser);
  useEffect(() => {
    async function getUser() {
      if (userToken !== "undefined") {
        const data = await axiosInstance
          .get(`/api/v1/user/data/`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((response) => {
            setUser(response.data);
            setSubscribedProject(user.favoriteNft);
          })
          .catch((error) => {
            if (error.response.data.name === "TokenExpiredError") {
              setUser({} as IUser);
            }
          });
      }
    }
    getUser();
  }, [userToken]);

  return (
    <DataContext.Provider value={{ isLogin, user }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
