import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinTroChoi extends Component {
    render() {
        let {banChon} = this.props;
        return (
            <div className="text-center mt-3">
                <div className="display-5">BẠN CHỌN : <span style={{color:'red'}}>{banChon ? 'TÀI' : 'XỈU'}</span> </div>
                <div className="display-5">SỐ BÀN THẮNG : <span style={{color:'green'}}>{this.props.soBanThang}</span> </div>
                <div className="display-5">TỔNG SỐ BÀN CHƠI : <span style={{color:'blue'}}>{this.props.soBanChoi}</span> </div>
                <div  style={{color:'green'}} className="display-5">TỔNG SỐ ĐIỂM : <span style={{color:'blue'}}>{this.props.tongSoDiem}</span> </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        banChon:state.BaiTapGameXucXacReducer.taiXiu,
        soBanThang : state.BaiTapGameXucXacReducer.soBanThang,
        soBanChoi : state.BaiTapGameXucXacReducer.soBanChoi,
        tongSoDiem : state.BaiTapGameXucXacReducer.tongSoDiem,
    }
}

export default connect(mapStateToProps,null)(ThongTinTroChoi)
