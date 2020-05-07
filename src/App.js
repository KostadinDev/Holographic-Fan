import axios from 'axios';
import {Beforeunload} from 'react-beforeunload';
import React, {Component} from 'react';
import FileUploadBox from './components/file-upload-box/file-upload-box.component'
import './App.css'
import UHLogo from './images/ComputerScience-no-background-pc.png'
import QRCode from 'qrcode.react'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded: false,
            items:[]
        };
    }
    componentDidMount() {
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        var React = require('react');
        var QRCode = require('qrcode.react');

        return (
            <div className="App">
                <Beforeunload onBeforeunload={() => "You'll lose your data!"}/>
                <div align = "center">
                    <div className='image' style={{backgroundImage: `url(${UHLogo})`}}/>

                </div>
                <h3>
                    Hologram Display
                </h3>
                <div align="center">
                    <FileUploadBox/>
                    <QRCode value="http://facebook.github.io/react/" />
                </div>
            </div>
        );
    }
}

export default App;
