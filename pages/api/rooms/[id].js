import roomsData from './rooms.json'


export default function roomHandler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(roomsData.rooms[req.query.id])
      break
  }
}
