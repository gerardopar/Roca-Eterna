// importing stylesheet
import '../styles/index.scss';
// importing smo0th nav script
import './smooth-nav-min';
// importing functions
import { sidebar } from './sidebar';
import { slideShow } from './slideshow';


slideShow();
sidebar();

console.log('app is running!');