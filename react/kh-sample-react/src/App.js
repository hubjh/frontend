import { Fragment } from "react";
import "./App.css";
import Section from "./Section";
import MyComponent from "./MyComponent";

function App() {
  return (
    <Fragment>
      {/* <Section title="스포츠" content="This is the content for section 1." />
      <Section title="정치" content="This is the content for section 2." /> */}
      <MyComponent name="곰돌이사육사" age={22}>
        인사말 안녕하세요 ^^
      </MyComponent>
      ;
    </Fragment>
  );
}

export default App;
