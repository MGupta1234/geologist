class stone{
	constructor(x,y,height,width)
	{
		var options = {
			'density':10,
			'friction': 0.9,
			'restitution':0.8
		  };
		this.x=x;
		this.y=y;
		this.height=50;
        this.width=50;
		this.body=Bodies.rectangle(this.x,this.y,this.height,this,width,options);
		World.add(world, this.body);

	}
	display()
	{
			var stoneweight=this.body.position;		
			push()
			translate(stoneweight.x, stoneweight.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("gray");
			rect(this.x,this.y,this.height,this.width);

			pop()
	}

}