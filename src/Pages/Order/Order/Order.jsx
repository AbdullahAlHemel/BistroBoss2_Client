import { Helmet } from "react-helmet";
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from "../../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../../Components/Hooks/UseMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Order = () => {
    const categories = [ 'salad', 'pizza','soup', 'dessert', 'drinks', ]

    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();

    const salad = menu.filter(item =>  item.category === 'salad')
    const pizza = menu.filter(item =>  item.category === 'pizza')
    const soup = menu.filter(item =>  item.category === 'soup')
    const dessert = menu.filter(item =>  item.category === 'dessert')
    const drink = menu.filter(item =>  item.category === 'drinks')
            
    return (
        <div>
             <Helmet>
                 <title>Bistro || Order Food</title>
             </Helmet>

             <Cover img={orderCover} title={'Order Food'}></Cover>

             <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-2xl mb-3 mt-3'>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soup</Tab>
                <Tab>Dessert</Tab>
                <Tab>Drink</Tab>
                </TabList>

               
                <TabPanel><OrderTab items={salad}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
                <TabPanel><OrderTab items={drink}></OrderTab></TabPanel>
            </Tabs>
            
        </div>
    );
};

export default Order;