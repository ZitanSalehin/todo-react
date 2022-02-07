import react,{useState} from "react";
import "./App.css";
import List from './components/List'

const App = () => {

  const [currentItem, setCurrentItem] =useState(null);
  const [itemList, updateItemList] =useState([]);

  const onChangeHandler = e =>{
    setCurrentItem(e.target.value);
    // console.log(e.target.value);
  }
  const addItemToList=()=>{
    updateItemList([...itemList,{item:currentItem, key:Date.now()}]);
    setCurrentItem("");
    // console.log(currentItem);
  }

  return (
    <div className="container">
        <div className="app-wrapper">
          <div className="input-wrapper">
          <input type="text" placeholder='Enter your todo task...' className='task-input' value={currentItem} onChange={onChangeHandler}></input>
        <button className="button-add" onClick={addItemToList}>Add</button>
          </div>
        <List itemList={itemList} updateItemList={updateItemList}/>
        </div>
    </div>
  );
}

export default App;
