//SavedCandidates.tsx
import { useContext } from 'react'
import { Candidate } from '../interfaces/Candidate.interface';
import SavedCandidatesContext from '../components/SavedCandidatesContext'; // import context
//savedCandidates will be passed as a prop
const SavedCandidates = () => {
  // Hook in data for savedCandidates
  const { savedCandidates, setSavedCandidates } = useContext(SavedCandidatesContext);

  // Function to handle rejection of a candidate
  const rejectCandidate = (candidateId: number) => {
    const updatedCandidates = savedCandidates.filter(candidate => candidate.id !== candidateId);
    setSavedCandidates(updatedCandidates);
  };

  // create a table that displays the candidates when the page is rendered
  return (
    <>
      
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>gitHub Link</th>
              <th>Reject</th>
           </tr>
          </thead>
          <tbody>
            {/*map over the saved candidates array and add each as a row */}
             {savedCandidates.map((candidate: Candidate) => (
              <tr key={candidate.id}>
                <td><img src={candidate.avatar_url} alt={candidate.name} width={50} style={{ borderRadius: '50%' }} /></td>
                <td>{candidate.name}
                  <br />{`(${candidate.username})`}
                </td>
                <td>{candidate.location}</td>
                <td>{candidate.email || 'N/A'}</td>
                <td>{candidate.company || 'N/A'}</td>
                <td><a href={candidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Link</a></td>
                <td><button onClick={() => rejectCandidate(candidate.id)}>Reject</button></td>
              </tr>
             ))
             }
          </tbody>
        </table>
      ) : (
        <p>There are no potential candidates saved.</p>
      )}
    </>
  );
};

export default SavedCandidates;
