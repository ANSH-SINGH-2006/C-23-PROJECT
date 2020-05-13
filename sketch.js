p1,p2,p3,p4,p5,p6,p7,p8,p9,p10;

function setup() {
  createCanvas(800,400);
  p1=createSprite(100,300,199,400);  
  p2=createSprite(100,200,50,50);
  p2.shapeColor="black";
  p3=createSprite(100,200,50,1);
  p3.shapeColor="white";
  p4=createSprite(100,200,1,50)
  p4.shapeColor="white";
  p5=createSprite(700,300,199,400)
  p6=createSprite(700,200,50,50);
  p6.shapeColor="black";
  p7=createSprite(700,200,1,50)
  p7.shapeColor="white";
  p8=createSprite(700,200,50,1)
  p8.shapeColor="white";
  p9=createSprite(400,300,250,200);
  p10=createSprite(400,80,1,50)
  p10.shapeColor="black";
  
  p12=createSprite(400,350,1,100)
  p12.shapeColor="white";
  p13=createSprite(427,70,50,30);
  p13.shapeColor="green";
  
  p11=createSprite(400,350,400,100)
  p11.shapeColor=169,169,169;
  
  p14=createSprite(250,275,50,50)
  p14.shapeColor="grey"
  p14.shapeColor=169,169,169;

  p15=createSprite(320,275,50,50)
  p15.shapeColor=169,169,169;

  p16=createSprite(400,275,50,50)
  p16.shapeColor= 169,169,169;

  p17=createSprite(470,275,50,50)
  p17.shapeColor=169,169,169;

  p18=createSprite(550,275,50,50)
  p18.shapeColor=169,169,169;

  p19=createSprite(400,223,50,40)
  
  p19.shapeColor="black"
  p20=createSprite(400,223,1,40)
  p20.shapeColor="white";

  p21=createSprite(400,223,50,1)
  p21.shapeColor="white";

  p22=createSprite(400,370,80,80);
  
  p22.shapeColor=101,67,33
}

function draw() {
  background("blue");
  fill("brown");
  triangle(100,0,0,100,200,100);
  triangle(700,0,800,100,600,100);
  triangle(400,100,275,200,525,200);
  

       
  
  drawSprites();
}