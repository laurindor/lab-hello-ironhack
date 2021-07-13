import React from 'react';

function Items(props) {

    return (
    
        <div className = "Items">
            <img src={props.itemImage} alt="" />
            <h3 className="itemTitle">{props.itemTitle}</h3>
            <p>{props.itemText}</p>
    </div>
    );
}

export default Items;
