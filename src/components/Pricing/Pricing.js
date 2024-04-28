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

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to='/tracked'>
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiRock /> */}
                  <img src={bus} width={220} height={220}></img>
                </PricingCardIcon>
                 <PricingCardPlan>Track Buses Near</PricingCardPlan>
                <PricingCardCost>Yourself!</PricingCardCost>
                {/* <PricingCardLength></PricingCardLength> */}
                <PricingCardFeatures>
                  {/* <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature> */}
                </PricingCardFeatures>
                <Button primary>Track Buses</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiCrystalBars /> */}
                  <img src={Crowd} width={220} height={220}></img>
                </PricingCardIcon>
                <PricingCardPlan>Live Crowd Density</PricingCardPlan>
                <PricingCardCost>Monitoring!</PricingCardCost>
                {/* <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  {/* <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature> */}
                </PricingCardFeatures>
                <Button primary>Check Crowd Density</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/ticket'>
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiCutDiamond /> */}
                  <img src={ticket} width={220} height={220}></img>
                </PricingCardIcon>
                <PricingCardPlan>Book Your</PricingCardPlan>
                <PricingCardCost>Ticket!</PricingCardCost>
                {/* <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  {/* <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature> */}
                </PricingCardFeatures>
                <Button primary>Book Ticket</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/report'>
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiRock /> */}
                  <img src={grievances} width={220} height={220}></img>
                </PricingCardIcon>
                 <PricingCardPlan>Report Your</PricingCardPlan>
                <PricingCardCost>Grievances!</PricingCardCost>
                {/* <PricingCardLength></PricingCardLength> */}
                <PricingCardFeatures>
                  {/* <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature> */}
                </PricingCardFeatures>
                <Button primary>Report</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing