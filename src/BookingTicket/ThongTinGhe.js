import React, { Component } from "react";
import { connect } from 'react-redux';

class ThongTinGhe extends Component {
    
    renderGheBanChon = ()=>{
        return this.props.gheBanChon.map((item,index)=>{
            return <tr key={index} className="text-center">
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td><button onClick={()=>{this.props.huyGhe(item)}} className="btn btn-danger">x</button></td>
            </tr>
        })
    }
    renderTongTien = ()=>{
        return <tr className="text-center">
            <td className="text-warning">Tổng tiền</td>
            <td>{this.props.tongTien}</td>
            <td></td>
        </tr>
    }

    render() {
        console.log(this.props.gheBanChon);
        return (
            <div className="mt-5">
                <button className="gheDuocChon"></button>{" "}
                <span className="text-light" style={{ fontSize: "30px" }}>
                    Ghế đã đặt
                </span>
                <br />
                <button className="gheDangChon"></button>{" "}
                <span className="text-light" style={{ fontSize: "30px" }}>
                    Ghế đang đặt
                </span>
                <br />
                <button className="ghe"></button>{" "}
                <span className="text-light" style={{ fontSize: "30px" }}>
                    Ghế chưa đặt
                </span>
                <br />
                <button onClick={()=>{this.props.confirm()}} className="text-light mt-3 btn btn-success">Confirm selection</button>

                <div className="mt-5">
                    <table border="2" className="table text-light">
                        <thead>
                            <tr className="text-center" style={{fontSize:'30px'}}  >
                                <td>Số ghế</td>
                                <td>Giá</td>
                                <td>Hủy</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderGheBanChon()}
                            {this.renderTongTien()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        gheBanChon : state.BaiTapChonGheReducer.gheBanChon,
        tongTien : state.BaiTapChonGheReducer.tongTien
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        huyGhe : soGhe =>{
            const action ={
                type:'HUY_GHE',
                payload : soGhe
            }
            dispatch(action)
        },
        confirm : ()=>{
            const action ={
                type:'CONFIRM_GHE',
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ThongTinGhe)

