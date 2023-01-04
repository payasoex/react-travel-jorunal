import React from "react"
import data from "./data"
import Hero from "./components/Hero"
import Journal from "./components/Journal"

export default function App() {
    const dataJournal = data.map((item) => {
        return (
            <Journal 
            key={item.id}
            {...item}
            />
        )
    })
    
    return (
        <div>
            <Hero />
            {dataJournal}
        </div>
    )
}