import React from 'react';
import renderer from 'react-test-renderer';
import Product from './Product';

const mockProduct =
  [
    {
      "id": "0001",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro1.jpg",
      "image2": "./assets/pro2.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0002",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro2.jpg",
      "image2": "./assets/pro3.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0003",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro3.jpg",
      "image2": "./assets/pro4.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0004",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro4.jpg",
      "image2": "./assets/pro5.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0005",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro5.jpg",
      "image2": "./assets/pro6.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0006",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro6.jpg",
      "image2": "./assets/pro7.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0007",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro7.jpg",
      "image2": "./assets/pro8.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0008",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro8.jpg",
      "image2": "./assets/pro9.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0009",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro9.jpg",
      "image2": "./assets/pro1.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0010",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro9.jpg",
      "image2": "./assets/pro1.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0011",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro11.jpg",
      "image2": "./assets/pro12.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    },
    {
      "id": "0012",
      "name": "Minimal Deco Furniture",
      "image": "./assets/pro10.jpg",
      "image2": "./assets/pro11.jpg",
      "category": "furniture",
      "discountPrice": "119.00",
      "price": "230.00"
    }
  ]


test('Products component', () => {
  const component = renderer.create(
    <Product {...mockProduct} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

//snapshot

