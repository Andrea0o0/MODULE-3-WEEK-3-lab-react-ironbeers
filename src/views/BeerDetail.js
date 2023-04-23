import React,{ useState, useEffect } from "react";
import beerService from "../services/beerService";
import { useParams } from "react-router-dom";

export default function BeerDetail (){
    const { beerId } = useParams();

    const [beer,setBeer] = useState(undefined)
    const [error,setError] = useState(false)

    useEffect(()=>{
        getBeers()
    },[])

    const getBeers = async () => {
        try {
            const response = await beerService.getOneBeer(beerId)
            setBeer(response)
          } catch (error) {
            setError(true)
          }
    }


    return (
        <>
        {beer &&
        (<div className="BeerCardDiv"> 
            <div>
                <div>
                    <img src={beer.image_url} alt={beer.name} />
                </div>        
                <div>
                    <div>
                        <h3>{beer.name}</h3>
                        <h3>{beer.attenuation_level}</h3>
                    </div>
                    <div>
                        <p>{beer.tagline}</p>
                        <p><b>{beer.first_brewed}</b></p>
                    </div>
                <p>{beer.description}</p>
                <p><b>Created by:</b> {beer.contributed_by.split('<')[0]}</p>   
                </div>                     
            </div>                    
        </div>)}   
        {error && <div className="errorDiv"><p>Sorry, no beers found</p></div>}
        </>
    )
}