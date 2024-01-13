import Card from "./Card";

function CardsList({ type, data, handleAttachment }) {
  const matchedCards = data.filter((item) => item.category === type);

  const cardsElm = matchedCards.map((card) => (
    <Card key={card.id} {...card} handleAttachment={handleAttachment} />
  ));

  const colorMap = {
    incomplete: { background: "#d21010" },
    "To Do": { background: "#00b5ff" },
    Doing: { background: "#ffe500" },
    "Under Review": { background: "orange" },
    Completed: { background: "green" },
    Overdo: { background: "darkorange" },
  };
  const colorStyle = colorMap[type] || [];

  return (
    <article className="card-list">
      <div className="card-header">
        <h3>
          <span style={colorStyle}></span>
          {type}
        </h3>
        <p>0</p>
      </div>
      <div className="card-con">{cardsElm}</div>
    </article>
  );
}

export default CardsList;
