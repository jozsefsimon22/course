import { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&amp;A" },
  ]);

  function addNewGoalHandler(newGoal) {
    // setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
