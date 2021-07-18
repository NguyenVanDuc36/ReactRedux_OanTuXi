import React, { Component } from 'react'
import { connect } from 'react-redux'
import baiTapOanTuXiReducer from './../redux/BaiTapOanTuXi';
 class Computer extends Component {

    

    render() {
        let {computer} = this.props;
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 85px;}
            50% {top: -50px;}
            75% {top: 85px;}
            100% {top: 0;}
          }`

        return (
            <div className="player">
                <style>
                    {keyframe}
                </style>
                <div className="theThink" style={{position:'relative'}}>
                    <img style={{left:'20%',transform:'rotate(180deg)',animation:`randomItem${Date.now()} 0.5s  `,position:'absolute'}} className="imgThink mt-4" src={computer.hinhAnh} ></img>
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:'35%'}} src="./img/playerComputer.png"></img>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        computer : state.baiTapOanTuXiReducer.Computer,
    }
}

export default connect(mapStateToProps,null)(Computer)