import Details from './Components/Details';
import NameList from './Components/NameList'
import { Route , Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [detailsApi , SetDetailsApi] = useState("")

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<NameList setdetailsApi={SetDetailsApi}/>}></Route>
          <Route path='/Details' element={<Details Details={detailsApi}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
