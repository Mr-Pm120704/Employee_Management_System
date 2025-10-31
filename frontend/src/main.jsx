import App from './App';
import { UserProvider } from './UserContext'; 
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render( <UserProvider>
    <App />
  </UserProvider>);
