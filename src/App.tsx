import { ThemeProvider } from '@/contexts/ThemeContext';
import Showcase from './Showcase';

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Showcase />
    </ThemeProvider>
  );
}

export default App;

