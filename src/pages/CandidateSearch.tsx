import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
//import interface
import {Candidate} from './interfaces/Candidate.interface';

const CandidateSearch = () => {
   //1. Conduct search for a list of candidates
   //2. Display one candidate at a gtime (current candidate)
   //3. Can add candidate (+) to potential candidates or go onto
   //   next candidate in original search (-)

   //Capture candidates from search in an array
   const [candidates, setCandidates] = useState<Candidate[]>([]);
   //Display current candidate, update after (+) (-) 
   //if no candidates (or no more in array) set to empty. 
   const [currentCandidate, setCurrentCandidate] = useState<Candidate | ''>('');
   //save potential candidates
   const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

   
  //create useEffect hook to fetch data from gitHub using
  //
  useEffect (() => {
    const fetchCandidates = async () => {
      const data = await searchGithub ();
      //update candidates state with results
      setCandidates(data);
      //load first candidate as currentCandidate
      if (data.length > 0) {
        setCurrentCandidate(data[0]);
      }
    };
    //call function
    fetchCandidates();
    //only run once on render
  }, []);

// Add to saved candidates array:
  const saveCandidate = () {
    if (currentCandidate) {
       setSavedCandidates([...savedCandidates, currentCandidate]) 
       //make next candidate the current candidate
       nextCandidate();  
    }
  };

  //create new array without the current candidate. Load that array as candidates
  //i.e. remove the current candidate from candidate array
  //then set the next candidate as current candidate
  const nextCandidate = () {
    const nextCandidates = candidates.slice(1);
    setCandidates(nextCandidates)
    setCurrentCandidate(nextCandidates[0] || '');
  };


  return (
  <main>
    <h1>CandidateSearch</h1>;
     {/*If there is a current candidate, display a "card" with info */}
    {currentCandidate ? (
        <div>
         <img src ={currentCandidate.avatar_url} alt="candidate's avatar"/>
         <h2>{`${currentCandidate.name} (${currentCandidate.username})`}</h2>
         <p>Location: {currentCandidate.location}</p>
         <br/>
         <p>Email: {currentCandidate.email}</p>
         <br/>
         <p>Company: {currentCandidate.company}</p>
         <br/>
         <p>Bio: {currentCandidate.bio}</p>
         <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
          <div>
            <button onClick={saveCandidate}>+</button>
            <button onClick={nextCandidate}>-</button>
          </div>
        </div>
    
     ) : (
         // no more candidates left to view
         <p>No more candidates available to view</p>
     )};
     

  </main>
  );

export default CandidateSearch;
