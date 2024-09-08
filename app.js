import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/data", (req, res) => {
  const results = [
    { id: 235, title: "나의 옛날 이야기", writer: "shlee", status: "none" },
    {
      id: 236,
      title: "나의 두번째 이야기",
      writer: "shpark",
      status: "progress",
    },
    { id: 237, title: "나의 세번째 이야기", writer: "jhpark", status: "done" },
    {
      id: 238,
      title: "나의 엄청나게 정말정말 기다란 이야기",
      writer: "hjpark",
      status: "done",
    },
  ];

  res.json(results);
});

app.listen(port, () => {
  console.log(`server is running at http://127.0.0.1:${port}`);
});
