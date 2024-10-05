import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import Home from "./components/Home";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/en"} />} />
          <Route path="/:lng" element={<LanguageComponent />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

const LanguageComponent = () => {
  const navigate = useNavigate();
  const { lng } = useParams();
  const { changeLanguage, translations } = useLanguage();

  useEffect(() => {
    if (!["en", "ru", "uz"].includes(lng)) {
      navigate("/en", { replace: true });
    } else {
      changeLanguage(lng);
    }
  }, [lng, navigate, changeLanguage]);

  return <Home />;
};

export default App;
