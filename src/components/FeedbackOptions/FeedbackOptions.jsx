import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({onClick}) => (
  <section className={css.feedbackControls}>
    <ul className={css.feedbackControls__container}>      
        <li key="good" className={css.feedbackControls__li}>
          <button
            type="button"
            name="good"
            onClick={onClick}
            className={css.feedbackControls__button}
          >
            Good
          </button>
        </li>
        <li key="neutral" className={css.feedbackControls__li}>
          <button
            type="button"
            name="neutral"
            onClick={onClick}
            className={css.feedbackControls__button}
          >
            Neutral
          </button>
        </li>
        <li key="bad" className={css.feedbackControls__li}>
          <button
            type="button"
            name="bad"
            onClick={onClick}
            className={css.feedbackControls__button}
          >
            Bad
          </button>
        </li>
      
    </ul>
  </section>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};


// const FeedbackOptions = ({ options, onClick }) => (
//   <section className={css.feedbackControls}>
//     <ul className={css.feedbackControls__container}>
//       {options.map(option => (
//         <li key={option} className={css.feedbackControls__li}>
//           <button
//             type="button"
//             name={option}
//             onClick={onClick}
//             className={css.feedbackControls__button}
//           >
//             {option}
//           </button>
//         </li>
//       ))}
//     </ul>
//   </section>
// );

// export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };