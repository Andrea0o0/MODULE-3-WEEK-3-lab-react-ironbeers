import React,{useState,useEffect} from "react";
import beerService from "../services/beerService";
import { Link } from "react-router-dom";

export default function Beers (){

    const [beers,setBeers] = useState(undefined)
    const [error,setError] = useState(false)

    useEffect(()=>{
        getBeers()
    },[])

    const getBeers = async () => {
        try {
            const response = await beerService.getBeers()
            setBeers(response)
          } catch (error) {
            setError(true)
          }
    }


    return (
        <>
        {beers &&
        (<div className="BeersCardDiv">
            {beers.map(elem => 
                <Link to={`/beers/${elem._id}`} key={elem._id} >
                    <>
                        <div>
                            <img src={elem.image_url} alt={elem.name} />
                        </div>
                        <div>
                            <h3>{elem.name}</h3>
                            <h2>{elem.tagline}</h2>
                            <p><b>Created by:</b> {elem.contributed_by.split('<')[0]}</p>  
                        </div>                          
                    </>
                </Link>    
                )}
        </div>)}   
        {error && <div className="errorDiv"><p>Sorry, no beers found</p></div>}
        </>
    )
}