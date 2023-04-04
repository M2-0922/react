import React, {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import { RiEarthFill } from 'react-icons/ri';
import { HiClipboardList } from 'react-icons/hi';
import WhatIDoCard from '../WhatIDoCard/WhatIDoCard';

const WhatIDoContainer = styled.div`
    width: 458px;

  .spanBlue{
    color: ${props => props.theme == "light" ? "#428ed1" : "#4CA9FF" }
  }
  .spanLblue{
    color: ${props => props.theme == "light" ? "#61b7d3" : "#62D9FF"}
  }
  .spanGreen{
    color: ${props => props.theme == "light" ? "#2dbf68" : "#80FFA3"}
  }
`;

const cardWrapper = styled.div`
    border: 1px solid #fff;
`;

const WhatIDo = () => {
  return (
    <>
        <WhatIDoContainer>
            <h3>What I do</h3>
            <p>Build and maintain websites, 
            <span className='spanGreen'><b> frontend dev</b></span> also have a mentorship called 
            <span className='spanLblue'><b> MOFON</b></span>. My motto is Beauty and function in equal measure as priority.</p>
        </WhatIDoContainer>
        <cardWrapper>
            <WhatIDoCard />
            <WhatIDoCard />
        </cardWrapper>
    </>
  )
}

export default WhatIDo