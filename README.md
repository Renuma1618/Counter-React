**📊 React Render Counter**
This is a simple React project that demonstrates how component rendering works using the useState and useRef hooks.

**🔍 About the Project**
This app is built to help beginners understand:

How state (useState) updates in React
How to persist values across renders using useRef
How to track the number of times a component renders

**🛠️ Tech Stack**
React (Functional Components)
JavaScript (ES6+)
CSS

🚀 How It Works
 1. Track and Update State with useState
count is a state variable used to keep track of a number that increases or decreases when you click the Increment (+) or Decrement (-) buttons.
setcount() updates this number and causes the component to re-render.

✅ 2. Count Renders with useRef
total is a ref that stores the number of times the component has rendered.
Since useRef does not cause re-renders when updated, it’s perfect for tracking values like render count.

✅ 3. Update Render Count on Every Re-render
useEffect() runs after every render.
It increases total.current by 1, so the line Rendering times - {total.current} always shows the updated render count.


**simple step-by-step explanation **
STEP 1: Create a new React project using a tool like Vite or Create React App.
STEP 2: Create a file with a .jsx extension to write your component.
STEP 3: Write a functional component using React.
STEP 4: Inside the component, create buttons for incrementing and decrementing a number.
STEP 5: Use the useState hook to store and update the count value when buttons are clicked.
STEP 6: Use the useRef hook to store the number of times the component renders without causing a re-render.
STEP 7: Use the useEffect hook to increase the render count (useRef) every time the component re-renders.
STEP 8: Display the current count and the number of renderings inside the return JSX.
STEP 9: Use the onClick event to run logic when buttons are clicked.
STEP 10: Run the project using the appropriate command npm run dev .
