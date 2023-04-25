import React from 'react'
import { useSelector } from "react-redux";

const Dashboard = () => {
    const user = useSelector(state => state.user);
    
  return (
    <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
    </div>
  )
}

export default Dashboard