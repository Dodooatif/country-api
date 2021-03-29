import {Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import Countries from "./pages/Countries"
import NavBar from "./components/NavBar"
import Details from "./pages/Details"
import Footer from "./components/Footer"
import Search from "./components/Search"

function App() {
  return (
    <main>
      <NavBar />
      <Search/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/countries" component={Countries} exact/>
        <Route path="/details/:name" component={Details} />
      </Switch>
       <Footer/>
      

    </main>
      
    
  );
}

export default App;
