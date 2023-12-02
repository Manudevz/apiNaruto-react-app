import { useState, useEffect } from "react"
import { CustomCard } from "./Card"

const Cards = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharactersFromApi = async()=>{
      try {
        const response = await fetch('https://narutodb.xyz/api/character')
        if(!response.ok){
           throw new Error('error fetching')
        }
        const characterFromApi = await response.json()

        setCharacters(characterFromApi.characters)
        
      } catch (error) {
        console.log("🚀 ~ file: Cards.jsx:15 ~ characters ~ error:", error.message)
      }
    }
    getCharactersFromApi()
  
  }, [])
  
  return (
        characters?.map(el => (
          <CustomCard key={`${el.name}${el.id}`} name={el.name} />
        ))
  )
}

export default Cards