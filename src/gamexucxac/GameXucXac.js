import React, { Component } from 'react'
import '../gamexucxac/GameXucXac.css';
import ThongTinTroChoi from './ThongTinTroChoi';
import XucXac from './XucXac';
import { connect } from 'react-redux'

class GameXucXac extends Component {


    state = {
      trangThai : true
    }

    render() {
        return (
            <div  className="game text-center">
                <div  className="title-game text-center mt-5">Bài tập game xúc xắc</div>

                <div className="row text-center mt-5">
                    <div className="col-5"> <button className="btn btnGame" onClick={()=>{
                      this.props.banChon(true);
                      this.setState({trangThai:true})
                    }}>TÀI</button></div>
                    <div className="col-2"> <XucXac/></div>
                    <div className="col-5"> <button className="btn btnGame" onClick={()=>{
                      this.props.banChon(false);
                      this.setState({trangThai:false})
                    }}>XỈU</button></div>
                </div>

                <ThongTinTroChoi/>

                <button className="btn btn-success" onClick={()=>{
                  this.props.play(this.state.trangThai)
                  
                }}>play game</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    banChon: (key)=>{
      const action ={
        type:'BAN_CHON',
        payload : key
      }
      dispatch(action);
    },
    play: (key)=>{
      const action ={
        type:'PLAY',
        payload : key
      }
      dispatch(action);
    }
  }
} 


export default connect(null,mapDispatchToProps)(GameXucXac)
