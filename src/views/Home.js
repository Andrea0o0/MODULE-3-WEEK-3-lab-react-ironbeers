import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import beerService from "../services/beerService";

export default function Home (){
    const navigate = useNavigate()
    const [error,setError] = useState(false)


    const handleRandom = async () => {
        try {
            const response =  await beerService.getRandomBeer()
            navigate(`/random/${response._id}`)
        } catch (error) {
            setError(true)
        }
    }


    return (
        <>
            <div className="cardsDiv">
               <div>
                    <Link to='/beers' >
                        <img src={require('../assets/beers.png')} alt='beers'/>
                        <h3>All beers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                    </Link>
               </div>
               <div onClick={handleRandom}>
                    <img src={require('../assets/random-beer.png')} alt='random'/>
                    <h3>Random beer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
               </div>
               <div>
                    <Link to='/new' >
                        <img src={require('../assets/new-beer.png')} alt='newbeer'/>
                        <h3>New beer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                    </Link>
               </div>
            </div>
            {error && <div className="errorDiv"><p>Sorry, no beers found</p></div>}
        </>
    )
}