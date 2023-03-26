import React,{ createContext, useState} from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    
    const login = (data) => {
        const name = data.name;
        localStorage.setItem("name", name);
        localStorage.setItem("role", data.role);
        if(data.role === "admin") {
            navigate("/admin");
        }
        else {
            navigate("/user");
        }
        console.log(data.role);
    }

    const logout = () => {
        localStorage.removeItem("role");
        localStorage.removeItem("name");
        navigate("/");
    }

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
