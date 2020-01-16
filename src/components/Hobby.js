import React from 'react'
import Card from './Card'
import Slide from './Slide'
import './css/Hobby.css';
import './css/Card.css';
import a from '../image/pokemon/amamaiko.png';
import b from '../image/pokemon/blacky.png';
import d from '../image/pokemon/doryuzu.png';
import e from '../image/pokemon/sazandora.png';
import f from '../image/pokemon/sirnight.png';
import bike1 from '../image/hobby/bike.JPG';
import bike2 from '../image/hobby/bike2.JPG';
import baseball from '../image/hobby/baseball.JPG';

class Hobby extends React.Component {
  render(){
    return(
      <div  className="wrapper">
        <div className="hobby_main">
          <h1 className="hobby_title">MotorBike</h1>
          <div className="hobby_container">
            <div className="hobby_topic">DragStar250</div>
              <ul className="flex-list">
               <li><img className="bike_img" src={bike1}/></li>
               <li><img className="bike_img" src={bike2}/></li>
              </ul>
          </div>
        </div>
        <div className="hobby_main">
          <h1 className="hobby_title">Pokemon</h1>
          <div className="hobby_container">
            <div className="hobby_topic">Favrite Pokemon</div>
            <div className="cards">
                <Card img={f} title="サーナイト" explain="美しい"/>
                <Card img={b} title="ブラッキー" explain="優雅"/>
                <Card img={e} title="サザンドラ" explain="強い"/>
                <Card img={d} title="ドリュウズ" explain="愛らしい"/>
                <Card img={a} title="アママイコ" explain="かわいい"/>
            </div>
          </div>
        </div>
        <div className="hobby_main">
          <h1 className="hobby_title">Baseball</h1>
          <div className="hobby_container">
            <div className="hobby_topic">Redsox</div>
             <img className="baseball_img" src={baseball}/>
          </div>
        </div>
      </div>
    )
  }
}


export default Hobby;
