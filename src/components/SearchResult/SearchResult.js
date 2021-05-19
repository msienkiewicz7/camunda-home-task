import React from 'react'

import "./SearchResult.css"


export default function SearchResult({ title, description }) {


    return (
        <div className="single-search-result">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}