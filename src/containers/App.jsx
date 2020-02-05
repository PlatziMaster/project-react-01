/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

class App extends React.Component {
  // const [profile, setProfile] = useState([]);
  // const data = getData();
  // const handleGetData = () => {
  //   setProfile(data);
  // };
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
    };
  }

  componentDidMount() {
    const data = getData();
    this.setState({
      profile: data,
    });
  }

  render() {
    const { profile } = this.state;
    return (
      <div className='AppContainer'>
        <Header {...profile}>
          <About {...profile} />
        </Header>
        <Profile {...profile} />
        <Experience {...profile} />
        <Academic {...profile} />
        <Skills {...profile} />
        <Interest {...profile} />
        <Languages {...profile} />
      </div>
    );
  }
};
export default App;
