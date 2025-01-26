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
    <main>
      
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
                <td className='td-image'><img src={candidate.avatar_url} alt={candidate.name} width={50} style={{ borderRadius: '50%' }} /></td>
                <td data-label="Name">{candidate.name}
                  <br />{`(${candidate.username})`}
                </td>
                <td data-label='location'>{candidate.location}</td>
                <td data-label='email'>{candidate.email}</td>
                <td data-label='company'>{candidate.company}</td>
                <td data-label='bio'>{candidate.bio}</td>
                <td className='td-image'><a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                          <img src="./src/assets/images/github-mark-white.png" alt="GitHib Logo" className="logo-project" />
                  </a></td>
                <td className='td-image'><button className = 'reject'onClick={() => rejectCandidate(candidate.id)}>-</button></td>
              </tr>
             ))
             }
          </tbody>
        </table>
      ) : (
        <p>There are no potential candidates saved.</p>
      )}
    </main>
  );
};

export default SavedCandidates;
