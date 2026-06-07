/*Problem: Increment All Neighbors

Given a 2D array (matrix) of numbers and a target cell (row, col), increment all **immediate neighbors** (up, down, left, right) of that cell by 1.

The input matrix should be updated in-place.
*/

function incrementNeighbors(matrix, row, col) {
  // Your code here
  let neighbors = []
  neighbors.push(
    {"row": row,"col": (col-1)},
    {"row": row,"col": (col+1)},
    {"row": (row-1),"col": (col)},
    {"row": (row+1),"col": col},
    )

  for(let i =0; i < neighbors.length; i++){
    let r = neighbors[i].row
    let c = neighbors[i].col
    if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length){
      matrix[r][c] += 1
    }
  }

  return(matrix)

}