var Link = {

}

var Body = {
  setColor: function (color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor :function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}

function nightdayHandler(self){
  if(self.value === 'day'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value = 'night';
  }else{
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value = 'day';
  }
}
