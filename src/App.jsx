import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<div>Login page</div>} />
            <Route path="profile" element={<div>Profile page</div>} />
            <Route path="test" element={<div>Test page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
