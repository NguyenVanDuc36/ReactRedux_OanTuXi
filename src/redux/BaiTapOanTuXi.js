const stateDefault = {
    mangDatCuoc: [
        { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: true },
        { ma: "bua", hinhAnh: "./img/bua.png", datCuoc: false },
        { ma: "bao", hinhAnh: "./img/bao.png", datCuoc: false },
    ],
    mangDefault: [
        { hinhAnh: "./img/da1.jpg" },
        { hinhAnh: "./img/da2.jpg" },
        { hinhAnh: "./img/da3.jpg" },
        { hinhAnh: "./img/da4.jpg" },
        { hinhAnh: "./img/da5.jpg" },
    ],
    mangDaIronMan: [],
    mangDaThanos: [],
    ketQua: "I am iron man",
    soBanThang: 0,
    soBanThua: 0,
    soBanChoi: 0,
    Computer: { ma: "keo", hinhAnh: "./img/keo.png", datCuoc: false },
};

const baiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "BAN_CHON": {
            let mangDatCuoc = [...state.mangDatCuoc];
            for (let item of mangDatCuoc) {
                item.datCuoc = false;
            }

            let index = mangDatCuoc.findIndex((item) => item.ma === action.ma);
            if (index !== -1) {
                mangDatCuoc[index].datCuoc = true;
            }

            state.mangDatCuoc = mangDatCuoc;
            return { ...state };
        }

        case "RAMDOM": {
            let random = Math.floor(Math.random() * 3) + 0;
            state.Computer = state.mangDatCuoc[random];
            console.log("action 1");
            return { ...state };
        }

        case "KET_QUA_TX": {
            console.log("action 2");
            let player = {
                ...state.mangDatCuoc.find((item) => item.datCuoc === true),
            };
            let computer = { ...state.Computer };

            switch (player.ma) {
                case "keo":
                    {
                        if (computer.ma === "keo") {
                            state.ketQua = "Hòa nhau !";
                        } else if (computer.ma === "bua") {
                            state.ketQua = "Thua sml !";
                            state.soBanThua += 1;
                        } else {
                            state.ketQua = "Thắng rồi nha !";
                            state.soBanThang += 1;
                        }
                    }
                    break;

                case "bua":
                    {
                        if (computer.ma === "keo") {
                            state.ketQua = "Thắng rồi nha !";
                            state.soBanThang += 1;
                        } else if (computer.ma === "bua") {
                            state.ketQua = "Hòa nha !";
                        } else {
                            state.ketQua = "Thua sml !";
                            state.soBanThua += 1;
                        }
                    }
                    break;

                case "bao":
                    {
                        if (computer.ma === "keo") {
                            state.ketQua = "Thua sml !";
                            state.soBanThua += 1;
                        } else if (computer.ma === "bua") {
                            state.ketQua = "Thắng rồi nha !";
                            state.soBanThang += 1;
                        } else {
                            state.ketQua = "Hòa nha !";
                        }
                    }
                    break;

                default:
                    state.ketQua = "I am Iron man";
            }
            state.soBanChoi += 1;
            return { ...state };
        }

        case "DA": {
            let mangIromMan = [...state.mangDaIronMan];
            let mangThanos = [...state.mangDaThanos];

            if (state.ketQua === "Thắng rồi nha !") {
                mangIromMan.push(state.mangDefault[state.soBanThang - 1]);
            } else if (state.ketQua === "Thua sml !") {
                mangThanos.push(state.mangDefault[state.soBanThua - 1]);
            }

            if (state.soBanThang === 5 || state.soBanThua === 5) {
                if(state.soBanThang > state.soBanThua ){
                    alert('Chúc mừng bạn đã thắng');
                }else{
                    alert('Bạn đã thua');
                }
                window.location.reload();
            }

            state.mangDaIronMan = [...mangIromMan];
            state.mangDaThanos = [...mangThanos];
            return { ...state };
        }

        default:
            return state;
    }
};

export default baiTapOanTuXiReducer;
