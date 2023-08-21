import { useState } from "react";

export const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(window.innerWidth >=1000)
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <header>
    <section>
      <div className="logo">
        <p>Shortly</p>
      </div>
      <div className="hamburger" 
      onClick={toggleNav}
      >
        <i className="fa-solid fa-bars"></i>
      </div>
    </section>
    <nav style={{ display: isNavVisible ? "flex" : "none" }}>
      <section className="border">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </section>
      <section>
        <a href="#">Login</a>
        <a href="#" className="button">Sign Up</a>
      </section>
    </nav>
  </header>
  )
}
