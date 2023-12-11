import './index.css'

const Emojielement = props => {
  const {itemList, buttonChange} = props
  const {name, imageUrl} = itemList
  const button = () => {
    buttonChange()
  }
  return (
    <li className="cont">
      <img src={imageUrl} className="emoji" alt={name} onClick={button} />
      <p>{name}</p>
    </li>
  )
}
export default Emojielement
