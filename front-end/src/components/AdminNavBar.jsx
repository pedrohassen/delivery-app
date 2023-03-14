import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/context';
import ibirita from '../images/ibirita.png';
// import '../styles/NavBar.css';

export default function NavBar() {
  const { setIsLoged } = useContext(Context);
  const userJson = localStorage.getItem('user');
  const data = JSON.parse(userJson);

  const history = useHistory();

  const logout = () => {
    setIsLoged(false);
    localStorage.clear();
    history.push('/login');
  };

  return (
  //   <header className="flex md:flex-1 md:items-center md:justify-between items-center justify-between bg-corHeader text-white">
  // <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6">
  //   <div className="flex mx-14 cursor-pointer hover:opacity-100 opacity-90">
  //     <img className="h-28 w-56" src={ ibirita } alt="Ibirita Logo" />
  //   </div>
    <div className="flex md:flex-1 md:items-center md:justify-between items-center justify-between bg-corHeader text-white">
      <div className="flex mx-14 cursor-pointer hover:opacity-100 opacity-90">
        <img className="h-28 w-56" src={ ibirita } alt="Ibirita Logo" />
      </div>
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6">
        <ul className="nav-list-left">
          <li
            className="nav-item"
            data-testid="customer_products__element-navbar-link-orders"
          >
            <button
              className="nav-button"
              type="button"
              onClick={ () => history.push('/admin/manage') }
            >
              GERENCIAR USUÁRIOS
            </button>
          </li>
        </ul>
      </nav>

      <nav className="navbar-right">
        <ul className="nav-list-right">
          <li
            className="nav-item"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            { data.name }
          </li>
          <li className="nav-item">
            <button
              className="nav-button"
              data-testid="customer_products__element-navbar-link-logout"
              type="button"
              onClick={ logout }
            >
              Sair
            </button>
          </li>
        </ul>
      </nav>
    </div>

  );
}
