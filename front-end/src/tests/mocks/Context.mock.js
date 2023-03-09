export const contextValues = {
  productsArray: [],
  setProductsArray: jest.fn(),
  insertProp: false,
  setIsertProp: jest.fn(),
  isLoged: false,
  setIsLoged: jest.fn(),
  cartProducts: [],
  setCartProducts: jest.fn(),
  totalValue: 0,
  setTotalValue: jest.fn(),
  checkoutTotal: 0,
  setCheckoutTotal: jest.fn(),
  isLoaded: false,
  setIsLoaded: jest.fn(),
  orderResponse: {},
  setOrderResponse: jest.fn(),
  newUserRegisterByAdmin: false,
  setNewUserRegisterByAdmin: jest.fn(),
  adressValues: {
    seller: 'fulana',
    address: '',
    number: '',
  },
  setAdressValues: jest.fn(),
};

export const checkoutValues = {
  cartProducts: [{
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    quantity: 4,
    url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
    quantity: 2,
    url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    quantity: 1,
    url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
  }],
  setCartProducts: jest.fn(),
  setCheckoutTotal: jest.fn(),
  adressValues: {
    seller: 'fulana',
    address: 'Rua de Cima',
    number: '123',
  },
  setAdressValues: jest.fn(),
  checkoutTotal: '26,29',
  setOrderResponse: jest.fn(),
};
