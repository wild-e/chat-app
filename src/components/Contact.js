import './contact.css';
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <div className="Contact">
        <img
            className='avatar'
            src={props.url}
            alt={props.name}
        />    
        <div>
            <h4 className="name">{props.name}</h4>
            {props.online ? 
              <div className="status">
                  <span className="status-online"></span>
                  <p className="status-text"> is online</p>
              </div>
            :
              <div className="status">
                  <span className="status-offline"></span>
                  <p className="status-text"> is offline</p>
              </div>
            }
        </div>
    </div>
  );
}

Contact.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;