import "./Flight.css";

const Flight = (props) => {
  return (
    <div className="detailgroup">
      <li className="container">
        <div className="row">
          <section className="departInfo col-4 container">
            Depart: {props.depart_city}
            <br />
            {props.depart_date}
            <br />
            {props.depart_time}
            <br />
          </section>
          <section className="arriveInfo col-4">
            Arrive: {props.arrive_city}
            <br />
            {props.arrive_date}
            <br />
            {props.arrive_time}
            <br />
          </section>
          <div className="price col-4">
            Price: {props.price}
            <br />
            Votes: {props.votes}
          </div>
          <button>Vote</button>
        </div>
      </li>
    </div>
  );
};

export default Flight;
