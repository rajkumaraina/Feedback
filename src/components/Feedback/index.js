import {Component} from 'react'

import './index.css'

import Emojielement from '../emoji'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class Feedback extends Component {
  state = {buttonClick: false}

  buttonChange = () => {
    const {buttonClick} = this.state
    console.log('hii')
    if (buttonClick === true) {
      this.setState({buttonClick: false})
    } else {
      this.setState({buttonClick: true})
    }
  }

  render() {
    const {buttonClick} = this.state

    let buttonElement
    if (buttonClick === true) {
      buttonElement = (
        <ul className="secondContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/love-emoji-img.png"
            alt="love emoji"
            className="loveImg"
          />
          <h1 className="loveHeading">Thank You!</h1>
          <p className="feedbackPara">
            We will use your feedback to improve our Customer Support
            perfomance.
          </p>
        </ul>
      )
    } else {
      buttonElement = (
        <ul className="secondContainer">
          <h1 className="loveHeading">
            How satisfied are you with our customer support performance?
          </h1>
          <div className="emojiContainer">
            {resources.emojis.map(eachItem => (
              <Emojielement
                itemList={eachItem}
                buttonChange={this.buttonChange}
                key={eachItem.id}
              />
            ))}
          </div>
        </ul>
      )
    }
    return <div className="mainContainer">{buttonElement}</div>
  }
}
export default Feedback
