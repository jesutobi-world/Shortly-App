

export const Footer = () => {
  return (
    <footer>
    <div className="logo">
      <p>Shortly</p>
    </div>
    <section className="footer-nav">
      <div className="features">
        <h5>Features</h5>
        <a href="#">Link Shortening</a>
        <a href="#">Branded Links</a>
        <a href="#">Analytics</a>
      </div>
      <div className="resources">
        <h5>Resources</h5>
        <a href="#">Blog</a>
        <a href="#">Developers</a>
        <a href="#">Support</a>
      </div>
      <div className="company">
        <h5>Company</h5>
        <a href="#">About</a>
        <a href="#">Our Team</a>
        <a href="#">Careers</a>
        <a href="#">Contact</a>
      </div>
    </section>
    <section className="socials">
      <a href="#">
        <i className="fa-brands fa-square-facebook"></i>
      </a>
      <a href="#">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a href="#">
        <i className="fa-brands fa-pinterest"></i>
      </a>
      <a href="#">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </section>
  </footer>
  )
}
