import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {
    const [cookies] = useCookies(['adminBlogCookie']);
    const navigate = useNavigate();

    useEffect(() => {
        if (!cookies?.adminBlogCookie) {
            navigate('/admin/login');
        }
    }, [cookies, navigate]);

    return children;
};

export default ProtectedAdminRoute;
