import React from 'react';
import PriceBox from './src/components/PriceBox/PriceBoxComponent.js';

const App = () => {
   return(
      <div>
         <h1>Simple, traffic-based pricing</h1>
         <p>Sign-up for our 30-day trial. No credit card required. </p>
         <PriceBox title = "Professional" 
            price = "$25"
            timeFrame = "mo"
            description = "abcd abcd" 
            btnTitle = "Buy now!"></PriceBox>
      </div>
   );
}
export default App;