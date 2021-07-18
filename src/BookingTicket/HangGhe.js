import React, { Component } from 'react'
import { connect } from 'react-redux';

class HangGhe extends Component {

    renderGhe =()=>{
        return this.props.hangGhe.danhSachGhe.map((item,index)=>{
            let cssGheDaDat = '';
            let cssGheDangChon = '';
            let disable = false;
            // Kiểm tra số ghế có trong redux không
            let indexSoGhe = this.props.gheBanChon.findIndex(ghe => ghe.soGhe === item.soGhe && ghe.daDat === false);
            let indexSoGheDaChon = this.props.gheBanChon.findIndex(ghe => ghe.daDat === true && ghe.soGhe === item.soGhe);
            // Kiểm tra confirm
            if(indexSoGhe !== -1){
                cssGheDangChon = 'DangChon';
            }

            // Nếu ghế đã đặt hoặc ghế đã có trong state và daDat = true
            if(item.daDat || indexSoGheDaChon !== -1){
                cssGheDaDat = 'DuocChon';
                disable = true;
            }

            
            if(item.daDat || indexSoGhe !== -1){
                disable = true;
            }
             
            return <button disabled={disable} onClick={()=>{this.props.chonGhe(item)}}  className={` ml-3 ghe${cssGheDaDat}${cssGheDangChon}`} key={index} >
                {item.soGhe}
            </button>
        })
    }


    renderSoHang =()=>{
        
        return this.props.hangGhe.danhSachGhe.map((item,index)=>{
            return <button className="rowNumber" key={index}>
                {item.soGhe}
            </button>
        })
    }

    renderHangGhe =()=>{
        if(this.props.soHangGhe === 0 ){
            return <div>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>
        }else{
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }

        
        
    }

    render() {
        return (
            <div className="text-light ml-3 mt-3">
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    
    return{
        chonGhe :(soGhe)=>{
            const action ={
                type:'CHON_GHE',
                payload : soGhe
            }
            dispatch(action)
        }     
    }
}

const mapStateToProps = state =>{
    return{
        gheBanChon : state.BaiTapChonGheReducer.gheBanChon,
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)