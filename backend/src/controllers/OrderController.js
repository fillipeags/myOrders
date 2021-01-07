class OrderController {
  index(request, response) {
    response.send('index');
  }

  store(request, response) {
    response.send('store');
  }

  update(request, response) {
    response.send('update');
  }
}

module.exports = new OrderController();
