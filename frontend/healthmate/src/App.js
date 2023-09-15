import "./App.css";
import { Routes } from "./routes/AppRoute";
import { AuthProvider } from "./features/useAuth";

function App() {
  return (
    <div className="block box-border">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
