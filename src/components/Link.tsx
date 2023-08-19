import { useState } from "react";


interface LinkProps {
  fullShortLink: string;
  inputUrl: string;
}


export const Link: React.FC<LinkProps> = ({ fullShortLink, inputUrl }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullShortLink)
        .then(() => {
            setIsCopied(true);
        })
        .catch((error) => {
            console.error('Copy failed:', error);
        });
};
  return (
    <div className="link">
        <p className="default-link">{inputUrl}</p>
        <div className="shortened">
            <p className="shortened-link">{ fullShortLink }</p>
            <button className={`copy-button ${isCopied ? 'copied' : ''}`} onClick={copyToClipboard}>{isCopied ? 'Copied!' : 'Copy'}</button>
        </div>
    </div>
  )
}