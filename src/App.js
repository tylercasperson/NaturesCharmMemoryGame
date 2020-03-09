import React, { Component } from 'react';
import './ClickyGame.css';
import NavBar from './NavBar';
import Instructions from './Instructions';
import Card from './Card';
import picture1 from "./Card/images/picture1.jpg";
import picture2 from "./Card/images/picture2.jpg";
import picture3 from "./Card/images/picture3.jpg";
import picture4 from "./Card/images/picture4.jpg";
import picture5 from "./Card/images/picture5.jpg";
import picture6 from "./Card/images/picture6.jpg";
import picture7 from "./Card/images/picture7.jpg";
import picture8 from "./Card/images/picture8.jpg";
import picture9 from "./Card/images/picture9.jpg";
import picture10 from "./Card/images/picture10.jpg";
import picture11 from "./Card/images/picture11.jpg";
import picture12 from "./Card/images/picture12.jpg";
class App extends Component {
  
      state =
      {
          debug: true,
          score: 0,
          imagesClicked: [],
          pictureArray: [picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, picture9, picture10, picture11, picture12].sort(function() { return 0.5 - Math.random() }),
          best: 0
      }

    alreadyClicked = (picture) => {
      const pictureShuffle = [picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8, picture9, picture10, picture11, picture12].sort(function() { return 0.5 - Math.random() });
      this.setState({pictureArray:pictureShuffle});

      const newPictures = [ ...this.state.imagesClicked, picture];
      this.setState({imagesClicked:newPictures});   
      
      if((this.state.imagesClicked.indexOf(picture) === -1)){
        const newScore = this.state.score;
        this.setState({score:newScore+1})
        if(this.state.score>=this.state.best){
          this.setState({best:newScore+1})
        }
      } else {
        this.setState({score:0, imagesClicked: []})
      }
    };

    render = () =>
    {
    return (
      <div className="clickyGame">
        <NavBar 
          score={this.state.score}
          best={this.state.best}
        />
        <Instructions />
        <div className="picturesGoHere">
          {this.state.pictureArray.map((pictureArr, i) =>
            {
              return(
                  <Card
                    key={i+1}
                    src={pictureArr}
                    alt={'picture' + i}
                    onClick={() => this.alreadyClicked(pictureArr)}
                  />
              )
            })}
          </div>
      </div>
    );
  }
}

export default App;
