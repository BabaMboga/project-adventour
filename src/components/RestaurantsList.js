import React from 'react'
import DestinationsItem from './DestinationsItem';

function RestaurantsList({restaurants}) {
      return (
        <div className='container'>
            <h1>THE RESTAURANTS IN NAIROBI</h1>
            <div className='restaurants-list'>
                <img src="https://static.wixstatic.com/media/4b855c29f0fa4015b5e1adfda7e53fde.jpg/v1/fill/w_636,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4b855c29f0fa4015b5e1adfda7e53fde.jpg" alt="" />
                <h2> Restaurants around town</h2>
                <main>
                    {restaurants.map((restaurant) => (
                        <DestinationsItem 
                            key={restaurant.id}
                            image={restaurant.image}
                            location={restaurant.location}

                        />
                    ))}
                </main>
                
            </div>
    
            
        </div>
      );
    }  

export default RestaurantsList;