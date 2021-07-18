import React, { Component } from 'react'
import { connect } from 'react-redux';

 class DaVoCucThanos extends Component {

    renderIronMan =()=>{
        return this.props.DaVoCucThanos.map((item,index)=>{
            return  <div className="col-2 text-right" key={index}>
                        <img className="daVoCuc" src={item.hinhAnh}></img>
                    </div>
        })
    }

    render() {
        console.log(this.props.DaVoCucThanos);
        return (
            <div className="row">
                {this.renderIronMan()}
            </div>
        )
    }
}


const mapStateToProps =(state)=>{
    return{
        DaVoCucThanos : state.baiTapOanTuXiReducer.mangDaThanos
    }
}
export default connect(mapStateToProps,null)(DaVoCucThanos)
