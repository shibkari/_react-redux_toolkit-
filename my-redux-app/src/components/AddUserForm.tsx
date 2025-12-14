import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addProduct } from '../redux/slices/productSlice';

const AddUserForm = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    status: 'В наявності',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.role) {
      dispatch(addProduct(formData));
      setFormData({ name: '', role: '', status: 'В наявності' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={`add-user-form ${theme}`}>
      <h3>Додати новий товар</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Назва товару"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Ціна"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="В наявності">В наявності</option>
          <option value="Закінчується">Закінчується</option>
          <option value="Немає в наявності">Немає в наявності</option>
        </select>
        <button type="submit" className="submit-btn">Додати</button>
      </form>
    </div>
  );
};

export default React.memo(AddUserForm);
