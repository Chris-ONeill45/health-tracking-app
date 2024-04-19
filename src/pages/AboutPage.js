import React from 'react';
import '../styles/public-pages.css';

const AboutPage = () => {
  return (
    <div className="public-page">
      <header className="public-page-header">
        <h2>About Us</h2>
        <p className="about-p-header">Welcome to our health tracking app!</p>
      </header>
      <main className="public-page-main">
        <p className="about-p">
          Created by Chris, Nicholas, and James, our app is designed to help you
          easily monitor and manage your weight.
        </p>
        <p className="about-p">
          With our app, you can conveniently record your weight and have it
          securely saved to your account.
        </p>
        <p className="about-p">
          Whether you are looking to lose weight, maintain a healthy lifestyle,
          or simply track your progress, our user-friendly interface makes it
          easy to stay on top of your health goals.
        </p>
        <p className="about-p">
          Our team is dedicated to providing you with a seamless and effective
          tool for managing your health journey. We believe that tracking your
          weight should be simple, intuitive, and accessible to everyone.
        </p>
        <p className="about-p">
          Thank you for choosing our health tracking app to support you on your
          wellness journey!
        </p>
      </main>
    </div>
  );
};
export default AboutPage;
