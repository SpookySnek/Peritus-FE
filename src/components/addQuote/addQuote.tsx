import React, { useState } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { Quote } from '../app/App'

const AddQuote = () => {

    const [quote, addQuote] = useState<Quote>();
    const [quoteText, setQuoteText] = useState<string>("");
  
    const handleAdd = async () => {
      await axios.post("https://localhost:7120/quotes", {
        "quoteText": quoteText,
        "uploadDate": new Date(),
        "id": nanoid(14)
      })
      window.location.reload()
    }
  
  
  
    console.log(`quote ${quote}`);
  
    return (
      <div>
        <input type="text" value={quote?.quoteText} onChange={(e) => setQuoteText(e.target.value)} placeholder="Text" />
        <button className="addButton" onClick={handleAdd}>Add quote</button>
      </div>
    )
  }
  
  export default AddQuote