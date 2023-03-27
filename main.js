
var canvas = new fabric.Canvas('myCanvas');

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h1.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(50);
        player_object.scaleToHeight(40);
        player_object.set({
            top: hole_y,
            left: hole_x
        });
        canvas.add(player_object);

    });
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
        ball_object = Img;

        ball_object.scaleToWidth(50);
        ball_object.scaleToHeight(40);
        ball_object.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y=hole_y))
	{canvas.remove(ball_object);

	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function left() {

		if (ball_x > 0) {
			ball_x = ball_x - block_image_width;
			console.log(block_image_width);
			console.log("left arrow key is presse");
			canvas.remove(player_object);
			player_update();
	
	
		}
	}
	
	function right() {
	
		if (ball_x <= 850) {
			ball_x = ball_x + block_image_width;
			console.log(block_image_width);
			console.log("right arrow key is presse");
			canvas.remove(player_object);
			player_update();
	
	
		}
	}
	
	function up() {
	
		if (ball_y > 0) {
			ball_y = ball_y - block_image_height;
			console.log(block_image_height);
			console.log("up arrow key is presse");
			canvas.remove(player_object);
			player_update();
	
	
		}
	}
	
	function down() {
	
		if (ball_y <= 500) {
			ball_y = ball_y + block_image_height;
			console.log(block_image_height);
			console.log("up arrow key is presse");
			canvas.remove(player_object);
			player_update();
	
	
		}
	}