import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignedOut, SignedIn, SignIn, SignUp } from '@clerk/clerk-react';
import HomePage from './pages/homePage';

function App() {
  return (
    <div >
      <Router>
        <SignedOut>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Routes >

              <Route path='/' element={<SignIn routing="path" path="/" />} />
              <Route path='/sign-up' element={<SignUp routing='=path' path="/sign-up" />} />


            </Routes>
          </div>
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route path='/' element={<HomePage />}>
              {/* <HomePage /> */}
            </Route>
          </Routes>
        </SignedIn>
      </Router>
    </div>
  );
}

export default App;
