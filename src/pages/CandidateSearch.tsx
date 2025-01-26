//CandidateSearch.tsx

import { useState, useEffect, useContext } from 'react';
//import { searchGithub, searchGithubUser } from '../api/API';
import { searchGithub, searchGithubUser } from '../api/API';
//import interface
import { Candidate } from '../interfaces/Candidate.interface';
import SavedCandidatesContext from '../components/SavedCandidatesContext';

const CandidateSearch = () => {
  //1. Conduct search for a list of candidates
  //2. Display one candidate at a gtime (current candidate)
  //3. Can add candidate (+) to potential candidates or go onto
  //   next candidate in original search (-)

  //Capture candidates from search in an array
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  //Display current candidate, update after (+) (-) 
  //if no candidates (or no more in array) set to empty. 
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
 
   // Access savedCandidates and its setter from the context
   const { savedCandidates, setSavedCandidates } = useContext(SavedCandidatesContext);
 
  

  //create useEffect hook to fetch data from gitHub using
  //
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        //Fetch the basic data list of candidates
        const data = await searchGithub();
        console.log('This is the raw data')
        console.log(data)
        //need extract the login to do a search for each user to get their detailed
        //information. Promise.all runs multiple promises concurrently on the array and
        //waits foreach one to resolve before moving to the next. 
        const detailedCandidates: Candidate[] = await Promise.all(
          data.map(async (candidate: any, index:number) => {
            try {
              const userDetails = await searchGithubUser(candidate.login);
              console.log(`user details for index ${index}:`, userDetails)
              return {
                id: userDetails.id,
                name: userDetails.name || 'no name listed',  // Some users may not have a 'name'
                username: userDetails.login,
                location: userDetails.location || 'no location listed',  // Handle possible null/undefined
                avatar_url: userDetails.avatar_url,
                email: userDetails.email || 'no email listed',
                html_url: userDetails.html_url,
                company: userDetails.company || 'no company listed',  // Handle possible null/undefined
                bio: userDetails.bio || 'no bio listed',  // Handle possible null/undefined
              }
            } catch (error) {
              console.error(`Error fetcjing details for candidate at index ${index}`)
            }
 
          }) 
        );


  //set candidates with the detailed information
  setCandidates(detailedCandidates);
  //set the first candidate in the array as the current candidate
  if (detailedCandidates.length > 0) {
    setCurrentCandidate(detailedCandidates[0]);
  }
 } catch (error) {
   console.error('Error fetching candidates', error);
 }
};


fetchCandidates();
    //only run once on render
  }, []);


// Add to saved candidates array:
const saveCandidate = () => {
  if (currentCandidate) {
    setSavedCandidates([...savedCandidates, currentCandidate])
    //make next candidate the current candidate
    nextCandidate();
  }
};

//create new array without the current candidate. Load that array as candidates
//i.e. remove the current candidate from candidate array
//then set the next candidate as current candidate
const nextCandidate = () => {
  const nextCandidates = candidates.slice(1);
  setCandidates(nextCandidates)
  setCurrentCandidate(nextCandidates[0] || null);
};


return (
  
  <main className='candidate-search'>
    <h1>CandidateSearch</h1>
    {/*If there is a current candidate, display a "card" with info */}
    {currentCandidate ? (
      <div className='candidate-card'>
        <img src={currentCandidate.avatar_url} alt="candidate's avatar" className='avatar'/>
        <h2>{`${currentCandidate.name} (${currentCandidate.username})`}</h2>
        <p>Location: {currentCandidate.location}</p>
        <br />
        <p>Email: {currentCandidate.email}</p>
        <br />
        <p>Company: {currentCandidate.company}</p>
        <br />
        <p>Bio: {currentCandidate.bio}</p>
        <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">
        <img src="./src/assets/images/github-mark-white.png" alt="GitHib Logo" className="logo-project" /></a>
        <div className='buttons'>
          <button className='button plus' onClick={saveCandidate}>+</button>
          <button className='button minus' onClick={nextCandidate}>-</button>
        </div>
      </div>

    ) : (
      // no more candidates left to view
      <p>No more candidates available to view</p>
    )}
  </main>
);
};

export default CandidateSearch;

