import { VscLocation } from 'react-icons/vsc';
import { CgPhone } from 'react-icons/cg';
import { RiMailSendLine } from 'react-icons/ri';
import { AiFillSkype } from 'react-icons/ai';

import { TfiFacebook } from 'react-icons/tfi';
import { RiInstagramLine } from 'react-icons/ri';
import { IoLogoYoutube } from 'react-icons/io5';
import { BsTwitter } from 'react-icons/bs';
import { IoLogoTiktok } from 'react-icons/io5';
const arr1 = [{
    url: "/",
    name: "Trang chu"
},
{
    url: "/",
    name: "Gioi thieu"
},
{
    url: "/",
    name: "Cua hang"
},
{
    url: "/",
    name: "Tin tuc"
},
{
    url: "/",
    name: "Lien he"
}
];
const arr2 = [
    {
        name: "Dung cu van phong",
        url: "/"
    },
    {
        name: "Giay",
        url: "/"
    },
    {
        name: "Bia ho so",
        url: "/"
    },
    {
        name: "But viet",
        url: "/"
    },
    {
        name: "Tap so",
        url: "/"
    },
    {
        name: "Luu tru",
        url: "/"
    },
    {
        name: "Thiet bi",
        url: "/"
    },
    {
        name: "Tien ich",
        url: "/"
    },
    {
        name: "Muc-Ruban",
        url: "/"
    }];
const arr3 = [
    {
        name: "319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM",
        icon:  <VscLocation/>,
        url: ""
    }, 

    {
        name: "0126 922 0162",
        icon:  <CgPhone/>,
        url: ""
    }, 

    {
        name: "demonhunter@gmail.com mon@mona.media",
        icon: <RiMailSendLine />,
        url: ""
    }, 

    {
        name: "demonhunterp",
        icon: <AiFillSkype/>,
        url: ""
    }];


const linkImg = "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg";
const arr4 = [
    {
        name: "Ten cua san pham 1",
        url: linkImg,
        price: 10000000
    },
    {
        name: "Ten cua san pham 2",
        url: linkImg,
        price: 10000000
    },
    {
        name: "Ten cua san pham 3",
        url: linkImg,
        price: 10000000
    },
    {
        name: "Ten cua san pham 4",
        url: linkImg,
        price: 10000000
    },
    {
        name: "Ten cua san pham 5",
        url: linkImg,
        price: 10000000
    },
    {
        name: "Ten cua san pham 6",
        url: linkImg,
        price: 10000000
    }
];

const arr5 = [
    {
        icon: <TfiFacebook />,
        name: "Theo doi Facebook",
        url: "/"
    },
    {
        icon: <RiInstagramLine />,
        name: "Theo doi Instagram",
        url: "/"
    },
    {
        icon: <BsTwitter/>,
        name: "Theo doi Twitter",
        url: "/"
    },
    {
        icon: <IoLogoYoutube />,
        name: "Theo doi Youtube",
        url: "https://www.youtube.com"
    },
    {
        icon: <IoLogoTiktok />,
        name: "Theo doi Tiktok",
        url: "/"
    }
]

export { arr1, arr2, arr3, arr4, arr5 };