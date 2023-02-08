import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AudioRecoders from './pages/AudioRecoders';
import DataConnection from './pages/DataConnection';
import Login from './pages/Login';
import Registration from './pages/Registration';
import SlpashScreen from './pages/SlpashScreen';


const BgPrimary = "#000033";

function App() {
  return (
    <div style={{backgroundColor: BgPrimary, width: '100%', height: '52em'}}>

       {/* View each Page by uncommenting it */}

      <SlpashScreen/>
      {/* <Login/>
      <Registration/>
      <DataConnection></DataConnection>
      <AudioRecoders/> */}
    </div>
  );
}

export default App;
