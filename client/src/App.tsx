import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Router>
                    <Routes>
                        <Route path="/" element={<Navbar />}>
                            <Route index element={<Home />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/signin" element={<Signin />} />
                        </Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
