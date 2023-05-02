import React from 'react';
import DestinationsItem from './DestinationsItem';

function DestinationsList({destinations}) {
  return (
    <div className="destinations-list">
        <h1>Your Destination Awaits</h1>
        <main>
            {destinations.map((destination) => (
                <DestinationsItem 
                    key={destination.id}
                    image={destination.image}
                    name={destination.name}
                    location={destination.location}
                    description={destination.description}

                />
            ))}
        </main>
    </div>
  )
}

export default DestinationsList;