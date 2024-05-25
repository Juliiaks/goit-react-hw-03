import css from "./searchBox.module.css"
export default function SearchBox({ filter, handleChange }) {
    return (
        <div className={css.container}>
            <p className={css.text}>Search by name</p>
            <input className={css.input} type="text" placeholder="Enter..." value={filter} onChange={handleChange}></input>
       </div>
    )
}