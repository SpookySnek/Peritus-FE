import React from 'react'
import { Quote } from '../app/App'
import axios from 'axios'

interface QuoteListProps {
    datalist: Quote[]
}

const handleDelete = async (id) => {
    await axios.delete("https://localhost:7120/quotes/" + id, { data: id }
    ); window.location.reload()
}

const QuoteList = ({ datalist }: QuoteListProps) => {
    if (datalist.length === 0) {
        return <span>Loading quote...</span>
    }

    return (
        <>
            {datalist.map((e: Quote) =>
                <div className="wrapper">
                    <div className="card">
                        <div className="unflipped">
                            <h1>{e.quoteText} </h1>
                            <h3>{e.uploadDate.toString().slice(0, 10)}</h3>
                            <button className="cardButtons" id="text" onClick={() => handleDelete(e.id)}>Delete</button>
                        </div>
                    </div>
                </div>)}
        </>
    )
}

export default QuoteList