import rooms from './rooms.json'


export default function roomsHandler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(rooms)
      break
  }
}
