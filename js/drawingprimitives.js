
function clear()
{
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, info.width, info.height);
  ctx.fillStyle = "black";
}


function drawImage(imgurl, x, y, w, h)
{
  var img = new Image();
  //img.onload = function() {console.log("image " + imgurl + " loaded."); ctx.drawImage(img,x,y)};
  img.src = imgurl;
  var timeOut = 100; //ms - waiting for max 500ms to load
  var start = new Date().getTime();
  while(1)
    if(img.complete || new Date().getTime()-start>timeOut)
    {
      if(!img.complete)
          console.log("image " + imgurl + " not loaded. You could check whether the image exists or increase the timeOut.");
      if(w == undefined)
          ctx.drawImage(img,x,y);
        else
      ctx.drawImage(img,x,y, w, h);
      //console.log("image " + imgurl + " not loaded. You could increase the timeOut");
      break;
    }


}


function wrapText(text, x, y, maxWidth, lineHeight) {
        if(maxWidth == undefined)
             maxWidth = 10000;

        if(lineHeight == undefined)
        {
              let i = ctx.font.indexOf("px");
               lineHeight = parseInt(ctx.font.substr(0, i))+2;
        }

        var cars = text.split("\n");

        for (var ii = 0; ii < cars.length; ii++) {

            var line = "";
            var words = cars[ii].split(" ");

            for (var n = 0; n < words.length; n++) {
                var testLine = line + words[n] + " ";
                var metrics = ctx.measureText(testLine);
                var testWidth = metrics.width;

                if (testWidth > maxWidth) {
                    ctx.fillText(line, x, y);
                    line = words[n] + " ";
                    y += lineHeight;
                }
                else {
                    line = testLine;
                }
            }

            ctx.fillText(line, x, y);
            y += lineHeight;
        }
     }



function line(x1, y1, x2, y2)
{
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}



function strokeArrow(x1, y1, x2, y2) {
  let drawArrowhead=function(ctx,x,y,radians){
            let xSize = 10;
            let ySize = 20;
            ctx.save();
            ctx.beginPath();
            ctx.translate(x,y);
            ctx.rotate(radians);
            ctx.moveTo(0,0);
            ctx.lineTo(xSize,ySize);
            ctx.closePath();
            ctx.stroke();
            ctx.moveTo(0,0);
            ctx.lineTo(-xSize,ySize);
            ctx.closePath();
            ctx.stroke();

            ctx.restore();

        }


            // draw the ending arrowhead
        var endRadians=Math.atan((y2-y1)/(x2-x1));
        endRadians+=((x2>x1)?-90:90)*Math.PI/180;
        drawArrowhead(ctx,x2,y2,endRadians);




}

function fillCircle(x, y, r)
{
  ctx.beginPath();
  ctx.arc(x,y,r,0, 2*Math.PI);
  ctx.fill();
}


function drawRectangle(x1, y1, w, h, drawStyle) {
	if(drawStyle != undefined)
		ctx.strokeStyle = drawStyle;
	ctx.strokeRect(x1, y1, w, h);
}


function fillRectangle(x1, y1, w, h, fillStyle) {
	if(fillStyle != undefined)
		ctx.fillStyle = fillStyle;
	ctx.fillRect(x1, y1, w, h);
}



function drawFillRectangle(x1, y1, w, h, drawStyle, fillStyle) {
	drawRectangle(x1, y1, w, h, drawStyle);
	fillRectangle(x1, y1, w, h, fillStyle);
}
