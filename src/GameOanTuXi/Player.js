import React, { Component } from 'react'
import { connect } from 'react-redux';
import baiTapOanTuXiReducer from './../redux/BaiTapOanTuXi';

class Player extends Component {

    renderPlayer =()=>{
        return this.props.mangDatCuoc.map((Ob,index)=>{
            let border = {};
            if(Ob.datCuoc === true){
                border = {border : '3px solid red'};
            }
            return  <div className="col-3 " key={index}>
                        <button className="btnItem btn btn-light " style={border} onClick={()=>{
                            this.props.banChon(Ob.ma);
                        }} ><img style={{width:'40px'}} src={Ob.hinhAnh}></img></button>
                    </div>
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className="player">
                <div className="theThink">
                    <img className="imgThink mt-4" src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}></img>
                </div>
                <div className="speech-bubble"></div>
                <img style={{width:'35%'}} src="./img/player.png"></img>

                <div className="row">
                    {this.renderPlayer()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        mangDatCuoc : state.baiTapOanTuXiReducer.mangDatCuoc,
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        banChon : (ma)=>{
            const action ={
                type:'BAN_CHON',
                ma : ma
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);
