import { Routes, Route } from "react-router-dom";
import NavBar from "./routes/nav-bar/nav-bar.component";
import UserDetails from "./components/user-details/user-details.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path="/user" element={<UserDetails/>}/>
      </Route>
    </Routes>
  )
}

export default App;
