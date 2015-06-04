/*    *       *        * * * *
      * *   * *      *
  **************************
      *       *     ***** 
      *       *        * * * *  
 The following script is inspired from the maximum rectangle problem.
*/

// screenWidth and screenHeight being the height and width on the container or document respectively
//(can be generated dynamically rather than defining explicitly)
var screenWidth = 1360;
var screenHeight =900;

// unitHeight and unitWidth being the dimensions of the grid element(square or rectangle)
var unitHeight =10,
	unitWidth =10;

var X_grids_count = screenWidth/unitWidth,
	Y_grids_count = screenHeight/unitHeight;

//define a 2D array to keep track of filled areas, initialized as unoccupied i.e. ==0
var gridArray = [];
for(i=0;i<X_grids_count;i++){
	gridArray[i] = [];
	for(j=0;j<Y_grids_count;j++){
		gridArray[i][j]=0;
	}
}

// min_x and min_y are the two parameters used as lower bound , you can use container padding alternatively and set these as zero
var min_x =5,
	min_y =5;

do{
	var x_pos =  Math.round(Math.random()*(X_grids_count - min_x) + min_x);
	var y_pos =  Math.round(Math.random()*(Y_grids_count - min_y) + min_y);
}while(gridArray[x_pos][y_pos] == 1 );

var actualXPos = x_pos*unitWidth,
	actualYPos = y_pos*unitHeight;
console.log("final x pos : "+actualXPos);
console.log("final y pos : "+actualYPos);



