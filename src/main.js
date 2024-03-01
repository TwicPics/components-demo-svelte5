import './app.scss';
import App from './App.svelte';
import { mount } from 'svelte';

import { installTwicPics } from '@twicpics/components/svelte5';
import '@twicpics/components/style.css';

installTwicPics({
  // replace by your own domain value
  domain: `https://demo.twic.pics`
});

const app = mount( App, {
  "target": document.body,
} );

export default app;
