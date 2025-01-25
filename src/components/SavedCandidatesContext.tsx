/* SavedCandidateContext.tsx */
import { createContext } from 'react';
import { Candidate } from '../interfaces/Candidate.interface'


//need a way to pass the savedCandidates array to SavedCandidates()
//create a context
// Define the context type
interface SavedCandidatesContextType {
  savedCandidates: Candidate[];
  setSavedCandidates: React.Dispatch<React.SetStateAction<Candidate[]>>;
}


// Create the context with the type, initializing savedCandidates as an empty array
const SavedCandidatesContext = createContext<SavedCandidatesContextType>({
  savedCandidates: [], // initial value as an empty array
  setSavedCandidates: () => {} // an empty function to satisfy the type, should be updated by the provider
});

export default SavedCandidatesContext;
    