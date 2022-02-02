const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Runiverse, Rearth;

var airBalloon,
  heart,
  caught = false;

var gameState = 0;

var myFrameCount = 0;

var philosophyClicked = 0;

var touchStar1 = false,
  touchStar2 = false,
  touchStar3 = false,
  touchStar4 = false;

var bckSound;

function preload() {
  bckImage = loadImage("images/Bck.png");
  studentImage = loadImage("images/student.jpg");

  airBalloonAnimation = loadAnimation(
    "images/balloons/B1.png",
    "images/balloons/B2.png",
    "images/balloons/B3.png"
  );
  airBackgrnd = loadImage("images/balloons/AirBck.png");
  heartImage = loadImage("images/balloons/life.png");
  starNightImage = loadImage("images/fairy/starnight.png");
  fairyAnimation = loadAnimation(
    "images/fairy/fairy1.png",
    "images/fairy/fairy2.png"
  );
  starImage = loadImage("images/fairy/star.png");

  bckSound = loadSound("sounds/bck.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  bckSound.play();

  Runiverse = Engine.create();
  Rearth = Runiverse.world;

  airBalloon = createSprite(100, 500);
  airBalloon.addAnimation("airBalloon", airBalloonAnimation);
  airBalloon.visible = false;

  heart = createSprite(width - 100, height / 2 + 100);
  heart.addImage("heart", heartImage);
  heart.scale = 0.5;
  heart.visible = false;

  fairy = createSprite(200, height - 350);
  fairy.addAnimation("fairy", fairyAnimation);
  fairy.scale = 0.5;
  fairy.visible = false;
  fairy.setCollider("circle", 0, 0, 200);

  star1 = createSprite(100, 100);
  star1.addImage("star", starImage);
  star1.scale = 0.4;
  star1.visible = false;

  star2 = createSprite(width - 100, 100);
  star2.addImage("star", starImage);
  star2.scale = 0.4;
  star2.visible = false;

  star3 = createSprite(width - 200, height - 200);
  star3.addImage("star", starImage);
  star3.scale = 0.4;
  star3.visible = false;

  star4 = createSprite(width / 2, height - 200);
  star4.addImage("star", starImage);
  star4.scale = 0.4;
  star4.visible = false;

  swal(
    {
      title: `Hi, I am Deepthi!${"\n"}I am an Educator.${"\n"}`,
      text: "Please click OK to checkout my portfolio",
      imageUrl: "images/student.jpg",
      imageSize: "300x300",
      confirmButtonText: "OK",
    },
    function (isConfirm) {
      if (isConfirm) {
        gameState = 1;
      }
    }
  );
}

function draw() {
  Engine.update(Runiverse);

  if (gameState === 1) {
    whySupporTeachingAndLearning();
  }

  if (gameState === 2 && frameCount > 800) {
    myPhilosophy();
  }

  if (gameState === 3) {
    myReflection();
  }

  if (gameState === 4) {
    thankYou();
  }

  drawSprites();
}

function whySupporTeachingAndLearning() {
  background(airBackgrnd);
  image(airBackgrnd, width / 2 - 250, height / 2 - 250, 500, 500);

  if (!airBalloon.isTouching(heart) && caught === false) {
    fill("red");
    textSize(30);
    text("Catch the heart", width / 2 - 100, 100);
  }

  airBalloon.visible = true;
  heart.visible = true;

  if (keyIsDown(RIGHT_ARROW)) {
    airBalloon.velocityX = 5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    airBalloon.velocityX = 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    airBalloon.velocityY = 5;
  }

  if (keyIsDown(UP_ARROW)) {
    airBalloon.velocityY = -5;
  }

  if (airBalloon.isTouching(heart)) {
    caught = true;
  }
  if (gameState === 1 && caught == true) {
    airBalloon.destroy();
    heart.destroy();
    textSize(35);
    fill("black");
    text("The best memory I have is my school memory.", 450, 100);
    text(
      " I would still recollect my teachers and always grateful not because they taught us but because they educated us. ",
      100,
      200
    );

    text(
      "All I can say is that teachers are very impactful and inspiring to students.",
      300,
      300
    );
    fill("blue");
    textSize(50);
    text(
      "So, I aspire to inspire and be a role model for the students.",
      250,
      height / 2 + 100
    );
    gameState = 2;
  }
}

function myPhilosophy() {
  background(starNightImage);

  if (gameState === 2) {
    textSize(50);
    fill("red");
    text("MY REFLECTION", width / 2 - 200, 100);
    textSize(40);
    text("Let the fairy touch the stars!!", width / 2 - 250, 150);
    if (keyIsDown(RIGHT_ARROW)) {
      fairy.x += 10;
    }

    if (keyIsDown(LEFT_ARROW)) {
      fairy.x -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
      fairy.y += 10;
    }

    if (keyIsDown(UP_ARROW)) {
      fairy.y -= 10;
    }

    fairy.visible = true;
    star1.visible = true;
    star2.visible = true;
    star3.visible = true;
    star4.visible = true;

    textSize(30);
    fill("white");
    text("C", 100, 200);

    text("H", width - 100, 200);

    text("E", width - 200, height - 100);

    text("F", width / 2, height - 100);
  }

  if (fairy.isTouching(star1)) {
    fairy.x += 10;
    touchStar1 = true;
    swal({
      title: `Concepts`,
      text: "Focus on the concepts. Go extra mile to make it easy for them to understand. They can implement anything if their basics are strong.",
      imageUrl:
        "https://hatrabbits.com/wp-content/uploads/2018/10/conceptual-thinking.jpg",
      imageSize: "300x300",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  if (fairy.isTouching(star2)) {
    fairy.x += 10;
    touchStar2 = true;
    swal({
      title: `Humble`,
      text: "Be Humble and understanding. They will love you.",
      imageUrl:
        "https://www.westfield.ma.edu/PersonalPages/draker/edcom/final/sp20/sectiona/wombat/teacher.jpg",
      imageSize: "700x300",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  if (fairy.isTouching(star3)) {
    fairy.x += 10;
    touchStar3 = true;
    swal({
      title: `Efforts`,
      text: "Be it a teacher or a student. No pain, no gain.",
      imageUrl:
        "https://i.pinimg.com/474x/ca/a9/5b/caa95bcc99bfe1c47f354e1fbf22416e.jpg",
      imageSize: "300x300",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  if (fairy.isTouching(star4)) {
    fairy.x -= 10;
    touchStar4 = true;
    swal({
      title: `Feedback`,
      text: "Give feedback for students to improve. Understand from student what you need to improve and how can you help them.",
      imageUrl:
        "https://www.pinclipart.com/picdir/middle/350-3500493_feedback-clipart-feedback-survey-review-png-transparent-png.png",
      imageSize: "300x300",
      showConfirmButton: false,
    });
  }

  if (
    touchStar1 === true &&
    touchStar2 === true &&
    touchStar3 === true &&
    touchStar4 === true
  ) {
    gameState = 3;
  }
}

function myReflection() {
  textSize(50);
  fill("red");
  text("MY REFLECTION", width / 2 - 200, 100);

  swal(
    {
      title: `Joy of Learning`,
      title:
        " I have learned to enjoy sharing my knowledge. Its only when you try to start teaching children, you would gain the subject knowledge in detail.",
      imageUrl:
        "https://vg5b2ejdwb-flywheel.netdna-ssl.com/wp-content/uploads/2020/09/reflection-in-me-animation-02.jpg",
      imageSize: "300x300",
      confirmButtonText: "FINE",
    },
    function (isConfirm) {
      if (isConfirm) {
        gameState = 4;
      }
    }
  );
}

function thankYou() {
  swal({
    title: `Thanks for watching`,
    imageUrl:
      "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/86395/s960_thank_you_sticky_note.jpg",
    imageSize: "300x300",
    showConfirmButton: false,
  });
}
