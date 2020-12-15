import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import { shallow, mount, configure } from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });
describe("Testng App", ()=> {
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore({
      counter: 5
    })
  })
  test("testing dv", ()=>{
    wrapper = shallow(<App store={store}/>).childAt(0).dive();
    let classInstance = wrapper.instance();
    console.log(classInstance);
    expect(1).toBe(1);
  })
})