import React from 'react';
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/login')}>Login</button><br />
      
    </div>
  );
}

export default Main;
