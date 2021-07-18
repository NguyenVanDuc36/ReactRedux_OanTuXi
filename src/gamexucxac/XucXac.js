import React, { Component } from 'react'
import { connect } from 'react-redux'
class XucXac extends Component {

    renderXucXac = () =>{
        const jsx = this.props.xucXac.map((xucXac,index)=>{
            return <img style={{width:'25%'}}  className=" ml-2" key={index} src={xucXac.hinhAnh} ></img>
        })
        return jsx;
    }

    render() {
        let {xucXac} = this.props;
        console.log(xucXac);
        return (
            <div>
                {this.renderXucXac()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        xucXac : state.BaiTapGameXucXacReducer.mangXucXac
    }
}   

export default connect(mapStateToProps,null)(XucXac)
