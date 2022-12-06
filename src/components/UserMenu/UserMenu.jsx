import { useDispatch, useSelector } from 'react-redux';

import { FiLogOut } from 'react-icons/fi';

import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

import { Wrapper, Username, LogOutBtn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <Username>Welcome, {user.name}!</Username>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        <FiLogOut size={20} />
      </LogOutBtn>
    </Wrapper>
  );
};

export default UserMenu;
