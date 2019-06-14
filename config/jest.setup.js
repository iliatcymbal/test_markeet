import React from 'react';
import { configure } from 'enzyme';
import PropTypes from 'prop-types';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

configure({ adapter: new Adapter() });

global.React = React;
global.Component = React.Component;
global.PropTypes = PropTypes;
global.connect = () => comp => comp;
