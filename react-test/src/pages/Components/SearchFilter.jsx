function SearchFilter(info){
    return(
        <input 
        type="text" 
        placeholder='Zoek hier naar een topic' 
        onChange={(event) => info.onSearch(event.target.value)} />
    )
}

export default SearchFilter;