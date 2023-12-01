import { screens } from "../types/navigation";

export const navigate = (screen: screens) => {
    return {
        type: "NAVIGATE",
        payload: screen,
    };
};

export const setUserCredentials = (user: string) => {
    return {
      type: "SETUSER",
      payload: user,
    };
  };