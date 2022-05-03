import React from 'react';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import TaskForm from '../components/TaskForm';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Calendar />
      <TaskForm />
    </div>
  );
};

export { HomePage };
