# Candidate Search

The Candidate Search application is a React-based web application developed with Typescript. It allows employers to search and evaluate candidates by retrieving data from the GitHub API. The application enables users to save potential candidates to a list that is saved in local storage on their machine. They can view their information from a formatted table.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Useage](#useage)
- [Deployed Application](#deployed-application) 
- [Technologies Used](#technology-used)
- [Contributing](#contributing)
- [Questions](#questions)


## Features
- **Retrieve Candidate Information:** Upon loading the applicatication, thirty candidates are retrieved and displayed one at a time on  the page. Displays the cadidate's name, username, location, avatar, email, GitHub profile URL, company information and bio.
- **Save Candidates:** Save potential candidates to a persistent list for fututre reference.
- **Skip Candidates:** Skip a candidate without saving their information.
- **Local Storage:** Ensures the  list of saved candidates persists across sessions.
- **Reject Candidates:** Remove saved candidates from the saved potential candidate list.
- **Responsive Design:** Optimized for various screen sizes and devices

- 
![SearchComplete](https://github.com/user-attachments/assets/4434c3a6-52dd-4e7e-9f18-397238f35cfc)  ![NoMoreCandidates](https://github.com/user-attachments/assets/ea7d2039-baf1-4f05-b888-8aa891edd35b)

![NoSaved](https://github.com/user-attachments/assets/c96be268-9364-46dd-ba31-48c53e372775)  ![Table](https://github.com/user-attachments/assets/ea9f3e98-ca9a-479b-b9d7-14e66827a8ca)


## Installation
If you'd like to clone the repository and run the project locally:

1. Clone the repository to your local machine:
   ```bash
   git clone git@github.com:TanyaH-create/candidate-search.git
2. Navigate to the project directory 
   ```bash
   cd candidate-search

3. Install required dependencies:
   ```bash
   npm install

4. The application retrieves data from the GitHub API. Ensure you have created a fine-grained personal access token with default permissions to increase the API rate limit. This token should be stored in the .env file as VITE_GITHUB_TOKEN in the ./environment directory off the root directory.
   ~~~bash
   VITE_GITHUB_TOKEN=your_personal_access_token

5. Run the development server
   ~~~bash
   npm run dev
   ~~~
6. Open your browser and go to http://localhost:5173 to view the project.

 

## Deployed Application
Check out my live portfolio application [here](https://candidate-search-challenge-tlh.onrender.com)

## GitHub Repository
The source code for this project can be found in my [GitHub Repository](https://github.com/TanyaH-create/candidate-search) .

## Technologies Used
- Frontend: React, Typescript
- Storeage: Local Storage
- Styling: CSS
- API: GitHub REST API
- Deployment: Render
  
## License
This project is licensed under the MIT License.


## Questions

 If you have any questions, feel free to contact me at dougtanyah@gmail.com.

 You can also find me on GitHub at [TanyaH-create](https://github.com/TanyaH-create).
