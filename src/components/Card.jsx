function Card({
  name,
  description,
  finished,
  comment,
  date,
  handleAttachment,
  files,
  id,
}) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="flex">
          <img src="./person.png" alt="client photo" />
          <p>Client Name</p>
        </div>
        <div className="flex">
          <img src="./person.png" alt="client photo" />
          <p>{name}</p>
        </div>
      </div>
      <div className="card-middle">
        <p>
          <img src="./layers.png" alt="icon" />
          {description.slice(0, 25)}....
        </p>
        <p className="task">
          <img src="./calender.png" alt="calender" />
          {finished}/2
        </p>
      </div>
      <div className="card-bottom">
        <img src="./person.png" alt="img1" />
        <img src="./person.png" alt="img1" />
        <p className="people-count">12+</p>
        <p>
          <img src="./chat.png" alt="chat" />
          {comment}
        </p>
        <p className="attechment" onClick={() => handleAttachment(id)}>
          <img src="./attechment.png" alt="" />
          {files?.length || "0"}
        </p>
        <p>
          <img src="./calender.png" alt="date" />
          {date}
        </p>
      </div>
    </div>
  );
}

export default Card;
