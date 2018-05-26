import styled from 'styled-components';

const BlurFilter = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  filter: ${({ active }) => (active ? 'blur(20px)' : 'none')};

  @media (max-width: 768px) {
    display: ${({ active }) => (active ? 'none' : 'flex')};
  }
`;

export default BlurFilter;
