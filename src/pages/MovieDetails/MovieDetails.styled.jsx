import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const TopWrapp = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
  box-shadow: 5px 5px 20px #412a95;
`;
export const Img = styled.img`
  max-width: 250px;
`;
export const List = styled.ul`
  display: flex;
  gap: 5px;
`;
export const BottomWrapp = styled.div`
  margin-left: 30px;
`;
export const Links = styled(Link)`
  color: #f8f8f8;

  &.active {
    color: #412a95;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #412a95;
  }
`;

