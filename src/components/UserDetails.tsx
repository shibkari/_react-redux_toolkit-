import React from 'react';
import { useAppSelector } from '../redux/hooks';
import type { Product } from '../redux/slices/productSlice';

interface UserDetailsProps {
  user: Product;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={`user-details ${theme}`}>
      <p className="user-role">{user.role}</p>
      <p className="user-status">{user.status}</p>
    </div>
  );
};

export default React.memo(UserDetails);
