import React from 'react';

function List(props) {
const deleteItem=key=>{
 const newList = props.itemList.filter((itemObj)=>{
    return itemObj.key!==key;
  }
  )
  props.updateItemList(newList);};

  return <div>
      {props.itemList.map(itemObj=>{
         return (<div className='list-item'>
           <p>{itemObj.item}</p>
           <button className='button-add' onClick={()=>deleteItem(itemObj.key)}>X</button>
                    </div>);
      })}
  </div>;
}

export default List;
