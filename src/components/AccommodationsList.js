import React from 'react'
import AccomodationItem from './AccommodationItems';

function AccommodationItems({AccomodationItem}) {
      return (
        <div className='container'>
            <h1>HOTELS AVAILABLE FOR BOOKING</h1>
            <div className='accomodation-list'>
                {/* <img src="https://static.wixstatic.com/media/4b855c29f0fa4015b5e1adfda7e53fde.jpg/v1/fill/w_636,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4b855c29f0fa4015b5e1adfda7e53fde.jpg" alt="" /> */}
                <h2> Hotels around town</h2>
                <main>
                    {accomodations.map((accomodation) => (
                        <AccomodationsItem 
                            key={accomodation.id}
                            name={accomodation.name}
                            image={accomodation.image}
                            location={accomodation.location}

                        />
                    ))}
                </main>
                
            </div>
    
            
        </div>
      );
    }  

export default RestaurantsList;