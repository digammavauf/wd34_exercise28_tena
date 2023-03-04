import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Hero from './components/Hero';
import AnimeList from './components/AnimeList';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero></Hero>
    <AnimeList></AnimeList>
    {/* <App name="John Philip Tena" age="16" />
    <App name="Daniel Abelana" age="15" />
    <App name="Emmanuel Galaroza" age="15" />
    <App name="Vincent Serrano" age="14" />
    <App name="Jay Castro" age="14" /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
