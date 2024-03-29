import Problem1 from "./components/Problem1";
import "bootstrap/dist/css/bootstrap.min.css";
import Problem2 from "./components/Problem2";

function App() {
  return (
    <>
      <h3 className="font-bold text-center py-3">
        React Coding Assessment by Mediusware Ltd.
      </h3>
      <Problem1 />
      <div
        style={{
          margin: "40px 0",
        }}
      >
        <Problem2 />
      </div>
    </>
  );
}

export default App;
