import imageBrand from '../images/icon-brand-recognition.svg'
import imageRecords from '../images/icon-detailed-records.svg'
import imageCustomize from '../images/icon-fully-customizable.svg'

export const Dashboard = () => {
  return (
    <section className="cards">
    <div className="form-overlay">
      <form>
        <div>
          <input type="text" placeholder="Shorten a link here..."/>
          <p className="error" id="urlError">Please add a link</p>
        </div>
        <div><input type="submit" value="Shorten It!"/></div>
      </form>
    </div>
    <div className="stats">
      <h2>Advanced Statistics</h2>
        <p> Track how your links are performing across the web with our advanced statistics dashboard.</p>
    </div>
    <div className="dashboard">
      <div className="line"></div>
      <div className="card">
        <div className="icon"><img src={imageBrand} alt="brand"/></div>
        <h3>Brand Recognition</h3>
        <p> Boost your brand recognition with each click. Generic links don’t 
          mean a thing. Branded links help instil confidence in your content.</p>
      </div>
      <div className="card records">
        <div className="icon"><img src={imageRecords} alt="brand"/></div>
        <h3>Detailed Records</h3>
        <p> Gain insights into who is clicking your links. Knowing when and where 
          people engage with your content helps inform better decisions.</p>
      </div>
      <div className="card customize">
        <div className="icon"><img src={imageCustomize} alt="brand"/></div>
        <h3>Fully Customizable</h3>
        <p> Improve brand awareness and content discoverability through customizable 
          links, supercharging audience engagement.</p>
      </div>
    </div>
  </section>
  )
}
