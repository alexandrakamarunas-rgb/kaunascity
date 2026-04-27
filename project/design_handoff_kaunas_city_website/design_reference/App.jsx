const App = () => {
  const [view, setView] = useState('home');
  return (
    <div data-screen-label={view.toUpperCase()}>
      <Header view={view} setView={setView}/>
      {view === 'home'     && <Home setView={setView}/>}
      {view === 'academy'  && <Academy/>}
      {view === 'team'     && <Team/>}
      {view === 'coach'    && <Coach/>}
      {view === 'register' && <Register/>}
      <Footer/>
    </div>
  );
};

window.App = App;
