import "./App.css";
import UserCard from "./components/UserCard";
import Maharana_Pratap from './assets/maharanpratp.jpeg'
import PrithviRaj_Chauhan from './assets/prithvirajachauhan.jpeg'
import Rana_Khumba from './assets/ranakhumba.jpeg'

function App() {
  return (
 
      <div className="container">
        <UserCard name="Maharana Pratap" image = {Maharana_Pratap} desc="Maharana Pratap Image" style={{"border-radius":"20px"}}/>
        <UserCard name="Prithvi Raj Chauhan" image = {PrithviRaj_Chauhan} desc="Prithvi Raj Chauhan Image" style={{"border-radius":"20px"}}/>
        <UserCard name="Rana Khumba" image = {Rana_Khumba} desc="Rana Khumba Image" style={{"border-radius":"20px"}}/>
      </div>
   
  );
}

export default App;
