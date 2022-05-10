import ReactDOM from 'react-dom/client';
import { CalendarApp } from './CalendarApp';

import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CalendarApp />
);
