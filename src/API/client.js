import axios from "axios";
export const client = axios.create({
    baseURL: "https://localhost:7153",
    headers: {
        "Content-Type": "application/json",
    },
});