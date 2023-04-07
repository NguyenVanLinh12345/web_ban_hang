import style from './ContactItem.module.css';
function ContactItem({icon, url, name, position = "bottom"}) {

    return (
        <a className={style.link} href={url}>
            <span className={style.icon}>{icon}</span>
            <span className={style.name}>{name}</span>
        </a>
    )
}

export default ContactItem;