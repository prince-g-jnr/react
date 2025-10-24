import { useState } from "react";

function NameTag() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');

    const formattedName = name.trim() || "Your Name";
    const formattedTitle = title.trim() || "Your title";
    const formattedCompany = company.trim() || "Your Company";

    function handleDownload() {
        alert(`
            Name: ${formattedName}
            Title: ${formattedTitle}
            Company: ${formattedCompany}`
        )
    }


    return (
        <div className="gen-cont">
            <h1>--- Name Tag ---</h1>
            <div className="input-cont">
                <label>Name:</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name..."
                />
                <label>Title:</label>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your title..."
                />
                <label>Company:</label>
                <input 
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enter your company..."
                />
            </div>
            <div className="info-container">
                <p>Hello, my name is</p>
                <h2>{formattedName}</h2>
                <h3>{formattedTitle}</h3>
                <h4>{formattedCompany}</h4>
            </div>

            <div className="btn">
                <button onClick={handleDownload}>Download</button>
            </div>
            
        </div>
    )
};

export default NameTag;