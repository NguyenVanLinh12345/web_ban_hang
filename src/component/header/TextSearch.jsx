import { useEffect } from 'react';
import style from './TextSearch.module.scss';
import { HiOutlineSearchCircle } from 'react-icons/hi';
// import { BsImages } from 'react-icons/bs';
function TextSearch({openImg, setIsSearching, setUrlImage, urlImage}){
   
    function createVirtualURL(file){
        const url = URL.createObjectURL(file);
        console.log(url)
        setUrlImage(url);
    }
    useEffect(()=>{

        // return URL.revokeObjectURL(urlImage);
    }, [urlImage]);
    function search (){
        setIsSearching(true)
    }
    return(
        <div className='flex align_items_center'>
        <div className={style.container}>
           <input onFocus={()=>openImg(false)} className={`${style.text}`} type="search" placeholder='Nhập nội dung...'/>
           <label htmlFor="imgSearch" onClick={()=>openImg(true)} className={`${style.button}`}>{"Tìm kiếm bằng hình ảnh"}</label> 
           <input id='imgSearch' onChange={(e)=>createVirtualURL(e.target.files[0])} type="file" style={{display: "none"}} />
        </div>
           
        <span onClick={search} className={style.wrap_icon}><HiOutlineSearchCircle className={style.icon}/></span>
        </div>
    )
}

export default TextSearch;