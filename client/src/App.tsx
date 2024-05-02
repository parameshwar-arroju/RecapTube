import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import { ThemeProvider } from "./components/ThemeProvider";
import { RecoilRoot } from "recoil";
import { Toaster } from "./components/ui/toaster";

function App() {
    return (
        <>
            <RecoilRoot>
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
                <Toaster />
            </RecoilRoot>

        </>
    );
}

export default App;
