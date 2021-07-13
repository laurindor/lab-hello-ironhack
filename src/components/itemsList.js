import React from 'react';
import './../App.css';

import Item from './../components/items'




const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png';
const icon3 = '/images/icon3.png';
const icon4 = '/images/icon4.png';

const items = [

    { itemImage: icon1, itemTitle: "Declarative", itemText:'React makes it painless to create interactive UI'},
    { itemImage: icon2, itemTitle: "Components", itemText:'Build encapsulated components that manage their state.'},
    { itemImage: icon3, itemTitle: "Single-Way", itemText:'A set of immutable values arepassed to the components.'},
    { itemImage: icon4, itemTitle: "JSX", itemText:'Statically-typed, designed to run on modern browsers.'},

];
    

const itemsList = ()  => {

    return(

        <section className="item-panel" >
            <Item itemImage={icon1} cardTitle="Declarative" />
            <Item itemImage={icon2} cardTitle="Components" />
            <Item itemImage={icon3} cardTitle="Single-Way" />
            <Item itemImage={icon4} cardTitle="JSX" />
        </section>
    );
};


export default itemsList; 