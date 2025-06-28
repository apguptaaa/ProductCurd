import React from 'react'
import { BrowserRouter,Routes, Route, Router } from 'react-router-dom'
import DisplayProduct from './Components/DisplayProduct'
import AddProduct from './Components/AddProduct'
import Form from './Components/Form'
import View from './Components/View'
import EditProduct from './Components/EditProduct'
import Navbar from './Components/Navbar'
import Layout from './Components/Layout'
function App() {
  return (
    
    // <Routes>
    //   <Route path='/displayProduct' element={<DisplayProduct/>}/>
    //   {/* <Route path='/addproduct' element={<AddProduct/>}/> */}
    //   {/* <Route path="/view/:postId" element={<View />}/>
    //   <Route path='/update/:postId' element={<Update/>}/>  */}
    //   <Route path='/' element={<Form/>}/>
    //   <Route path='/product/:id' element={<View/>}/>
    //   <Route path="/editproduct/:id" element={<EditProduct/>} />

    // </Routes>

//     <>
//     <div>
//       <div className="p-2 mt-4"><Navbar /></div>
 

//      <div className="p-2">

//        <Routes>
//         <Route path="/" element={<Form />} />
//         <Route path="/displayProduct" element={<DisplayProduct />} />
//         <Route path="/product/:id" element={<View />} />
//         <Route path="/editproduct/:id" element={<EditProduct />} />
//       </Routes>
//      </div>
//        </div>
// </>

      <Layout/>
  
  )
}

export default App