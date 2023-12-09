import { Helmet} from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg  from  '../../../assets/menu/banner3.jpg'
import UseMenu from '../../../Components/Hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

import CoverDessert from '../../../assets/menu/dessert-bg.jpeg'
import CoverSoup from '../../../assets/menu/soup-bg.jpg'
import CoverSalad from '../../../assets/menu/salad-bg.jpg'
import CoverPizza from '../../../assets/menu/pizza-bg.jpg'

const Menu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item =>  item.category === 'dessert')
    const soup = menu.filter(item =>  item.category === 'soup')
    const salad = menu.filter(item =>  item.category === 'salad')
    const pizza = menu.filter(item =>  item.category === 'pizza')
    const offered = menu.filter(item =>  item.category === 'offered')
    return (    

        <div>
         <Helmet>
             <title>Bistro || menu</title>
         </Helmet>
          {/* main cover */}
         <Cover img={menuImg} title={'Our menu'}></Cover>
         <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
         
         {/* offered menu items */}
         <MenuCategory items={offered}></MenuCategory>

         {/* dessert menu items */}
         <MenuCategory items={dessert} title={'dessert'}  coverImg={CoverDessert}></MenuCategory>

         {/* soup menu items */}
         <MenuCategory items={soup} title={'soup'}  coverImg={CoverSoup}></MenuCategory>

         {/* salad menu items */}
         <MenuCategory items={salad} title={'salad'}  coverImg={CoverSalad}></MenuCategory>

         {/* pizza menu items */}
         <MenuCategory items={pizza} title={'pizza'}  coverImg={CoverPizza}></MenuCategory>

        </div>
    );
};

export default Menu;