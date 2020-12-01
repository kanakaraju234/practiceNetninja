import React from 'react';
import BookList from './Components/BookList';
import ThemeContextProvider from './Components/Contexts/ThemeContext';
import Navbar from './Components/Navbar';


 function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <Navbar/>
      <BookList/>
    </ThemeContextProvider>
    </div>
  )
}
export default App;