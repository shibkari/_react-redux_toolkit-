import { useEffect } from 'react';
import './App.css';
import ThemeToggle from './components/Counter'; // renamed from Counter.tsx
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import { useAppSelector } from './redux/hooks';

function App() {
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Інтернет-магазин</h1>
        <ThemeToggle />
      </header>
      
      <main className="app-main">
        <AddUserForm />
        <UserList />
      </main>
    </div>
  );
}

export default App;
