import Add from "./Add";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";
import {addCounter} from "../store/actions";
import toJson from "enzyme-to-json";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);

describe("Add Functions", () => {
    let store;
    let wrapper;
    
    
    beforeEach(() => {
        store = mockStore({
            counter: 5
        })

        store.dispatch = jest.fn();
        wrapper = shallow(<Add store={store} />).childAt(0).dive();
    });
    test("[SNAPSHOT TEST ADD]", () => {
        let snapshotWrapper = renderer.create(<Add store={store} />);
        let tree = snapshotWrapper.toJSON();
        expect(tree).toMatchSnapshot();
        
    })
    test("Sample est", () => {
        expect(1).toBe(1);
    })
    test("simulate functions", () => {
        let classInstance = wrapper.instance();
        classInstance.submitClick();
        wrapper.update();
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(addCounter(10));
    })
})