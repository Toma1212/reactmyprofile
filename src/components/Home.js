import React from 'react'
import posed from 'react-pose'
import './css/Home.css';
import baseball from '../image/hobby/baseball.JPG';

const props = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}
const Box = posed.div(props)
const Backcolor = posed.div(props)

class Home extends React.Component {
  state = { isVisible: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 750);
  }
  render(){
    return(
      <div  className="wrapper">
        <div className="home_main">
            <Box className="title" pose={this.state.isVisible ? 'visible' : 'hidden'} >
              <Backcolor className="backcolor" pose={this.state.isVisible ? 'visible' : 'hidden'}>
              <span>
               -Toma Shiraki-
              </span>
              </Backcolor>
              I’m a student at Kyushu-University.Born in Fukuoka.
              Engeneering,Books,DrugStar250

            </Box>
        </div>
      </div>
    )
  }
}
export default Home;
