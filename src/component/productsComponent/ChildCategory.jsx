import style from './ChildCategory.module.scss';

function ChildCategory({ danhSach }) {
    
    return (
        <ul className={style.danh_muc_con}>{
            danhSach.map(value => (
                <li key={value.id}><span className={style.link_con}>San pham demo</span></li>
            ))
        }
        </ul>
    )
};

export default ChildCategory;