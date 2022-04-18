import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const ProfileLinks = () => {
    const location = useLocation();
    const {pathname} = location;
    console.log(pathname.indexOf('orders'))

    return ( 
        <div className="list-group">
            <Link to="/profile" className={`list-group-item list-group-item-action ${pathname.indexOf('profile') > -1 && 'active'}`}> Profile </Link>
            <Link to="/orders" className={`list-group-item list-group-item-action ${pathname.indexOf('orders') > -1 && 'active'}`}> Orders </Link>
            <Link to="/" className="list-group-item list-group-item-action disabled">Morbi leo risus</Link>
        </div> 
    );
}
 
export default ProfileLinks;