import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)

// const container = document.getElementById("root");
// const root = createRoot(container);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );


//npm

//node package manager

//easily install , manage, update packages (also called as dependencies) in ur js or node js projects
//run scripts (starting a server, run tests)
// publish packages 


//packge.json
//manifest of ur project. comtains metadata about the project like name, version, description, deps etc

//package-lock.json

//is genrated by npm to lock down the exact versions of deps used in the project
//it ensures that ur peoject uses the same versions of ur libraries and their dependencies
//every time u or someoneelse install the packages, it ensures consistency,
//across diff environments

//guarantees that the project will use the exact same version
//faster installs
//manages nested dependecies as well

//ver very imp to commit package-lock.json file

