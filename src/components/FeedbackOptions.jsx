import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        {options.map((item, index) => {
          return (
            <Button
              onClick={() => {
                onLeaveFeedback(item);
              }}
              key={index}
              variant="contained"
            >
              {options[index]}
            </Button>
          );
        })}
      </Stack>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
