import './app.scss';
import App from './App.svelte';

import { installTwicPics } from '@twicpics/components/svelte3';
import '@twicpics/components/style.css';

installTwicPics({
  // replace by your own domain value
  domain: `https://demo.twic.pics`
});

const app = new App({
  target: document.getElementById('app')
});

export default app;
