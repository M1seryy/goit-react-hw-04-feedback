import { Component } from 'react';
import Statistic from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const options = ['good', 'neutral', 'bad'];
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = stat => {
    this.setState(prev => {
      return {
        [stat]: prev[stat] + 1,
      };
    });
  };
  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;

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
        <Section title="Statisctic"/>
        <Section>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.state.good + this.state.neutral + this.state.bad !== 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
            />
          ) : (
            <Notification title={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
