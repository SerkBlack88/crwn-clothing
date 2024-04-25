import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.scss';

const Navigation = () => {
    return (
      <Fragment>
        <nav className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
            
            <ul className='nav-links-container'>
                <li><Link className='nav-link' to='/shop'>SHOP</Link></li>
                <li><Link className='nav-link' to='/sign-in'>Sign in</Link></li>
            </ul>
        </nav>
        <Outlet />
      </Fragment>
  
    );
  }

  export default Navigation;