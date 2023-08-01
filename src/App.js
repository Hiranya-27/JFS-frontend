// import './App.css';
// import { Link } from 'react-router-dom';
import Login from './Pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Pages/Registration/register';
import Homepage from './Homepage/Homepage';
import Course from './Course Page/Course';
import Quiz from './Quiz/Quiz'
import About from './Nav/About';
import Contact from './Nav/Contact';
import Review from './Nav/Review';
import FeedForm from './Nav/Feedback';
import {Provider} from 'react-redux';
import Store from './Store';

function App() {
  return (
    // <div className="App">
    //   <Course></Course>
    // </div>
    <Provider store={Store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route path="/Login"element={<Login/>}/>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path="/Login" element={<Homepage/>}/>
        <Route path="/courses" element={<Course/>}/>
        <Route path="/Quiz" element={<Quiz/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/feed" element={<FeedForm/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;