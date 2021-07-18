const stateDefault = {
    taiXiu : true,
    mangXucXac : [
        {ma:6,hinhAnh:'./img/6.png'},
        {ma:6,hinhAnh:'./img/6.png'},
        {ma:6,hinhAnh:'./img/6.png'}
    ],
    soBanThang: 0,
    soBanChoi: 0,
    tongSoDiem: 0
}

const BaiTapGameXucXacReducer = (state = stateDefault, action)=>{
    switch (action.type) {
        default:
            return state

        case 'BAN_CHON' : {
            state.taiXiu = action.payload;
            return {...state};
        }

        case 'PLAY' : {
            // Tạo mảng ngẫu nhiên
            let mangXucXacNgauNhien =[];
            for(let i = 0; i < 3; i++){
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacNgauNhien ={ma : soNgauNhien, hinhAnh: `./img/${soNgauNhien}.png`};
                mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            state.mangXucXac = mangXucXacNgauNhien;

            // Tăng số bàn chơi
            state.soBanChoi +=1;
        
            //Tính tổng xúc xắc
            let tong=0;
            for (let element of mangXucXacNgauNhien) {
                tong += element.ma;
            }
            state.tongSoDiem = tong;
            console.log('tong',state.tongSoDiem);

            // Xử lí tài xỉu
            if(tong > 11 && action.payload === true ){
                state.soBanThang +=1;
            }

            return {...state};
        }
    }
}

export default BaiTapGameXucXacReducer;