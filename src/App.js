import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import RecipeCard from "./Components/RecipeCard";
import Services from "./Components/Services";
import Body from "./Components/Body";
import recipe1 from "../src/Images/Sprout.jpg";
import recipe2 from "../src/Images/Chicken.jpg";
import recipe3 from "../src/Images/vegetable.jpg";
import recipe4 from "../src/Images/Cake.jpeg";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            {/* <Route path="/Blog" element={<Blog />} /> */}
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </Router>
      </div>
      <Body />
      <h1 className="h1">Our Recipes</h1>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
      <section className="recipe-list1">
        <div className="recipe-list">
          <RecipeCard
            image={recipe1}
            title="Sprout Salad "
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />

          <RecipeCard
            image={recipe2}
            title="Chicken Curry"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />
          <RecipeCard
            image={recipe3}
            title="Vegetable Salad"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />

          <RecipeCard
            image={recipe4}
            title="Chocolate Cake"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />
        </div>
        <div className="recipe-list">
          <RecipeCard
            image={recipe1}
            title="Sprout Salad "
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />
          <RecipeCard
            image={recipe2}
            title="Chicken Curry"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />
          <RecipeCard
            image={recipe3}
            title="Vegetable Salad"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />
          <RecipeCard
            image={recipe4}
            title="Chocolate Cake"
            description="Search 2 million recipes using keywords, 28 nutrients and 40 diet and health filters."
            time="20 mins"
            difficulty="Easy"
            servings="2 persons"
          />
        </div>
      </section>
      <Services />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
