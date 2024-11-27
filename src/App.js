import { Routes , Route} from 'react-router-dom';
import './App.scss';
import Home from './pages/home';
import About from './pages/about';
import Skills from './pages/skills';
import Contact from './pages/contact';
import Project from './pages/project';
import Resume from './pages/resume';
import NavBar from './component/navbar';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
     {/*particles */}


          {/*navbar*/}
          <NavBar  />
          

               {/*Main page content */}

               <div className='App__main_page' >
               <Routes>
               <Route index path='/' element={<Home/>}  /> 
               <Route  path='/about' element={<About/>}  />
               <Route  path='/project' element={<Project/>}  />
               <Route  path='/resume' element={<Resume/>}  /> 
               <Route  path='/skills' element={<Skills/>}  /> 
               <Route  path='/contact' element={<Contact/>} / >







               
              </Routes>
               
               
               
               </div>

       {/* footer */}
       <Footer  />

    </div>
  );
}

export default App;
