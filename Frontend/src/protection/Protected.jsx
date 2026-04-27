import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = ({children}) => {
    const [isAuth, setIsAuth] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
  const verifyAuth = async () => {
    try {
      const res = await fetch('https://localhost:8080/auth/verify', {
        credentials: 'include'
      });
      if (res.ok) {
        setIsAuth(true);
      } else {
        navigate('/login');
      }
    } catch {
      navigate('/login');
    }
  };
  
  verifyAuth();
}, [navigate]); 

    if(isAuth === null) return <div>Loading...</div>
    return isAuth ? children : null
}

export default Protected
