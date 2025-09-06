import apiClient from "./apiClient";



export const login = (username: string, password: string) =>
    apiClient.post("/auth/user/login", { username, password });



// export const register = (data: {firstName:string; lastName:string; email:string; password:string;}) =>
//     apiClient.post("/auth/user/register", data);



export const registerUser = async (payload: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}) => {
    try {
        const endpoint = "/auth/user/register";
        const response = await apiClient.post(endpoint, payload);

        if (response) {
            const message = response.data;

            if (message === "User Saved In The Database Successfully") {
                return message;
            }
        }

        throw new Error("Registration failed");
    } catch (error: any) {
        console.error("Register API failed:", error);
        throw error;
    }
};




export const getProfile = () =>
    apiClient.get("/auth/user/profile");