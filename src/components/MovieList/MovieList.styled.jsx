import styled from "@emotion/styled";
import { NavLink} from "react-router-dom";

export const List = styled.ul`
   display: flex;
    flex-direction: column;
    gap: 5px; 
`
export const Link = styled(NavLink)`
    color: inherit;
`

