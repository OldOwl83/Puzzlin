// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from 'enzyme'; //Requiere instalación local "npm install --save-dev @wojtekmaj/enzyme-adapter-react-17"

//import Adapter from 'enzyme-adapter-react-16';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; //Requiere instalación "npm install --save-dev enzyme-to-json"

import { createSerializer } from 'enzyme-to-json';
 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }));