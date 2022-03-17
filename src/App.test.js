import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

// create a suite
describe('App', () => {
  it('renders without crashing', () => {
    const appWrapper = shallow(<App />);
  });

  it('', () => {
    const appWrapper = shallow(<App />);
    appWrapper.find(PersonList);
  });
});
