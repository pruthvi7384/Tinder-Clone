import React,{ useState,useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import TinderCard from 'react-tinder-card';
import CardButtons from './CardButtons'
import db from './firebase';

function TinderCards() {
    const[pepole,setPeple] = useState([])
    useEffect(() =>{
        getDocs(collection(db, 'pepole')).then((snapshorts)=>{
            setPeple(snapshorts.docs.map((doc)=>(doc.data())));
        })
    },[])
    return (
        <div>
            <div className="tinderCards_container">
                {pepole.map((person)=>(
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <div style={{
                            backgroundImage:`url(${person.url})`}}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            <CardButtons/>
        </div>
    )
}

export default TinderCards
