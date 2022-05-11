const { events } = require("./data.json");

export default function header(req, res) {
  const evt = events.filter((ev) => ev.slug === req.query.slug);
  if (req.method === "GET") {
    res.status(200).json(evt);
  } else {
    res.setHeader("Allow", ["GET"]);
    res
      .status(405)
      .json({ message: `The resquest ${req.method} is not allowed` });
  }
}
