import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';

const Symbol = (props) => {

  return (
    <>
    {
      (props.player === 1) ? <FontAwesomeIcon icon={faTimes} className={`${props.size} text-success`} /> : null
    }
    {
      (props.player === 2) ? <FontAwesomeIcon icon={faCircle} className={`text-danger ${props.size}`} /> : null
    }
    </>
  );
};

export default Symbol;