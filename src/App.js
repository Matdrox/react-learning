// import React from 'react';  // Class Based
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

// FUNCTION BASED
const App = () => {
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

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder} : task)));
  };

  const name = 'Matei';
  const x = true;
  return (
    <div className='container'>
      <h1>Hello</h1>
      <h2>
        Hello {name}, {x ? 'Yes' : 'No'}!
      </h2>
      <Header title='This is a prop' />
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
