import { createContext } from 'react';

const alertContext = createContext();

export default alertContext;

// DIFFERENT COMPONENTS WILL CALL THE CONTEXT >>
// STATE >> REDUCER >> GIVE THE DATA TO THE COMPONENTS
