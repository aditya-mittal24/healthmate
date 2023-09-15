import { Routes, Route } from "react-router-dom";
import { NoRouteFound } from "./NoRouteFound";
import Layout from "../UI/Layout";
import Register from "../features/register/register";
import Login from "../features/login/login";
import LandingPage from "../features/LandingPage/LandingPage";
import { useAuth } from "../features/useAuth";
import Dashboard from "../features/Dashboard/Dashboard";
import MedicalRecords from "../features/MedicalRecords/MedicalRecords";
import DiabetesPrediction from "../features/DiabetesPrediction/DiabetesPrediction";

const AppRoute = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={user.isAuthenticated ? <Dashboard /> : <LandingPage />}
      />
      <Route
        path="/register"
        element={user.isAuthenticated ? <Dashboard /> : <Register />}
      />
      <Route
        path="/login"
        element={user.isAuthenticated ? <Dashboard /> : <Login />}
      />
      <Route
        path="/medical-records"
        element={user.isAuthenticated ? <MedicalRecords /> : <Login />}
      />
      <Route
        path="/diabetes-prediction"
        element={
          <>
            <DiabetesPrediction />
          </>
        }
      />
      <Route path="*" element={<NoRouteFound />} />
    </Routes>
  );
};
export { AppRoute as Routes };
