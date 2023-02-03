import "./App.css";
import AddTransaction from "./component/AddTransaction";
import Balance from "./component/Balance";
import Header from "./component/Header";
import Incomexpenses from "./component/Incomexpenses";
import TransactonList from "./component/TransactonList";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Incomexpenses />
        <TransactonList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
