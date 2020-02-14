import React from 'react';
import LocalBeer from './LocalBeer';


var availableBeer = [  
  {  
    city: 'Seattle',
    selection: [  
      'Beer1',
      'Beer2'
    ]
  }
];
function LocalBeerList() {
  return(
    <div>
      <hr />
      {availableBeer.map((localBeer, index) => 
        <LocalBeer city={localBeer.city}
          selection = {localBeer.selection}
          key = {index} />
      )}
    </div>
  );
}

export default LocalBeerList;