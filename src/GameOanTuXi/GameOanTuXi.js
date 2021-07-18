import React, { Component } from 'react'
import '../GameOanTuXi/GameOanTuXi.css'
import BanTayVoCuc from './BanTayVoCuc'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import { connect } from 'react-redux';
class GameOanTuXi extends Component {
    render() {
        return (
            <div className="oanTuXi">
                <div className="row text-center mt-4">
                    <div className="col-4">
                        <Player/>
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi/>
                        <button onClick={()=>{
                            this.props.play();  
                        }} className="btn btn-success">Play game</button>
                    </div>
                    <div className="col-4">
                        <Computer/>
                    </div>
                </div>
                <BanTayVoCuc/>
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        play : ()=>{
            const action = {
                type : 'RAMDOM',
            }

            let count= 0;
            let randomItem = setInterval(()=>{
                dispatch(action);
                count++;
                if(count >10){
                    clearInterval(randomItem);
                    const action = {
                        type : 'KET_QUA_TX'
                    }
                    dispatch(action);

                    const action1 = {
                        type: 'DA'
                    }
                    dispatch(action1);
                }
            },100)
        },

        
    }
}

export default connect(null,mapDispatchToProps)(GameOanTuXi)
