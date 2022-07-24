import PropTypes from 'prop-types';
import './Error.css';

export default function ErrorComponent({ message }) {
  return (
    <div role="alert" className="wrapper">
      <p text={message} className="text">
        {message}
      </p>
    </div>
  );
}

ErrorComponent.propTypes = {
  textError: PropTypes.string.isRequired,
};