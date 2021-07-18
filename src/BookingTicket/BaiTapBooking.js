import React, { Component, Fragment } from 'react';
import './assets/BaiTapBooking.css'
import ThongTinGhe from './ThongTinGhe';
import danhSachGhe from '../../src/Data/danhSachGhe.json'
import HangGhe from './HangGhe';
export default class BaiTapBooking extends Component {


    renderHangGhe =()=>{
        return danhSachGhe.map((item,index)=>{
            return  <div key={index} className="text-center" soHangGhe={index}>
                <HangGhe hangGhe={item} soHangGhe={index}/>
            </div>
        })
    }

    render() {
        return (
            <div>
                <div className="Booking" style={{ position: 'fixed', width: '100%', height: '100%' }}>
                    <div className="overlay">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-8">
                                    <h1 className="text-warning text-center mt-3">ĐẶT VÉ XEM PHIM CYBERLERN.VN</h1>
                                    <div style={{ textAlign: 'center', fontSize: '30px', color: 'white' }}>Màn hình</div>
                                    <div className="screen mt-3"></div>
                                    {this.renderHangGhe()}
                                    <button className="btn btn-success mt-5">Confirm Selection</button>
                                </div>
                                <div className="col-4">
                                    <h1 style={{ fontSize: '35px' }} className="mt-1 text-warning text-center mt-3">DANH SÁCH GHẾ BẠN CHỌN</h1>
                                    <ThongTinGhe />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
