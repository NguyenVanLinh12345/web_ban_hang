import { TfiEmail } from 'react-icons/tfi';
import { AiFillPhone } from 'react-icons/ai';

const arr1 = [
    {
        name: "mon@mona.media",
        url: "mon@mona.media",
        method: "mailto:",
        icon: <TfiEmail />
    },
    {
        name: "1900 636 648",
        url: "1900 636 648",
        method: "tel:",
        icon: <AiFillPhone />
    }
];
const arr2 = [
    { 
        name: "TRANG CHU",
        url: "/"
    },
    { 
        name: "Gioi thieu",
        url: "/about"
    },
    { 
        name: "Cua hang",
        url: "/products"
    },
    { 
        name: "Tin tuc",
        url: "/news"
    },
    { 
        name: "Lien he",
        url: "/contact"
    }
]
export {arr1, arr2};
