import React, { useState } from 'react'


export default function Form() {
    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText(event.target.value)

    }



    const handleUpBtn = () => {
        setText(text.toUpperCase())
    }
    const handleLoBtn = () => {
        setText(text.toLowerCase())
    }
    const handleCmpBtn = () => {
        setText((text.replace(/\s/g, "")).replace(/\r?\n|\r/, ""))
    }
    const handleCpyBtn = () => {
        navigator.clipboard.writeText(text);
    }
    const handleClrBtn = () => {
        setText("")
    }

    return (
        <div>

            <main>
                <div className="container py-4">
                    <header className="pb-3 mb-4 border-bottom my-4">
                        <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                            <h3>Text Converter</h3>
                        </a>
                    </header>

                    <div className="px-5 py-1 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <div className="mb-3">
                                <label htmlFor="FormControlTextarea1" className="form-label fs-4 "><h3>Enter Text Here</h3></label>
                                <textarea onChange={handleChange} className="form-control" value={text} id="FormControlTextarea1" rows="5" placeholder='Start typing'></textarea>
                            </div>
                            <div className=''>
                            <button className="btn btn-warning btn-md me-2 my-1" type="button" onClick={handleUpBtn} >To Upper Case</button>
                            <button className="btn btn-warning btn-md me-2 my-1" type="button" onClick={handleLoBtn}>To Lower Case</button>
                            <button className="btn btn-warning btn-md me-2 my-1" type="button" onClick={handleCmpBtn}>Compress Text</button>
                            <button className="btn btn-warning btn-md me-2 my-1" type="button" onClick={handleCpyBtn}>Copy Text</button>
                            <button className="btn btn-warning btn-md me-2 my-1" type="button" onClick={handleClrBtn}>Clear All</button>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-md-stretch">
                        <div className="col-md-6">
                            <div className="h-100 p-5 bg-light rounded-3">
                                <h3>Your Text Summary</h3>

                                <ul className="list-group my-5">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                       Total charecters in your text
                                        <span className="badge bg-warning text-dark rounded-pill">{text.length}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                    Total words in your text
                                        <span className="badge bg-warning text-dark rounded-pill">{text.split(" ").filter((element)=>{return element.length !== 0}).length}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                      {  text.length === 0 ? "Enter some text to see result":"Average time to read " + (0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length).toString().slice(0, 4) + " minutes."} 
                 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="h-100 p-5 bg-light rounded-3" style={{overflow : "auto"}}>
                                <h3>Preview</h3>
                                <p>{text.length === 0 ? "Enter some text to see preview" : text } </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    )
}
