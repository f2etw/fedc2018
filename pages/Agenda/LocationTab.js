import styled from 'styled-components';

const LocationTab = styled.div`
  font-size: 1.5rem;
  font-weight: ${({ active }) => (active ? '500' : '400')};    
  color: ${({ active }) => (active ? '#02f674' : '#C2B9EE')};
  position: relative;
  cursor: pointer;

  &:after{
    content: ${({ active }) => (active ? '""' : 'none')};
    position: absolute;
    background-color: white;
    width: 3.13rem;
    height: 0.25rem;
    border-radius: 3px;
    left: 0;
    top: 2.3rem;
  }
  
  &:not(:first-child){
    margin-left: 5.45rem;
  }
`;

export default LocationTab;
