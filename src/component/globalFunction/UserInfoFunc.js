function getUserInfo(dispatch){
    dispatch({type: "all", payload: {
        anhDaiDien: "https://hanoimoi.com.vn/Uploads/tuandiep/2018/4/8/1(1).jpg",
        ten: "Nguyen Van A",
        diaChi: "Da Tien"
    }})
}

function updateUserInfo(selectedImage, value){
    console.log("data: " + selectedImage);
    console.log(value);
}

export { getUserInfo, updateUserInfo };