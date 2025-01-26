import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import SavedCandidatesContext from './components/SavedCandidatesContext'; // import context
import { Candidate } from './interfaces/Candidate.interface'; // import the Candidate interface
import { useState, useEffect } from 'react';

function App() {
 
 //move this to APP so that both SavedCadidates and CandidateSearch have access
 //to the saved data
 //save potential candidates
 const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
 
 //Local Storage 
   // Load saved candidates from local storage on mount
   useEffect(() => {
     const savedCandidateData = localStorage.getItem('savedCandidates');
     if (savedCandidateData) {
       setSavedCandidates(JSON.parse(savedCandidateData));
     }
   }, []);
 
   // Save `savedCandidates` to local storage whenever it updates
   useEffect(() => {
     localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
   }, [savedCandidates]);



  return (
    <>
      <Nav />
      <main>
        {/* Wrap the Outlet with context provider so that the savedCandidates array 
            which is saved in CandidateSearch can be passed to SavedCandidates */}
        <SavedCandidatesContext.Provider value={{ savedCandidates, setSavedCandidates }}>
          <Outlet />         
        </SavedCandidatesContext.Provider>    
      </main>
    </>
  );
}

export default App;
