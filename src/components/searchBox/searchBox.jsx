export default function SearchBox({filter, handleChange}) {
    return (
        <div>
            <p>Search by name</p>
            <input type="text" value={filter} onChange={handleChange}></input>
       </div>
    )
}