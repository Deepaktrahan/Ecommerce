import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { shoppingCart } from 'react-icons-kit/feather/shoppingCart';
import { auth } from '../Config/Config';
import { useNavigate } from 'react-router-dom';


const Navbar = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/login'); // Correct use of navigate()
    });
  };

  return (
    <div className="navbar">
      <div className="leftside">
        <div className="logo">
          <h2>Ecommerce</h2>
        </div>
      </div>
      <div className="rightside">
        {!user && (
          <>
            <Link to="Signup">Signup</Link>
            <Link to="Login">Login</Link>
          </>
        )}
        {user && (
          <>
            <div>
              <Link className="navlink" to="/">
                {user} {/* You might want to customize this based on user data */}
              </Link>
            </div>
            <div className="cart-menu-btn">
              <Link className="navlink" to="/cart">
                <Icon icon={shoppingCart} size={20} />
              </Link>
              <span className="cart-indicator">{totalQty}</span>
            </div>
            <div className="btn btn-danger btn-md" onClick={handleLogout}>
              LOGOUT
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
