import React from 'react'
import './css/Card.css'

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickLesson() {
    this.setState({isModalOpen: true});
  }

  handleClickClose(){
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
             <img className="modal_img"  src={this.props.img}/>
            <div className='modal-introduction'>
              <h2>{this.props.title}</h2>
              <p>{this.props.explain}</p>
            </div>
            <button
              className='modal-close-btn'
              onClick={()=>{this.handleClickClose()}}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='card'>
        <div
          className='card_item'
          onClick={() => {this.handleClickLesson()}}
        >
        <img className="card_img"  src={this.props.img}/>

        <div className="card_content">
          <div className="card_title">
            {this.props.title}
          </div>
        </div>
        </div>
        {modal}
      </div>
    );
  }
}

export default Card;
