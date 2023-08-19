import { useState } from "react";

interface FormProps {
    addFullShortLink: (newFullShortLink: string) => void; 
    addInputUrl : (newInputUrl: string) => void;
}

export const Form: React.FC<FormProps>  = ({ addFullShortLink, addInputUrl }) => {
    const [inputUrl, setInputUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const HandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (inputUrl === '') {
            setErrorMessage('Please add a link');
            return;
        }
        try {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputUrl}`);
            const data = await response.json();
            const fullShortLink = data.result.full_short_link;
            addFullShortLink(fullShortLink); 
            addInputUrl(inputUrl);
            setInputUrl(''); 
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="form-overlay">
            <form>
                <div>
                    <input
                        type="text"
                        placeholder="Shorten a link here..."
                        value={inputUrl}
                        onChange={(e) => setInputUrl(e.target.value)}
                        id={errorMessage ? "error-border" : ""} />
                    {errorMessage && <p className="error" id="urlError">{errorMessage}</p>}
                </div>
                <div><input type="submit" value="Shorten It!" onClick={HandleSubmit} /></div>
            </form>
        </div>
    );
};
