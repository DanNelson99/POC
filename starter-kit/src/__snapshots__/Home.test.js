import React from "react";
import { render } from "enzyme";

import Home from "../Routes/Home/Index";

it("renders correctly", () => {
    const test = render(<Home container={{containers: []}}/>);
    expect(test).toMatchSnapshot();
});
