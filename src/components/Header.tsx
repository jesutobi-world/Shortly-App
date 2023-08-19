

export const Header = () => {
  return (
    <header>
    <section>
      <div className="logo">
        <p>Shortly</p>
      </div>
      <div className="hamburger">
        <i className="fa-solid fa-bars"></i>
      </div>
    </section>
    <nav>
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
