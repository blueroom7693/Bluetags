import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState, useResetRecoilState } from "recoil";
import { isLogined } from "./atom";

const TOKEN = "sangwan";

export const logUserOut = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN);
    const [isLogin, setIsLogin] = useRecoilState(isLogined);
    // useResetRecoilState(isLogined);
    setIsLogin(false);
  } catch (e) {}
};

export const logUserIn = async (response) => {
  try {
    const jsonValue = JSON.stringify(response.data.accessToken);
    await AsyncStorage.setItem(TOKEN, jsonValue);
    console.log(jsonValue);
  } catch (e) {}
};

// export const getUserStored = async (isLogin, setIsLogin) => {
//   //   const token = JSON.parse(await AsyncStorage.getItem(TOKEN));
//   const jsonValue = await AsyncStorage.getItem(TOKEN);
//   const token = JSON.parse(jsonValue);
//   //   const [isLogin, setIsLogin] = useRecoilState(isLogined);

//   if (token !== (undefined || null)) {
//     console.log(token);
//     setIsLogin(true);
//   }
// };
