    var blob = document.getElementById('blob');

    // Update blob position on mousemove
    document.addEventListener('mousemove', function(e) {
      var x = e.clientX;
      var y = e.clientY;
      blob.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });