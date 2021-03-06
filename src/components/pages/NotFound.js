import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center  mt-32 wow animate__animated animate__shakeX">
    <div className=" text-3xl md:text-9xl dark:text-white "><b>404</b> - No Encontrada</div>

    <Link to="/react-dinterweb">
      <h1 className="text-4xl mt-52 dark:text-white"> <i class="fas fa-home dark:text-white"></i> Inicio </h1>
    
    </Link>
  </div>
);

export default NotFound;