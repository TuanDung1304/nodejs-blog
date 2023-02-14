const express = require('express');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan("combined"));

// template engine
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      setChecked: (value, currentValue) => {
        return value === currentValue ? 'checked' : '';
      },
    },
  })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http:://localhost:${port}`);
});
