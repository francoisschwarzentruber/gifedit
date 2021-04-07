# gifedit

This tool enables to create GIF animations from simple Javascript code. See https://francoisschwarzentruber.github.io/gifedit/

# Help

For initialisation:

     init({width: 120, height: 90});
     
Then just draw, using the 2D context object is `ctx` and using the HTML5 Canvas API.
For clearing the image, call `clear();`

To a frame to the animation, call `addFrame({delay: 1000});`

That is it!
