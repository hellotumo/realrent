var doCalcButton = document.getElementById('doCalc');

doCalcButton.onclick = function () {
  var statedRate = document.getElementById('statedRate').value;
  var leaseLength = document.getElementById('leaseLength').value;
  var dealDuration = document.getElementById('dealDuration').value;

  console.log('stated rate X lease length: '+statedRate*leaseLength);
  console.log('leaseLength - dealDuration: '+(leaseLength-dealDuration));
  var realRent = (statedRate*leaseLength)/(leaseLength-dealDuration);
  var realRentDisplay = document.getElementById('realRent');

  console.log('the real rent is: '+realRent);

  realRentDisplay.innerHTML = "$"+Math.ceil(realRent);
  
};

