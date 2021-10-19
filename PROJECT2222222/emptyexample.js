
var page;
let login,hmpg,menu,badge;

function preload () {
  login = loadImage('https://imgur.com/Q27XBQE.jpg');
  hmpg = loadImage('https://imgur.com/xiSfTpB.jpg');
  menu = loadImage('https://imgur.com/YP8W7oe.jpg');
  badge = loadImage('https://imgur.com/NFFhIx9.jpg');
}
function setup() {

createCanvas(360, 540);
background(0);
    page = 1;
}

function draw() {
  background(0);

page 1: login;

if (page==1) {
  image(login,0,0);

} else

//page 2: home
if (page==2) {
  background(255,0,0);
  image(hmpg, 0,0);

}
//page3 menu
else if
(page==3) {
  background(255,255,0);
  image(menu,0,0);

 }
//page4 badge
 else if (page==4) {
  background(0,255,0);
  image(badge,0,0);
}
}
function mousePressed() {

  //login
  if (page==1 && mouseX>=130 && mouseX<=230 && mouseY>=160 && mouseY<=260){
    page++;
  }

  //home
else if (page==2 && mouseX>=5 && mouseX<=355 && mouseY>=275 && mouseY<=390) {
    page++;
  }
  //menu
else if (page==3 && mouseX>=5 && mouseX<=355 && mouseY>=275 && mouseY<=390) {
      page++;
    }
    //badge
else if (page==4 && mouseX>=5 && mouseX<=355 && mouseY>=275 && mouseY<=390) {
        page++;
      }
}
