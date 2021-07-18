import React, { Component } from 'react'
import DaVoCuc from './DaVoCuc'
import DaVoCucThanos from './DaVoCucThanos';

export default class BanTayVoCuc extends Component {
    render() {
        return (
            <div className="banTayVoCuc mt-5">
                <div className="row">
                    <div className="col-6">
                        <img style={{width:'20%'}} src="./img/ironman.jpg"></img>
                        <DaVoCuc/>
                    </div>
                    <div className="col-6">
                        {/* <img style={{width:'20%',float:'right'}} src="./img/thanos.jpg"></img> */}
                        <img style={{width:'20%',marginLeft:'36rem'}} src="./img/thanos.jpg"></img>
                        <DaVoCucThanos/>
                    </div>
                </div>
            </div>
        )
    }
}
