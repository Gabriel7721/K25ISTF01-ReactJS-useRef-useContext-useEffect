import Tasks from "./components/01.useReduce/Tasks";
import Page from "./components/02.useContext/Page";
import CounterReRender from "./components/03.useRef/Counter";
import CounterNotReRender from "./components/03.useRef/CounterNotReRender";
import DOM_UseRef from "./components/03.useRef/DOM_UseRef";
import Timer from "./components/03.useRef/Timer";
import TimerUseRef from "./components/03.useRef/Timer-useRef";

const App = () => {
  return (
    <div>
      {/* <Tasks /> */}
      {/* <Page /> */}
      {/* <CounterNotReRender />
      <CounterReRender /> */}
      {/* <Timer /> */}
      {/* <TimerUseRef /> */}
      <DOM_UseRef/>
    </div>
  );
};

export default App;
