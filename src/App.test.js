import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import { shallow, mount } from "enzyme";
//
// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });
describe("Testng App", ()=> {
  let wrapper;
  test("testing dv", ()=>{
    wrapper = mount(<App />);
    console.log(wrapper.debug());
    expect(1).toBe(1);
  })
})