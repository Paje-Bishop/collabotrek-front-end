
const Hotel = (props) => {
  return(
    <div>
      <li>
        <div className="row">
          <div className="col">
            {props.name}
            <br />
            {props.address}
            <br />
            Price: {props.price}
            <br />
            Votes: {props.votes}
          </div>
            <button>Vote</button>
        </div>
      </li>
    </div>
  )
}

export default Hotel;