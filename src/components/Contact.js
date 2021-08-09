import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
        <img
            className='avatar'
            src={url}
            alt={name}
        />    
        <div>
            <h4 className="name">{name}</h4>
            <div className="status">
                <span className="status-online"></span>
                <p className="status-text">{online ? 'is online' : 'is offline'}</p>
            </div>
        </div>
    </div>
  );
}

let name = 'Aubree Hamilton';
let url = 'https://randomuser.me/api/portraits/women/34.jpg';
let online = true;

export default Contact;