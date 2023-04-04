import React, {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import { RiInstagramLine, RiTwitterLine } from 'react-icons/ri';
import { FiFacebook } from 'react-icons/fi';

const BioConnectContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 35px;

  h3{
    padding: 20px 0;
  }
`;

const BiographyContainer = styled.div`
  width : 500px;

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

const ConnectContainer = styled.div`  
  .icon{
    font-size: 32px;
    margin-right: 17px;
  }
`;

const BioConnect = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <BioConnectContainer>
      <BiographyContainer theme={theme}>
        <h3>Biography</h3>
        <p>Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. 
          Exicited on <span className='spanBlue'><b>React</b></span>, 
          <span className='spanLblue'><b> UX Research</b></span> and 
          <span className='spanGreen'><b> Agile</b></span>.</p>
      </BiographyContainer>
      <ConnectContainer>
        <h3>Lets connect</h3>
        <RiInstagramLine className='icon' />
        <RiTwitterLine className='icon' />
        <FiFacebook className='icon' />
      </ConnectContainer>
    </BioConnectContainer>
  )
}

export default BioConnect