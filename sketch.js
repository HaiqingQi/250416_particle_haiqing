let particles=[];
let numParticles;

function setup() {
  createCanvas(windowWidth, );
  numParticles=200;
  
for(i=0;i<numParticles;i++)
{
  particles.push(new particle(width/2,height/2));
  
}
}

function draw() {
  background('black');
  for(i=0;i<numParticles;i++){
    particles[i].display(random(2,6));
    particles[i].update(random(1,3));
    particles[i].keepInCanvas();
  }
}