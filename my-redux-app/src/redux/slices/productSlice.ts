import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  role: string;  // price
  status: string;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    { id: 1, name: 'Ноутбук Lenovo IdeaPad', role: '15999 грн', status: 'В наявності' },
    { id: 2, name: 'Смартфон Samsung Galaxy A54', role: '14999 грн', status: 'В наявності' },
    { id: 3, name: 'Навушники Sony WH-1000XM5', role: '12499 грн', status: 'Закінчується' },
    { id: 4, name: 'Планшет Apple iPad Air', role: '22999 грн', status: 'В наявності' },
  ],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<Product, 'id'>>) => {
      const newProduct: Product = {
        ...action.payload,
        id: Date.now(),
      };
      state.products.push(newProduct);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
