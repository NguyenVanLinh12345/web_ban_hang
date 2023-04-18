import style from './ProductsControl.module.scss';

function ProductsControl({numberResult}){
    const arr = [
        {   id: 1, name: "Thứ tự mặc định"  },
        {   id: 2, name: "Thứ tự theo giá: Thấp đến cao"  },
        {   id: 3, name: "Thứ tự theo giá: Cao đến thấp"  },
        {   id: 4, name: ""  },
        {   id: 5, name: ""  },
        {   id: 6, name: ""  },
    ]
    return (
        <div className={style.products_controls}>
            <span>{`Xem tất cả ${numberResult} kết quả`}</span>
            <select name="" id="">
                {
                    arr.map(value=>(
                        <option value={value.id}>{value.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default ProductsControl;