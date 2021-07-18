import React, { Component } from 'react'
import { connect } from 'react-redux';
class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="text-center ketQua">
                <div className="textThongBao text-warning">{this.props.ketQua}</div>
                <div className="text-success textThongBao">Số bàn thắng : <span className="text-warning textThongBao">{this.props.soBanThang}</span></div>
                <div className="text-success textThongBao">Số bàn chơi : <span className="text-warning textThongBao">{this.props.soBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        ketQua : state.baiTapOanTuXiReducer.ketQua,
        soBanThang : state.baiTapOanTuXiReducer.soBanThang,
        soBanChoi : state.baiTapOanTuXiReducer.soBanChoi,
    }
}

export default connect(mapStateToProps,null)(KetQuaTroChoi);

