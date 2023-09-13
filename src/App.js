import logo from './logo.svg';
import './App.css';
import Random from './Random';
import Tag from './Tag';

function App() {
  return (
   <div className = " background" >
    <h1 className = "bg-white rounded-sm"  >GIFF </h1>
    <div className =   "flex flex-col" >
    <Random/>
    <Tag/>
    </div>
   </div>
  );
}

export default App;
