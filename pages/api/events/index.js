const { events } = require("./data.json");

export default function header(req, res) {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ message: `The resquest ${req.method} is not allowed` });
  }
}
