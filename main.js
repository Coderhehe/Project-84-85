canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1width=120;
car1heght=70;
car1i="car1.jpg";
car1x=10;
car1y=10;
car2width=120;
car2heght=70;
car2i="car2.jpg";
car2x=150;
car2y=10;
bagi="racingbg.jpg";

function add() {
    backgrounditag=new Image();
    backgrounditag.onload=uploadBackground;
    backgrounditag.src=bagi;

    car1itag=new Image();
    car1itag.onload=uploadCar1;
    car1itag.src=car1i;

    car2itag=new Image();
    car2itag.onload=uploadCar2;
    car2itag.src=car2i;
}
function uploadBackground()
{
    ctx.drawImage(backgrounditag,0,0,canvas.wdth,canvas.height);
}

function uploadCar1() {
    ctx.drawImage(car1itag,car1x,car1y,car1width,car1heght);
}

function uploadCar2() {
    ctx.drawImage(car2itag,car2x,car2y,car2width,car2heght);
}

window.addEventListener("keydown",mykeydown)

function mykeydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed=="38") {
        car1up();
        console.log("You Pressed Up");
    }
    if (keyPressed=="37") {
        car1left();
        console.log("You Pressed Left");
    }
    if (keyPressed=="39") {
        car1right();
        console.log("You Pressed Right");
    }
    if (keyPressed=="40") {
        car1down();
        console.log("You Pressed Down");
    }
    if (keyPressed=="87") {
        car2up();
        console.log("You Pressed W");
    }
    if (keyPressed=="83") {
        car2down();
        console.log("You Pressed S");
    }
    if (keyPressed=="65") {
        car2left();
        console.log("You Pressed A");
    }
    if (keyPressed=="68") {
        car2right();
        console.log("You Pressed D");
    }
}

function car1up() {
    if (car1y>=0) {
        car1y= car1y-10;
        console.log("Car1 X="+car1x+"Car1 Y="+car1y+"Car2 X="+car2x+"Car2 Y"+car2y);
        uploadBackground;
        uploadCar1;
        uploadCar2;
    }
}
function car1down() {
    if (car1y<=500) {
        car1y= car1y+10;
        console.log("Car1 X="+car1x+"Car1 Y="+car1y+"Car2 X="+car2x+"Car2 Y"+car2y);
        uploadBackground;
        uploadCar1;
        uploadCar2;
    }
}
function car1left() {
    if (car1x>=0) {
        car1x= car1x-10;
        console.log("Car1 X="+car1x+"Car1 Y="+car1y+"Car2 X="+car2x+"Car2 Y"+car2y);
        uploadBackground;
        uploadCar1;
        uploadCar2;
    }
}
function car1right() {
    if (car1x<=500) {
        car1x= car1x+10;
        console.log("Car1 X="+car1x+"Car1 Y="+car1y+"Car2 X="+car2x+"Car2 Y"+car2y);
        uploadBackground;
        uploadCar1;
        uploadCar2;
    }
}
function car2up() {
    if (car2y>=0) {
        car2y= car2y-10;
        console.log("Car1 X="+car1x+"Car1 Y="+car1y+"Car2 X="+car2x+"Car2 Y"+car2y);
        uploadBackground;
        uploadCar1;
        uploadCar2;
    }
}
function car2down() {
    if (car2y<=500) {
        car2y= car2y+10;
        console.log("Car1 X="+car1x+"Car1 Y="+car1y+"Car2 X="+car2x+"Car2 Y"+car2y);
        uploadBackground;
        uploadCar1;
        uploadCar2;
    }
}
function car2left() {
    if (car2x>=0) {
        car2x= car2x-10;
        console.log("Car1 X="+car1x+"Car1 Y="+car1y+"Car2 X="+car2x+"Car2 Y"+car2y);
        uploadBackground;
        uploadCar1;
        uploadCar2;
    }
}
function car2right() {
    if (car2x>=0) {
        car2x= car2x+10;
        console.log("Car1 X="+car1x+"Car1 Y="+car1y+"Car2 X="+car2x+"Car2 Y"+car2y);
        uploadBackground;
        uploadCar1;
        uploadCar2;
    }
}
