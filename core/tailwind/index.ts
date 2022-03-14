// lib/tailwind.js
import { create } from 'twrnc';
import * as tailwind_config from './tailwind.config';

// create the customized version...
const tw = create(tailwind_config); // <- your path may differ

// ... and then this becomes the main function your app uses
export default tw;
