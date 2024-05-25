import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi2";
import css from "./contact.module.css"
export default function Contact({ name, phone, onDelete, id }) {
    return (
        <>
            <ul className={css.list}>
                <li><HiUser />{name}</li>
                <li><HiPhone />{phone}</li>
            </ul>
            <button className={css.delete} onClick={()=>onDelete(id)}>Delete</button>
        </>
    )
}