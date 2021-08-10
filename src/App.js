import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact 
        name = 'Aubree Hamilton'
        url = 'https://randomuser.me/api/portraits/women/34.jpg'
        online
      />
      <Contact 
        name = 'Lucille Horton'
        url = 'https://randomuser.me/api/portraits/women/65.jpg'
      />
      <Contact 
        name = 'Aubrey Ross'
        url = 'https://randomuser.me/api/portraits/women/87.jpg'
        online
      />
    </div>
  );
}

export default App;
