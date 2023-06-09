import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { requestData } from '../services/requests';
import { NUMBER_TEN } from '../utils/NumberConsts';

export default function SellerOrders() {
  const [pedidos, setPedidos] = useState([]);
  const [loaded, setLoaded] = useState();
  const history = useHistory();

  const handleClick = (e) => {
    const numberId = Number(e.target.id);
    history.push(`/seller/orders/${numberId}`);
  };

  useEffect(() => {
    const endpoint = `${process.env.REACT_APP_PROTOCOL}://${process.env.REACT_APP_HOSTNAME}/orders/`;
    const { token, id } = JSON.parse(localStorage.getItem('user'));
    const fetchProducts = async () => {
      const products = await requestData(endpoint, token);
      const salesOfSeller = products.filter((item) => item.sellerId === id);
      setPedidos(salesOfSeller);
      setLoaded(true);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="orders-page-container">
        { loaded
          ? pedidos.map((orders) => (
            <button
              key={ orders.id }
              type="button"
              className="orders-page-orders-container"
              id={ orders.id }
              onClick={ (e) => handleClick(e) }
            >
              <p
                data-testid={ `seller_orders__element-order-id-${orders.id}` }
                id={ orders.id }
              >
                { orders.id }
              </p>
              <h2
                data-testid={ `seller_orders__element-delivery-status-${orders.id}` }
                id={ orders.id }
              >
                { orders.status }
              </h2>
              <p
                data-testid={ `seller_orders__element-order-date-${orders.id}` }
                id={ orders.id }
              >
                { orders.saleDate.substring(0, NUMBER_TEN) }
              </p>
              <h2
                data-testid={ `customer_orders__element-card-price-${orders.id}` }
                id={ orders.id }
              >
                { 'R$ ' }
                {orders.totalPrice}
              </h2>
              <p
                data-testid={ `customer_orders__element-card-price-${orders.id}` }
                id={ orders.id }
              >
                {`${orders.deliveryAddress}, ${orders.deliveryNumber}`}
              </p>
            </button>
          ))
          : <h1>Loading...</h1>}
      </div>
    </div>
  );
}
