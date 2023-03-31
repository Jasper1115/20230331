let points = [[14, 5], [13, 3], [12, 0],[13,-2],[10,-1],[4,-2],[3,-4],[1,-3],[-4,-3],[-6,-2],[-6,-7],[-8,-5],[-9,-2],[-13,-1],[-11,0],[-14,1],[-12,2],[-9,3],[-4,3],[-2,7],[0,3],[3,2],[9,1],[14,5]]

                function setup() {
                  createCanvas(windowWidth,windowHeight)
                  

                  for (let i = 0; i < points.length; i++) {
                    for (let j = 0; j < points[i].length; j++) 
                      points[i][j] = points[i][j] * 30;
                  }
                  background(255)
                  ctx = canvas.getContext('2d');
                  ctx.lineWidth =5;
                  ctx.lineCap = 'round'
                  }

                function draw() {
                  background(255);
                  translate(width/2, height/2); 
                  textSize(30)  
                  fill(0, 102, 153);  
                  text("教科系",-30,50)  
                  scale(1, -1); 
									
                  for (let i = 0; i < 5; i++) {
                    push();
                    scale(1+0.2*i);
                    noFill();
                    beginShape();
                    for (let j = 0; j < points.length; j++) {
                      vertex(points[j][0], points[j][1]);
                    }
                    endShape(CLOSE);
                    pop();
                  }
                
                  gradientLine(ctx,-330,0,360,0, 'rgb(53,42,165)', 'rgb(0,255,91)')
                }

                function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
                  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
                  gradient.addColorStop(0, c1);
                  gradient.addColorStop(1, c2);
                  ctx.strokeStyle = gradient;
                  
                  ctx.beginPath();
                  ctx.moveTo(x1, y1);
                  ctx.lineTo(x2, y2);
                  ctx.stroke();
                }