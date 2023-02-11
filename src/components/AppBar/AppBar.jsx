import {Nav, Link} from '../AppBar/AppBar.styled.jsx';

const AppBar = () => {
  return (
    <Nav>
      <Link to ="/">Home</Link>
      <Link to ="/movies">Movie</Link>
    </Nav>
  );
};

export default AppBar;
