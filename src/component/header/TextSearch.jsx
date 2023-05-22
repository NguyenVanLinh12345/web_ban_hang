import { useEffect, useState } from 'react';
import style from './TextSearch.module.scss';
import { HiOutlineSearchCircle } from 'react-icons/hi';

// import { BsImages } from 'react-icons/bs';
function TextSearch({ openImg, setIsSearching, setUrlImage, urlImage }) {

    function createVirtualURL(file) {
        const url = URL.createObjectURL(file);
        setAnhUpload(file);
        setTextToSearch("");
        console.log(url)
        setUrlImage(url);
    }

    const [anhUpload, setAnhUpload] = useState(null);
    const [texToSearch, setTextToSearch] = useState("");


    useEffect(() => {

        // return URL.revokeObjectURL(urlImage);
    }, [urlImage]);
    function search() {

        if (texToSearch === "") {
            setIsSearching(true);

            const formData = new FormData();
            formData.append('image', anhUpload);
            // formData.append('text', valueInText);
            fetch('http://localhost:8000/searchImage', {
                method: 'POST',
                body: formData
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setIsSearching(false);
                    window.location.href = "http://localhost:3000/products/" + data.message;
                })
                .catch(error => {
                    console.error('Error uploading image', error);
                });
        }
        else {
            window.location.href = "http://localhost:3000/products/" + texToSearch;
        }
    }
    return (
        <div className='flex align_items_center'>
            <div className={style.container}>
                <input value={texToSearch} onChange={(e) => setTextToSearch(e.target.value)} onFocus={() => openImg(false)} className={`${style.text}`} type="search" placeholder='Nhập nội dung...' />
                <label htmlFor="imgSearch" onClick={() => openImg(true)} className={`${style.button}`}>{"Tìm kiếm bằng hình ảnh"}</label>
                <input id='imgSearch' onChange={(e) => createVirtualURL(e.target.files[0])} type="file" style={{ display: "none" }} />
            </div>

            <span onClick={search} className={style.wrap_icon}><HiOutlineSearchCircle className={style.icon} /></span>
        </div>
    )
}

// import { useEffect } from 'react';
// import style from './TextSearch.module.scss';
// import { HiOutlineSearchCircle } from 'react-icons/hi';
// // import { BsImages } from 'react-icons/bs';
// function TextSearch({openImg, setIsSearching, setUrlImage, urlImage}){

//     function createVirtualURL(file){
//         const url = URL.createObjectURL(file);
//         console.log(url)
//         setUrlImage(url);
//     }
//     useEffect(()=>{

//         // return URL.revokeObjectURL(urlImage);
//     }, [urlImage]);
//     function search (){
//         setIsSearching(true)
//     }
//     return(
//         <div className='flex align_items_center'>
//         <div className={style.container}>
//            <input onFocus={()=>openImg(false)} className={`${style.text}`} type="search" placeholder='Nhập nội dung...'/>
//            <label htmlFor="imgSearch" onClick={()=>openImg(true)} className={`${style.button}`}>{"Tìm kiếm bằng hình ảnh"}</label> 
//            <input id='imgSearch' onChange={(e)=>createVirtualURL(e.target.files[0])} type="file" style={{display: "none"}} />
//         </div>

//         <span onClick={search} className={style.wrap_icon}><HiOutlineSearchCircle className={style.icon}/></span>
//         </div>
//     )
// }

export default TextSearch;