import React, {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import { RiEarthFill } from 'react-icons/ri';
import { HiClipboardList } from 'react-icons/hi';

const WhatIDoCardContainer = styled.div`
    .iconContainer{
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: 1px solid #62d8ff;
        background-color: #323443;
        z-index: 2;
        position: relative;
        top: 35px;
        left: 95px;


        .icon{
            text-align: center;
            padding-top: 25%;
            font-size: 29px;
        }
    }

    .cardContainer{
        width: 262px;
        height: 190px;
        background: #323443;
        border-radius: 12px;
        text-align: center;

        h4{
            padding-top: 56px;
        }
        p{
            margin-top: 8px;
            width: 86%;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 26px;
            display: inline-block;
            letter-spacing: 1px;
            color: rgba(239, 237, 232, 0.65);
        }
    }

`;

const WhatIDoCard = () => {
  return (
    <WhatIDoCardContainer>
        <div className='iconContainer'>
            <div className='icon'><RiEarthFill /></div>
        </div>
        <div className='cardContainer'>
                <h4>Web Development</h4>
                <p>You will receive a customized plan for your fitness journey, and lots of support.</p>
        </div>
    </WhatIDoCardContainer>

  )
}

export default WhatIDoCard