//DEPENDENCIES
  // import { useState } from 'react';
  // import { BrowserRouter } from 'react-router-dom';

//STYLING
import './App.css';

//PAGES & COMPONENTS
import Navbar from './components/Navbar'
import InventoryIndex from './components/InventoryIndex';
// import DetailedInventoryIndex from './components/DetailedInventoryIndex';
import CreateNewForm from './components/CreateNewForm';
import ReverbBox from './componentsForLessons/ReverbBox';

function App() {


  return (
    <div className="App">
 
 {/* Navigation Bar */}
      <Navbar/>

{/* Component:  with UseEffect */}

      <section className='main-body'>
        <InventoryIndex />
        {/* <DetailedInventoryIndex /> */}
        <CreateNewForm />
      </section>      

{/* Other LESSONS */}
      <ReverbBox />

    </div>
  );
}

export default App;



//If I want two components to be next to each other, 
// I should make a separate section



/* NO LONGER USING


import InventoryItems from './components/InventoryItems';

------  OTHER LESSONS  ------
import Names from './componentsForLessons/Names';
import AddNums from './componentsForLessons/AddNums';
import CollectNames from './components/CollectNames';
import StateAndProps from './componentsForLessons/StateAndProps';
import Counter from './componentsForLessons/Counter';
import Fetch from './componentsForLessons/Fetch';

      ------ Component:  ITEMS, with UseEffect -------
        <InventoryItems />

      ------ Add Numbers component  ------ 
        <AddNums num1={1} num2={98} />

      ------ Update User component (Mar 25, 2024) ------ 
        <CollectNames updateUser={updateUser}/>

      ------ StateAndProps component, baseball (Mar 26, 2024)  ------ 
        <StateAndProps />
      ------ useEffect (Mar 27, 2024)  ------ 
        <Counter /> 
        <Fetch /> 

      ------ Names Component  ------ 
      
                    <div className='plain-text left'>
                    <hr></hr>
                    <hr></hr>
                      Call me by my nickname. Although I have an actual name. And a hobby.
                       <p></p>
                    </div>
                    <div className='props'>
                      <Names name="nonya" nickname="Ishmael" action="whaling" human={true} fictional={true}/>
                      <Names name="Jennifer" nickname="Jennifer" action="coding" age={50} human={true} fictional={false}/>
                      <Names name="Inigo Montoya" nickname="The Man in the Black Mask" action="killing" age={26} fictional={true} human={true}/>
                    </div>


*/
