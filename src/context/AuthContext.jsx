import React,{ createContext, useState} from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        if(data.role === "admin") {
            navigate("/admin");
        }
        else {
            navigate("/user");
        }
        console.log(user);
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
