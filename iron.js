class iron{
	constructor(x,y,height,width)
	{
		var options = {
			'density':30,
			'friction': 3,
			'restitution':0.8
		  };
		this.x=x;
		this.y=y;
		this.height=100;
        this.width=50;
        
		this.body=Bodies.rectangle(this.x, this.y, this.height,this.width, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironWeight=this.body.position;		
			push()
			translate(ironWeight.x, ironWeight.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			rect(0,0,this.height,this.width);

			pop()
	}

}