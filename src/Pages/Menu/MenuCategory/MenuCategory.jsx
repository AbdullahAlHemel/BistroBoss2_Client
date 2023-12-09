import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div>
            { title && <Cover img={coverImg} title={title}></Cover> }
            <div className='grid grid-cols-2 gap-5  my-8'>
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}><div className=' flex justify-center items-center'><button className='my-4 btn btn-outline border-0 border-b-4 mt-4'>Order Now</button></div></Link>
        </div>
    );
};

export default MenuCategory;