import FeaturesPage from "./FeaturesPage";
import ContactPage from "./ContactPage";
import React from "react";
import {Route} from 'react-router-dom';
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

function App() {
    return (
        <div className="c-container d-flex h-100 mx-auto my-auto flex-column">
            <Header/>

            <Route exact path="/">
                <Main/>
            </Route>

            <Route path="/features">
                <FeaturesPage/>
            </Route>

            <Route path="/contact">
                <ContactPage/>
            </Route>
            <Footer/>
        </div>


    );
}

export default App;
