import "./styles.css";
import Container from "./Container";

function Child1() {
  console.log("Child1");
  return <div>1</div>;
}

function Child2() {
  console.log("Child2");
  return <div>2</div>;
}

function Child3() {
  console.log("Child3");
  return <div>3</div>;
}

export default function App() {
  return (
    <Container>
      <Child1 />
      <Child2 />
      <Child3 />
    </Container>
  );
}
