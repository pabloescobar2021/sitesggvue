// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 8081;

// // Разрешаем запросы с порта 8082
// app.use(cors({
//   origin: 'http://localhost:8082', // Разрешаем только с этого источника
// }));

// app.use(express.json());

// // Обработчик POST-запроса на /submit
// app.post('/submit', (req, res) => {
//   console.log('Received data:', req.body);
//   res.status(200).send('Data received');
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
