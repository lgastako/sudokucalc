# sudokucalc

This was created entirely by AGI Jr, using the following prompts (shown wth their replies) in this order.  With the exception
of the first request, each exchange is captured in single commit in the repo.

- Hi.  Please create a simple index.html file that references React from a CDN and for now just draws an empty sudoku board.
  - I have created the `index.html` file. It includes a simple Sudoku board rendered using React. The board is currently empty.
- When I open index.html the page is blank and I get the error "Uncaught SyntaxError: Unexpected token '<'".  Please fix this.
  - I have updated the `index.html` file. The issue was that the browser was not understanding the JSX syntax used in the React code. I've added a reference to Babel, a JavaScript compiler that can convert JSX into regular JavaScript that the browser can understand. The script tag containing the React code now also specifies `type="text/babel"` to indicate that the code should be processed by Babel.
- Great, that fixed it.  Now please update it so that the borders around the outside and between the 3x3 boxes are thicker.
  - I have updated the `index.html` file. The borders around the outside and between the 3x3 boxes of the Sudoku board are now thicker. I achieved this by adding some CSS rules to style the cells and rows.
- Hmmm. Your code looks good to me but the page is blank again.  This time I don't get any erroors in the console.
  - I have updated the `index.html` file. The issue was with the CSS rules. In CSS, we don't use quotes around the values of properties. I've removed the quotes and the page should now display correctly.
- Great, that fixed it.  Now please add a button labeled "Add a Cage" below the board.  Each time the button is clicked it should add an element to a list of boxes displayed to the right of the board so that the first one is labeled "Cage 1", the second "Cage 2", etc.  Each of the elements in the list should have an input area labelled "Sum" which allows entry of a numeric values from 1-81.
  - I have updated the `index.html` file. Now, there is a "Add a Cage" button below the Sudoku board. Each time the button is clicked, it adds an element to a list of cages displayed to the right of the board. Each cage is labeled "Cage 1", "Cage 2", etc. Each cage also has an input area labeled "Sum" which allows entry of numeric values from 1 to 81.
- Thanks, that was almost perfect, but please move the "Add a Cage" button to be below the board instead of beside it, and add a placeholder of "cage sum" to the input field in each cage box.
  - I have updated the `index.html` file. Now, the "Add a Cage" button is located below the Sudoku board. Each cage box also has an input field with a placeholder of "cage sum".
- Hmm, that's not quite right, that moved not only the button but also the list of cage boxes to all be below the board.  I'd like the "Add a Cage" button to be below the board, but the Cage boxes themselves to stay where they were to the right of the board.
  - I have updated the `index.html` file. Now, the "Add a Cage" button is located below the Sudoku board, and the list of cage boxes is displayed to the right of the board. Each cage box also has an input field with a placeholder of "cage sum".
- That looks great.  Now can you please draw a board around each of the cage inputs and keep track of the current selected cage input.  Whenever a cage input box is added it should become the currently selected cage input.   If the user clicks on a cage input box (outside the input field) it should become the currently selected cage input.  There should only be one currently selected cage input at a time. The currently selected cage input should have a light green background (and the non-selected cage inputs should stay white).
*CRASH*

New session:
- Please update index.html to draw a border around each of the cage input boxes.  And then keep track of the current selected cage input box.  Whenever a cage input box is added it should become the currently selected cage input box.   If the user clicks on a cage input box (outside of it's input field) it should become the currently selected cage input.  There should only be one currently selected cage input at a time. The currently selected cage input should have a light green background (and the non-selected cage inputs should stay white).
  - I have updated the `index.html` file as per your request. Now, each cage input box has a border around it. Whenever a new cage input box is added, it becomes the currently selected cage input box. If a user clicks on a cage input box (outside of its input field), it becomes the currently selected cage input. Only one cage input can be selected at a time. The currently selected cage input has a light green background, while the non-selected cage inputs have a white background.


