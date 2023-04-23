import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import beerService from "../services/beerService";

export default function NewBeer (){

    const navigate = useNavigate()

    const initialState = {
        name:'',
        tagline:'',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    }

    const [newBeer,setNewBeer] = useState(initialState)
    const [error,setError] = useState(false)

    const handleChange = (e) => {
        setNewBeer(prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await beerService.createBeer(newBeer)
            navigate('/')
            alert(response.message)
        } catch (error) {
            setError(true)
        }
    }

    return (
        <>
        <div className="FormDiv">
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={newBeer.name} onChange={handleChange} required />
            <label>Tagline</label>
            <input type="text" name="tagline" required value={newBeer.tagline} onChange={handleChange} />
            <label>Description</label>
            <textarea type="text" name="description" required value={newBeer.description} onChange={handleChange} />
            <label>First Brewed</label>
            <input type="text" name="first_brewed" required value={newBeer.first_brewed} onChange={handleChange} />
            <label>Brewers Tips</label>
            <input type="text" name="brewers_tips" required value={newBeer.brewers_tips} onChange={handleChange} />
            <label>Attenuation Level</label>
            <input type="number" name="attenuation_level" required value={newBeer.attenuation_level} onChange={handleChange} />
            <label>Contributed By</label>
            <input type="text" name="contributed_by" required value={newBeer.contributed_by} onChange={handleChange} />
            
            <button id='addNew' type="submit" className="btn">ADD NEW</button>
            </form>
        </div>
        {error && <div className="errorDiv"><p>Sorry, can't create new Beer</p></div>}
        </>
    )
}