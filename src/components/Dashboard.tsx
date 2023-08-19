import imageBrand from '../images/icon-brand-recognition.svg'
import imageRecords from '../images/icon-detailed-records.svg'
import imageCustomize from '../images/icon-fully-customizable.svg'
import { Links } from './Links'
import { Form } from './Form'
import { useState, useEffect } from "react";


export const Dashboard = () => {
  const [fullShortLinks, setFullShortLinks] = useState<string[]>([]);
  const [inputUrls, setInputUrls] = useState<string[]>([]); 

  useEffect(() => {
    const storedFullShortLinks = localStorage.getItem('fullShortLinks');
    const storedInputUrls = localStorage.getItem('inputUrls');

    if (storedFullShortLinks && storedInputUrls) {
      setFullShortLinks(JSON.parse(storedFullShortLinks));
      setInputUrls(JSON.parse(storedInputUrls));
    }
  }, []);

  const addFullShortLink = (newFullShortLink: string) => {
    setFullShortLinks(prevFullShortLinks => [...prevFullShortLinks, newFullShortLink]);
    localStorage.setItem('fullShortLinks', JSON.stringify([...fullShortLinks, newFullShortLink]));

  };
  const addInputUrl = (newInputUrl:string) => {
    setInputUrls(prevInputUrls => [...prevInputUrls, newInputUrl]);
    localStorage.setItem('inputUrls', JSON.stringify([...inputUrls, newInputUrl]));

  }
  return (
    <section className="cards">
      <Form addFullShortLink={addFullShortLink} addInputUrl={addInputUrl} />
      <Links fullShortLinks={fullShortLinks} inputUrls={inputUrls}/>

      <div className="stats">
        <h2>Advanced Statistics</h2>
        <p> Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="dashboard">
        <div className="line"></div>
        <div className="card">
          <div className="icon"><img src={imageBrand} alt="brand" /></div>
          <h3>Brand Recognition</h3>
          <p> Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <div className="card records">
          <div className="icon"><img src={imageRecords} alt="brand" /></div>
          <h3>Detailed Records</h3>
          <p> Gain insights into who is clicking your links. Knowing when and where
            people engage with your content helps inform better decisions.</p>
        </div>
        <div className="card customize">
          <div className="icon"><img src={imageCustomize} alt="brand" /></div>
          <h3>Fully Customizable</h3>
          <p> Improve brand awareness and content discoverability through customizable
            links, supercharging audience engagement.</p>
        </div>
      </div>
    </section>
  )
}
