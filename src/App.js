// import React from 'react';  // Class Based
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

// FUNCTION BASED
const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Lecture with Teo Brolin',
      day: '22-05-27',
      reminder: true,
    },
    {
      id: 2,
      text: "Doctor's Appointment",
      day: '22-05-28',
      reminder: true,
    },
    {
      id: 3,
      text: 'Exam',
      day: '22-05-30',
      reminder: false,
    },
  ]);

  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    alert(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const name = 'Matei';
  const x = true;
  return (
    <div className='container'>
      <h1>Hello</h1>
      <h2>
        Hello {name}, {x ? 'Yes' : 'No'}!
      </h2>
      <Header
        title='This is a prop'
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
};

// CLASS BASED
// class App extends React.Component {
//   render() {
//     return <h1>Hello from class</h1>
//   }
// }

export default App;
