import React, { useState } from 'react';
import Statistic from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;

  const onLeaveFeedback = stat => {
    switch (stat) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Statisctic" />
      <Section>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        {good + neutral + bad !== 0 ? (
          <Statistic good={good} neutral={neutral} bad={bad} total={total} />
        ) : (
          <Notification title={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
}

export default App;
