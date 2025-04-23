import { AppRouter } from "@/app/providers/router/router";
import "./app/styles/app.scss";
import { Header } from "./widgets/Header";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <main>
          <AppRouter />
        </main>
      </div>
    </>
  );
}

export default App;
