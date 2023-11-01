import React from "react";
import User from "./jsx/components/User";
import UserList from "./jsx/components/UserList";
import Header from "./jsx/components/commonComponents/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./jsx/components/movies/Movies";
import Products from "./jsx/components/products/Products";
import Service from "./jsx/components/services/Service";
import Contact from "./jsx/components/contact/Contact";
const App = () => {
    return (
        <>
            <BrowserRouter basename="/">
                {/* <User /> */}
                <Header />
                <Routes>
                    <Route path="/users" element={<User />}/>
                    <Route path="/movies" element={<Movies />}/>
                    <Route path="/products" element={<Products />}/>
                    <Route path="/services" element={<Service />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App;