import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup } from "react-testing-library";
import ShallowRenderer from "react-test-renderer/shallow";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow, configure } from "enzyme";

afterEach(cleanup);

const renderer = new ShallowRenderer();
renderer.render(<App />);
const result = renderer.getRenderOutput();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

configure({ adapter: new Adapter() });
test("message box", () => {
  "hello";
});

it("Renders without Crashing", () => {
  shallow(<App />);
});
it("Renders the button initially", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.hasClass("submitButton"));
});

it("Renders the number", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.hasClass("Number"));
});
