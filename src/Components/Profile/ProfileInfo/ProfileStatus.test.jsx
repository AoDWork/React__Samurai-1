import React from 'react';
import { create } from "react-test-renderer";

decribe('ProfileStatus component', () => {
    test("it shows the expected text when clicked(testing the wrong way!)", () => {
        const component = create(<Button text="Subscribe to basic"/>);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("");
    });
});

