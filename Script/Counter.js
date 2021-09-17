$({ Counter: 0 }).animate({
    Counter: $('.years').text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function() {
      $('.years').text(Math.ceil(this.Counter));
    }
  });

  $({ Counter: 0 }).animate({
    Counter: $('.customer').text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function() {
      $('.customer').text(Math.ceil(this.Counter));
    }
  });

  $({ Counter: 0 }).animate({
    Counter: $('.staff').text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function() {
      $('.staff ').text(Math.ceil(this.Counter));
    }
  });

  $({ Counter: 0 }).animate({
    Counter: $('.Menu').text()
  }, {
    duration: 4000,
    easing: 'swing',
    step: function() {
      $('.Menu ').text(Math.ceil(this.Counter));
    }
  });