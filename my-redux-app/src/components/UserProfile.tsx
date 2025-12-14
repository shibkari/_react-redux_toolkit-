import React from 'react';
import { useAppSelector } from '../redux/hooks';
import UserDetails from './UserDetails';
import type { Product } from '../redux/slices/productSlice';

interface UserProfileProps {
  user: Product;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={`user-card ${theme}`}>
      <h3>{user.name}</h3>
      <UserDetails user={user} />
    </div>
  );
};

export default React.memo(UserProfile);
