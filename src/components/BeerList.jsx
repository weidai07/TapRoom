import React from 'react';
import Beer from './Beer';
import Grid from '@material-ui/core/Grid';

var masterBeerList = [  
  {  
    day: 'Weekday',
    location: 'Seattle, Washington',
    hours: '24/7',
    booth: 'AA'
  },
  {  
    day: 'Weekdend',
    location: 'Seattle, Washington',
    hours: '24/7',
    booth: 'AA'
  }
];

function BeerList() {
  return (
    <div>
      <Grid container spacing={2}>
        {masterBeerList.map((beer, index) => 
          <Grid item xs={6}>
            <Beer day={beer.day}
              location={beer.location}
              hours={beer.hours}
              booth = {beer.booth}
              key = {index}/>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
export default BeerList;