import { Fragment } from "react";
import "./App.css";
import Section from "./Section";
import MyComponent from "./MyComponent";
import Say from "./Say";
import Clock from "./Clock";
import EventPractice from "./onChange";
import EventHandler from "./EventHander";
import FruitSelect from "./FruitSelect";
import RadioButton from "./RadioButton";
import Table from "./Table";
import TableMap from "./TableMap";
import CreateRef from "./CreateRef";
import UserList from "./UserList";
import TodoList from "./TodoList";
import Counter from "./Hooks1";
import UseStateEx1 from "./useStateEx1";
import MemberInfo from "./Hooks2";
import Counter2 from "./Hooks3";
import Average from "./Hooks4";

function App() {
  return (
    <Fragment>
      {/* <Section title="스포츠" content="This is the content for section 1." />
      <Section title="정치" content="This is the content for section 2." /> */}
      {/* <MyComponent name="곰돌이사육사" age={22}>
        인사말 안녕하세요 ^^
      </MyComponent>
      ; */}
      {/* <Say /> */}
      {/* <Clock /> */}
      {/* <EventPractice /> */}
      {/* <EventHandler /> */}
      {/* <FruitSelect /> */}
      {/* <RadioButton /> */}
      {/* <Table /> */}
      {/* <TableMap /> */}
      {/* <CreateRef /> */}
      {/* <UserList /> */}
      {/* <TodoList /> */}
      {/* <Counter /> */}
      {/* <UseStateEx1 /> */}
      {/* <MemberInfo /> */}
      {/* <Counter2 /> */}
      <Average />
    </Fragment>
  );
}

export default App;
