import { createContext } from 'react';

const githubContext = createContext();

export default githubContext;

// DIFFERENT COMPONENTS WILL CALL THE CONTEXT >>
// STATE >> REDUCER >> GIVE THE DATA TO THE COMPONENTS
