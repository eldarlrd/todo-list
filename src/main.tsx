import { render } from 'preact';
import install from '@twind/with-react';
import config from '../twind.config.mts';
import { App } from '@/app.tsx';

install(config, import.meta.env.PROD);
const appDiv = document.getElementById('app');
if (appDiv) render(<App />, appDiv);
