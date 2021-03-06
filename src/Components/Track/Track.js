import React from 'react';

import './Track.css';

class Track extends React.Component {
    constructor(props){
        super(props);
        this.state = {play: false};
        this.audio = new Audio(this.props.track.audio);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
    }
    renderAction(){
        if(this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        } else {
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        }
    }
    addTrack() {
        this.props.onAdd(this.props.track);
    }
    removeTrack() {
        this.props.onRemove(this.props.track);
    }
    togglePlay() {
        this.setState({ play: !this.state.play });
        if (this.state.play) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
    }

    render() {
        return(
            <div className="Track">
                <button className="play" onClick={this.togglePlay}>
                    <img src={this.props.track.cover} alt={this.props.track.album} className="cover"/>
                </button>
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.artist}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}
export default Track;