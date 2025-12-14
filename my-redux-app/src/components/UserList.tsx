import React from 'react';
import { useAppSelector } from '../redux/hooks';
import UserProfile from './UserProfile';

const UserList = () => {
  const products = useAppSelector((state) => state.product.products);
  const theme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={`user-list ${theme}`}>
      <h2>Каталог товарів</h2>
      <p className="user-count">Всього товарів: {products.length}</p>
      <div className="users-grid">
        {products.map((product) => (
          <UserProfile key={product.id} user={product} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(UserList);
