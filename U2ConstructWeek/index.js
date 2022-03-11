var item = 1;
document.querySelector("#left").addEventListener('click', left);
document.querySelector("#right").addEventListener('click', right);

function left() {
  var items = document.querySelectorAll("#items > div");
  if (item == 1) {
    item = items.length;
  } else {
    item--;
  }
  runSlider();
}

function right() {
  var items = document.querySelectorAll("#items > div");
  if(item == items.length) {
    item = 1;
  } else {
    item++;
  }
  runSlider();
}

function runSlider() {
  var items = document.querySelectorAll("#items > div");
  for (var i = 0; i < items.length; i++) 
  {
    if (i + 1 == item) 
    {
      items[i].style.display = "block";
    } 
    else 
    {
      items[i].style.display = "none";
    }
  }
}

runSlider();