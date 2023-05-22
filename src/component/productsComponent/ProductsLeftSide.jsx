import { useEffect, useState } from 'react';
import style from './ProductLeftSide.module.scss';
import { IoIosArrowDown } from 'react-icons/io';

function ProducsLeftSide({ setDanhSach }) {
    const [arr, setArr] = useState([]);

    const [startPrice, setStartPrice] = useState(0);
    const [endPrice, setEndPrice] = useState(100);

    useEffect(() => {
        fetch('http://localhost:8080/danhmuc')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setArr(data);
                console.log(data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [])

    const func1 = (thisId) => {
        fetch(`http://localhost:8080/sanpham/danhmuc?id=${thisId}`)
            .then(response => response.json())
            .then(data => {
                // Xử lý dữ liệu trả về ở đây
                setDanhSach(data)
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    };
    const func2 = () => console.log("func icon");
    const func3 = () => {
        if (startPrice !== null && startPrice !== "" && endPrice !== null && endPrice !== "") {
            fetch(`http://localhost:8080/sanpham/?start=${Number(startPrice)}&end=${Number(endPrice)}`)
                .then(response => response.json())
                .then(data => {
                    // Xử lý dữ liệu trả về ở đây
                    setDanhSach(data)
                })
                .catch(error => {
                    console.error(error);
                });
        }
    };

    return (
        <div className={style.product_left_side}>
            <div>
                <p className={style.title}>Danh muc san pham</p>
                <ul className={style.danh_muc}>
                    {
                        arr.map(value => (
                            <li key={value.id}>
                                <span className={style.link}>
                                    <span onClick={() => func1(value.id)} className={style.link_title}>{value.tenDanhMuc}</span>
                                    <IoIosArrowDown onClick={func2} />
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <p className={style.title}>Loc theo gia</p>
                <div className={style.filter}>
                    <input value={startPrice} onChange={(e)=> setStartPrice(e.target.value)} type="number" name='Tu' />
                    <input value={endPrice} onChange={(e) => setEndPrice(e.target.value)} type="number" name='den' />
                </div>
                <button className={style.btn_filter} onClick={func3}>Loc</button>
            </div>

        </div>
    )
}

export default ProducsLeftSide;