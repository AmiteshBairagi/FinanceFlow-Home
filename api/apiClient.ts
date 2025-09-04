import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // set in .env
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: attach interceptors for auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  // These must match your actual backend URLs
  const publicEndpoints = [
    "/auth/user/login",
    "/auth/user/register",
  ];

  const isPublic = config.url
    ? publicEndpoints.some((endpoint) => config.url!.includes(endpoint))
    : false;

  if (token && !isPublic) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }

  console.log("Request URL:", config.url, "Auth:", config.headers.Authorization);

  return config;
});


export default apiClient;
