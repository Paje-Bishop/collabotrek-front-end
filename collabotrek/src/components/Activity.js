
const Activity = (props) => {
  return(
    <div>
      <li>
        <div className="row">
          <div className="col">
            {props.name}
            <br />
            {props.address}
            <br />
            {props.price}
          </div>
          <button>Vote</button>
        </div>
      </li>
    </div>
  )
}

export default Activity;