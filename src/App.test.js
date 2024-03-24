import MainAppContainer from './App';
import { createRoot } from 'react-dom/client';

test('renders without crashing', () => {
  const div = document.createElement('div');
  let root = createRoot(div);
  root.render(<MainAppContainer />);
  root.unmount();
});
