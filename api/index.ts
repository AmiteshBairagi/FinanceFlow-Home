
import { getProfile, login, registerUser } from "./auth.api";

export const api = {
    auth : {
        login,
        registerUser,
        getProfile
    }
}