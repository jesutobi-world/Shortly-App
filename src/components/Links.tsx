import {Link} from './Link'

interface LinksProps {
  fullShortLinks: string[];
  inputUrls: string[]
}

export const Links: React.FC<LinksProps> = ({ fullShortLinks,inputUrls }) => {
  return (
      <div className="links">
          {fullShortLinks.map((fullShortLink:string, index) => (
              <Link key={index} fullShortLink={fullShortLink} inputUrl={inputUrls[index]} />
          ))}
      </div>
  );
};
