// Import the 'connect' module
const connect = require('connect');
const { URL } = require('url');// import url

// Create a new Connect app
const app = connect();

app.use('/', (req, res) => {
  try {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const method = parsedUrl.searchParams.get('method');
    const x = parseInt(parsedUrl.searchParams.get('x'), 10);
    const y = parseInt(parsedUrl.searchParams.get('y'), 10);

    if (!method || !x || !y || isNaN(x) || isNaN(y)) {
      throw new Error('Error: method, x, or y are missing or invalid');
    }

    let result;
    switch (method) {
      case 'add':
        result = x + y; // addition
        break;
      case 'subtract':
        result = x - y; // subtraction
        break;
      case 'multiply':
        result = x * y; // multiplication
        break;
      case 'divide':
        // check if it can be divided by zero
        if (y === 0) {
          throw new Error('Division by zero');
        }
        result = x / y; // division
        break;
      default:
        // throw an error if invalid method is used
        throw new Error('Invalid');
    }

    // generate the output
    const output = `${x} ${method} ${y} = ${result}`;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(output);
  } catch (error) {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end(`Error: ${error.message}`);
  }
});

// start and run the server 

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/lab03');
});
