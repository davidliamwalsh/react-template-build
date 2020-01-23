// Make Enzyme functions available in all test files without importing
import { shallow, render, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}