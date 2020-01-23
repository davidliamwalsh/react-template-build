import Layout from '../../components/Layout'

describe('<Layout />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Layout />
    )

    expect(component).toMatchSnapshot()
  })
}) 