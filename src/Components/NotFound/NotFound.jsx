import React from 'react';
import './NotFound.scss';
import notFoundImage from '../../assets/Error1.png'; // Adjust the path to your image file
<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
</style>

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFoundImage} alt="Page Not Found" className="not-found__image" />
      <h1 className="not-found__title">Page Not Found</h1>
      <p className="not-found__message">
        The page you are looking for doesn’t exist. It may have been moved or removed altogether.
        Please try searching for some other page or return to the website’s homepage to find what you're looking for.
      </p>
      <button className="not-found__button" onClick={() => window.location.href = '/'}>Back to Home</button>
    </div>
  );
};

export default NotFound;
