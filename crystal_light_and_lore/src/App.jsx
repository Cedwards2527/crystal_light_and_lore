import { Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CardOfTheDay from "./pages/CardOfTheDay/CardOfTheDay";
import RandomCard from "./pages/RandomCard/RandomCard";
import "./App.css"


function App() {
    return (
        <div className="page">
         <main className="page__content">
               <Header />
               <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card-of-the-day" element={<CardOfTheDay /> } />
           <Route path="/random" element={<RandomCard />} />
            </Routes>
             </main>  
         </div>
    )
}

export default App;