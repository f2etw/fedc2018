import styled from 'styled-components';

const BlurFilter = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
  filter: ${({ active }) => (active ? 'blur(20px)' : 'none')};
`;

export default BlurFilter;

