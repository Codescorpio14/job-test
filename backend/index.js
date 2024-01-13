const express = require("express");
const path = require("path");
const fs = require("fs").promises;
const cors = require("cors");
const { log } = require("console");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
const dataFilePath = path.join(__dirname, "data", "data.json");

let data;

// Data Loader
async function loadData() {
  try {
    const fileContent = await fs.readFile(dataFilePath, "utf-8");
    data = JSON.parse(fileContent);
  } catch (error) {
    console.error("Error loading data:", error);
    data = [];
  }
}
loadData();

// Get Request
app.get("/", (req, res) => {
  res.json(data);
});

// Post Request
app.post("/add", async (req, res) => {
  const { name, id } = req.name;

  const newData = data.map((prevData) =>
    prevData.id === id
      ? { ...prevData, files: [...prevData.files, name] }
      : prevData
  );
  console.log(req);
  // Updating Data
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), "utf-8");
    res.json({ success: true, data: newData });
  } catch (error) {
    console.error("Error saving data to file:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
