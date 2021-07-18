const stateDefault = {
    gheBanChon : [
    ],
    tongTien : 0
}

const BaiTapChonGheReducer = (state = stateDefault,action)=>{
    switch (action.type) {

        case 'CHON_GHE' : {
            // Tổng tiền
            let tongTien = state.tongTien;
            tongTien += action.payload.gia;
            state.tongTien = tongTien;
            // Tính tổng tiền
            let soGhe = [...state.gheBanChon];
            let soGheClick = {...action.payload}

            soGhe = [...soGhe,soGheClick];
            state.gheBanChon = [...soGhe];
            return {...state};
        }

        case 'HUY_GHE':{
            let mangGhe = [...state.gheBanChon];
            mangGhe = mangGhe.filter(ghe=>ghe.soGhe !== action.payload.soGhe);

            state.gheBanChon = [...mangGhe]
            return {...state};
        }

        case 'CONFIRM_GHE':{
            let soGhe = [...state.gheBanChon];
            for ( let ghe of soGhe ) {
                ghe.daDat = true;
            }
            state.gheBanChon = [...soGhe];  
            return {...state};
        }

        default:
        return state;
    }
}

export default BaiTapChonGheReducer;