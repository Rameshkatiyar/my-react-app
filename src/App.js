import { Routes, Route } from "react-router-dom";
import UserDetails from "./components/user-details/user-details.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<UserDetails/>}/>
    </Routes>
  )
}

export default App;
