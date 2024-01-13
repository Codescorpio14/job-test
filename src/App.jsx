import { useEffect, useState } from "react";
import CardsList from "./components/CardsList";
import Model from "./components/Model";
import datas from "./data.json";
import axios from "axios";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || datas
  );
  const [isClicked, setIsClicked] = useState(false);
  const [cardClicked, setCardClicked] = useState(null);

  // Getting Data

  // useEffect(() => {
  //   const url = "http://localhost:3000";
  //   async function getData(link) {
  //     try {
  //       const res = await axios(link);
  //       setData(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getData(url);
  // }, [data]);

  // Save Data

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // Attachment Change Hanlder

  function attechmentInput(value) {
    const fileName = value[0].name;
    const newData = data.map((prevData) =>
      prevData.id === cardClicked
        ? { ...prevData, files: [...prevData.files, fileName] }
        : prevData
    );
    setData(newData);
  }

  function attachmentClicked(id) {
    setIsClicked((prev) => !prev);
    setCardClicked((prev) => (prev = id));
  }
  function closemodel() {
    setIsClicked((prev) => !prev);
  }

  const categories = [...new Set(data.map((item) => item.category))];
  const cardsListElm = categories.map((list) => (
    <CardsList
      key={list}
      type={list}
      data={data}
      handleAttachment={attachmentClicked}
    />
  ));

  return (
    <section>
      <div className="body">{cardsListElm}</div>
      {isClicked && (
        <Model
          closemodel={closemodel}
          inputHandle={attechmentInput}
          data={data}
          id={cardClicked}
        />
      )}
    </section>
  );
}

export default App;
