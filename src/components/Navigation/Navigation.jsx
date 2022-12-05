import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Phone Book</Link>}
    </nav>
  );
};

export default Navigation;
