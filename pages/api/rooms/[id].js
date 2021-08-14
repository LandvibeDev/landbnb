// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import roomsData from './rooms.json'

export default function roomHandler(req, res) {
  res.status(200).json(roomsData.rooms[req.query.id - 1])
}
