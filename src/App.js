import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ReplayIcon from '@material-ui/icons/Replay';
import SaveIcon from '@material-ui/icons/Save';

const App = () => {
  let [count,setCount]=useState(0);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('count'));
    if (items) {
     setCount(items);
    }
  }, []);

  const save=()=>{
    JSON.stringify(localStorage.setItem('count', count));
  }

  return (
    <>
    <Header/>
    <section className='main'>
    
        <div className='box'>
          <div className="box1">
            <h2>Counter</h2>
            <h2 className='count'>{count}</h2>
            <div className="buttons">
              <button onClick={()=>setCount(count+1)} className='button addButton' title='add 1'><AddIcon  /></button>
              <button onClick={()=>setCount(count-1)} className='button delButton' title='remove 1'><RemoveIcon /></button>
            </div>
            <div className="AdditionalButtons">
              <button onClick={()=>setCount(0)}  className='button resetButton' title='reset'><ReplayIcon /></button>
              <button onClick={save} className='button saveButton' title='save'><SaveIcon /></button>
            </div>
          </div>
        </div>
    </section>
    <Footer />
    </>
    
  )
}

export default App
