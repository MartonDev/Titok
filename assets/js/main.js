let s = window.screen,
width = q.width = s.width,
height = q.height = s.height,
yPositions = Array(300).join(0).split(''),
ctx = q.getContext('2d');

function shuffle(array) {

  let m = array.length, t, i;

  while(m) {

    i = Math.floor(Math.random() * m--);
    t = array[m], array[m] = array[i], array[i] = t;

  }

  return array;

}

let alphabet = '01'.split(''),
draw = function() {

  ctx.fillStyle = 'rgba(0,0,0, .05)';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#0F0';
  ctx.font = '10pt Georgia';

  yPositions.map(function(y, index) {

    text = String.fromCharCode(1e2 + Math.random() * 33);
    x = (index * 10) + 10;

    q.getContext('2d').fillText(text, x, y);

    if(y > 100 + Math.random() * 1e4) {

      yPositions[index] = 0;

    }else {

      yPositions[index] = y + 10;

    }

  });

};

RunMatrix();

function RunMatrix() {

  if(typeof Game_Interval != 'undefined') {

    clearInterval(Game_Interval);

  }

  Game_Interval = setInterval(draw, 33);

}

function StopMatrix() {

  clearInterval(Game_Interval);

}

$('#unlock').click(function() {

  if($('#unlock-code').val() == '1234') {

    $('.code').css('display', 'none');

  }else {

    $('.code p.error').css('display', 'block');

  }

});
