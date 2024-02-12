import React from 'react'
import './Home.css'
import {Routes, Route, useNavigate} from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const navigateToTasks = () => {
    
    navigate('/Tasks');
  };
  return (
    <main className='container'>
        <h1 className='title'>
            Welcome To My Website 😀
        </h1>

        <div>
        </div>
    </main>
  )
}
