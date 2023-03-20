import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import CardList from './components/CardList';

test('renders react app', () => {
  const { getByText } = render(
    <BrowserRouter>
    <App />
  </BrowserRouter>
  );

  expect(getByText(/about/i)).toBeInTheDocument();
});


test('card list test', () => {
  const { getByText } = render(
      <CardList cards={[{
        id: "prduct_1",
        imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "headphone",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, eum"
    },
    {
        id: "prduct_2",
        imageSrc: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
        title: "headphone",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, eum"
    },
    {
        id: "prduct_3",
        imageSrc: "https://images.unsplash.com/photo-1618005198920-f0cb6201c115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "Colors",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, eum"
    },
    {
        id: "prduct_4",
        imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "headphone",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, eum"
    },
    {
        id: "prduct_5",
        imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "headphone",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, eum"
    },
    {
        id: "prduct_6",
        imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        title: "headphone",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, eum"
    }
]}/>
  );

  expect(getByText(/Colors/i)).toBeInTheDocument();
});