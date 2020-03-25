import React from 'react';
import SearchInput from './Search Component/searchInputComponent'
import SearchJson from './Search-list.json'
import List from './Search Component/listComponent'
import {BrowserRouter,Route} from 'react-router-dom' 
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <SearchInput props = {SearchJson}/> */}
      <BrowserRouter>
      <Route path = '/'  exact component = {()=><SearchInput props={SearchJson}/>}/>
      <Route path = '/new' component = {List}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
