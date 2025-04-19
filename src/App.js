import Main from './boxes/Main';
import Tiles from './boxes/Tiles';
import Logo from './assest/Logo.png';


function App() {
  return (
   <div>
    <Main />
    <div className='logo'><img src={Logo} alt="Logo"  /></div>
    <div className='App'>
               {/*<h1>MEMORY GAME</h1> */}
             
             <Tiles />

             </div>
   </div>
    
  );
}

export default App;
