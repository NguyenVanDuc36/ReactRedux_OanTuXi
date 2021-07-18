import React, { Component } from 'react'
import { connect } from 'react-redux';

 class DaVoCuc extends Component {

    renderIronMan =()=>{
        return this.props.daVoCucIronMan.map((item,index)=>{
            return  <div className="col-2 text-right" key={index}>
                        <img className="daVoCuc" src={item.hinhAnh}></img>
                    </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderIronMan()}
            </div>
        )
    }
}


const mapStateToProps =(state)=>{
    return{
        daVoCucIronMan : state.baiTapOanTuXiReducer.mangDaIronMan,
    }
}
export default connect(mapStateToProps,null)(DaVoCuc)
