import logo from './logo.svg';
import './App.css';
import FirstComponent from './Component/FirstComponent';
import NavbarSport from './Component/NavbarSport';
import FormHachem from './Component/FormHachem';
import NameUser from './Component/NameUser';
// import FirstComponent from './Component/FirstComponent';
// import {FirstComponent,SecondComponent} from './Component/FirstComponent'
import hachem from './22.jpg'

function App() {
  return (
      <div>
        <NavbarSport/>
        <FormHachem/>
        {/* <h1>Hachem</h1>
        <h2>Sofiene</h2> */}
        {/* <FirstComponent/> */}
        {/* <FirstComponent/>
        <SecondComponent/> */}

        <FirstComponent/>

        <NameUser/>

        <img src ="/11.jpg"/>
        <img src={hachem}/>
        
        
      </div>
  );
}

export default App;
