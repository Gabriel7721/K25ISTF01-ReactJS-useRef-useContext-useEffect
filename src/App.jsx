import Tasks from "./components/01.useReduce/Tasks";
import Page from "./components/02.useContext/Page";
import CounterReRender from "./components/03.useRef/Counter";
import CounterNotReRender from "./components/03.useRef/CounterNotReRender";

const App = () => {
  return (
    <div>
      {/* <Tasks /> */}
      {/* <Page /> */}
      <CounterNotReRender />
      <CounterReRender />
    </div>
  );
};

export default App;
