import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes/Route";
import { Provider } from "react-redux";
import store from "./Redux/store/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer position="top-right" />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
