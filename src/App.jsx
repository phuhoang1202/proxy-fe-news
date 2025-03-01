// App.js
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '@pages/user/homepage/HomePage.jsx'
import LayoutUser from '@pages/user/layout/LayoutUser.jsx'
import DetailProduct from '@pages/user/detailProduct/DetailProduct.jsx'
import NotFoundPage from '@components/users/404/NotFoundPage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutUser />}>
          <Route index element={<HomePage />} />
          <Route path='product/:id' element={<DetailProduct />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
