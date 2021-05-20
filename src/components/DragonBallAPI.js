import React from 'react';
import axios from 'axios';
import '../styles/DragonBallAPI.css';

class DragonBallAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            url: 'https://raw.githubusercontent.com/andrewbaisden/dragonball-character-database/master/client/db.json',
            error: null,
            isLoaded: false,
            showList: false,
            toggleBio: null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
        this.toggleBio = this.toggleBio.bind(this);
    }

    async componentDidMount() {
        axios
            .get(this.state.url)
            .then(res => {
                this.setState({
                    characters: res.data['characters'],
                    isLoaded: true
                })
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                })
    }

    handleDisplay() {
        this.setState((prevState) => {
            return {
                showList: !prevState.showList
            }
        })
    }

    toggleBio(kekw) {
        this.setState({
            toggleBio: kekw
        })
    }

    render() {
        let chars = this.state.characters;
        return (
            !this.state.isLoaded ?
                <div>LOADING</div> :
                <>
                    <button onClick={this.handleDisplay} className='main-btn'>
                        <i class="fas fa-arrows-alt-v arrow"></i>
                        Show Warriors
                        <i class="fas fa-arrows-alt-v arrow"></i>
                    </button>
                    {this.state.showList
                        ?
                        <>
                            {chars.map(kekw =>
                                <content>
                                    <button className='list-btn' onClick={() => this.toggleBio(kekw.id)}>{kekw.name}</button>
                                    <div className={this.state.toggleBio === kekw.id ? 'displayed-element' : 'hidden-element'}>{kekw.bio}</div>
                                </content>)}
                        </>
                        :
                        <></>
                    }
                </>
        )
    }
}

export default DragonBallAPI;