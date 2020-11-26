import React from 'react';


const Items = (props) =>{
    const {item,deleteItem} = props;
    let length = item.length;
    const itemList =length ?(
     item.map((itemm =>{
        return(
            <div className="row" key={itemm.id} >
                <p className="col-md-5">{itemm.name}</p>
                <p className="col-md-5">{itemm.email}</p>
                <p className="col-md-2" onClick={() => deleteItem(itemm.id)} >&times;</p>
            </div>
        )

    }))):(
        <p className="col-md-12">Ther is no item to show</p>
    )
    return(
        <div className="container z">
            <div className="row first" >
                    <p className="col-md-5">Name</p>
                    <p className="col-md-5">Email</p>
                    <p className="col-md-2">Delete</p>
            </div>
            <br ></br>
                {itemList}
            
        </div>
    )
}

export default Items;
