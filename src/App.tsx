import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import SavedCandidatesContext from './components/SavedCandidatesContext'; // import context



function App() {
  return (
    <>
      <Nav />
      <main>
        {/* Wrap the Outlet with context provider so that the savedCandidates array 
            which is saved in CandidateSearch can be passed to SavedCandidates */}
        <SavedCandidatesContext.Provider value={{ savedCandidates: [], setSavedCandidates: () => {} }}>
          <Outlet />         
        </SavedCandidatesContext.Provider>    
      </main>
    </>
  );
}

export default App;
