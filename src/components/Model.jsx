function Model({ id, inputHandle, closemodel, data }) {
  const matchedFile = data.find((data) => data.id === id);

  const listElm =
    matchedFile.files && matchedFile.files.length > 0 ? (
      matchedFile.files.map((file, index) => <li key={index}>{file}</li>)
    ) : (
      <li>No files available</li>
    );

  return (
    <article className="model-con">
      <div className="model">
        <div className="model-header">
          <h2>Upload a File</h2>
          <button onClick={closemodel}>X</button>
        </div>
        <input
          type="file"
          onChange={(event) => inputHandle(event.target.files)}
        />
        <div className="list">
          <ol>{listElm}</ol>
        </div>
      </div>
    </article>
  );
}

export default Model;
