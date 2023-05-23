
const input = (prop) => {
  return (
    <input 
          type={prop.type} 
          onChange={prop.handleChange} 
          name={prop.name} 
          placeholder={prop.placeholder}
          value={prop.value}
          checked={prop.checked} />
  )
}

export default input