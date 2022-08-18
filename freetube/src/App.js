import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { VideoListing } from "./components/videoListing/VideoListing";
import { VideoDisplay } from "./components/videoDisplay/VideoDisplay";
import { LoginForm } from "./components/loginForm/LoginForm";
import { SignupForm } from "./components/signupForm/SignUpForm";


function App() {
  return (
    <>
     <BrowserRouter>
    <div>
        <Routes>
          <Route path="/" element={[<Navbar/>,
           <div className="container"><Sidebar/><VideoListing/></div>]}/>
          <Route path="/video" element={[<Navbar/>, <VideoDisplay/>]}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/signup" element={<SignupForm/>}/>
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
