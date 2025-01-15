import './App.css'
import { Route, Routes } from "react-router-dom"
import Header from './layouts/header'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'
import Wishlist from './pages/wishlist'
import Add from './pages/add'
import MainLayout from './layouts/mainlayout'
import Details from './pages/details'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element = {<Home/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/products' element = {<Products/>}></Route>
        <Route path='/wishlist' element = {<Wishlist/>}></Route>
        <Route path='/add' element = {<Add/>}></Route>
        <Route path='/details/:id' element = {<Details/>}></Route>





      </Route>


    </Routes>
      
    </>
  )
}

export default App
