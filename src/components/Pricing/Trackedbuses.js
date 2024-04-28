import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import bus from "../../images/bus.jpg";
import Crowd from "../../images/Crowd.jpg";
import ticket from "../../images/ticket.jpg";
import grievances from "../../images/grievances.jpg";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

const Trackedbuses = () => {
  return (
   <PricingContainer>
     <PricingCard to='/tracked'>
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiRock /> */}
                  <img src={bus} width={200} height={200}></img>
                </PricingCardIcon>
                 <PricingCardPlan>Live Location :- Rohini</PricingCardPlan>
                 <PricingCardPlan>Distance from you :- 10 km</PricingCardPlan>
                 <PricingCardPlan>Time to reach You :- 25 min</PricingCardPlan>
                
                {/* <PricingCardLength></PricingCardLength>
                <PricingCardFeatures> */}
                  {/* <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature> */}
                {/* </PricingCardFeatures> */}
                <Button primary>View Bus Details/Route</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/tracked'>
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiRock /> */}
                  <img src={bus} width={200} height={200}></img>
                </PricingCardIcon>
                 <PricingCardPlan>Live Location :- Saket</PricingCardPlan>
                 <PricingCardPlan>Distance from you :- 18 km</PricingCardPlan>
                 <PricingCardPlan>Time to reach You :- 36 min</PricingCardPlan>
                
                {/* <PricingCardLength></PricingCardLength>
                <PricingCardFeatures> */}
                  {/* <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature> */}
                {/* </PricingCardFeatures> */}
                <Button primary>View Bus Details/Route</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/tracked'>
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiRock /> */}
                  <img src={bus} width={200} height={200}></img>
                </PricingCardIcon>
                 {/* <PricingCardPlan>Travel Co. name :- Highway travels</PricingCardPlan>
                 <PricingCardPlan>Bus no. :- DL 3CR 9556</PricingCardPlan> */}
                 <PricingCardPlan>Live Location :- Agra</PricingCardPlan>
                 <PricingCardPlan>Distance from you :- 240 km</PricingCardPlan>
                 <PricingCardPlan>Time to reach You :- 3 hr</PricingCardPlan>
                
                {/* <PricingCardLength></PricingCardLength>
                <PricingCardFeatures> */}
                  {/* <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature> */}
                {/* </PricingCardFeatures> */}
                <Button primary>View Bus Details/Route</Button>
              </PricingCardInfo>
            </PricingCard>
   </PricingContainer>
  )
}

export default Trackedbuses