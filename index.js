// function that on button click hides or shows header
let hideShowFunction = function() {

  let display = document.getElementById('demo').style.display;

  if (display == 'block') {
      document.getElementById('demo').style.display='none'
      document.getElementById('button').innerText = 'show header'
  } else {
      document.getElementById('demo').style.display='block'
      document.getElementById('button').innerText = 'hide header'
  }
};