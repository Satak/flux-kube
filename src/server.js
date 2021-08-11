const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/items', (req, res) => {
  const data = [
    {
      id: 1,
      name: 'test',
    },
    {
      id: 2,
      name: 'second data',
    },
  ];

  return res.status(200).json({
    success: true,
    data: data,
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`);
});
