const InvitedMember = (props) => {
  return (
    <li>
      <div className="row">
        <div className="col">
          {props.first_name}
          <br />
        </div>
        <button
          className="btn btn-warning"
          onClick={() => {
            props.deleteInvitation(props.memberID, props.tripID);
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default InvitedMember;
