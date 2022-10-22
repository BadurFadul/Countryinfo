const Filter = ({text, value, handlefunction})=>{
    return(
        <div> {text} <input value={value} onChange={handlefunction}></input> </div>
    )
}
export default Filter