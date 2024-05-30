import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [studyTarget, setStudyTarget] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(1500); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (timeRemaining === 0) {
      // Add logic to handle end of Pomodoro session
      clearInterval(interval);
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeRemaining(1500);
    setIsRunning(false);
  };

  const handleChange = (e) => {
    setStudyTarget(e.target.value);
  };

  return (
    <div>
      <h2>Pomodoro Timer</h2>
      <p>Study Target: {studyTarget}</p>
      <input type="text" value={studyTarget} onChange={handleChange} />
      <p>Time Remaining: {Math.floor(timeRemaining / 60)}:{(timeRemaining % 60).toString().padStart(2, '0')}</p>
      {isRunning ? <button onClick={pauseTimer}>Pause</button> : <button onClick={startTimer}>Start</button>}
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;