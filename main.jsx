import React from 'react'
import { createRoot } from 'react-dom/client';
import Paul from './Paul'

// Render React component
const root = createRoot(document.getElementById('app'));
root.render(<Paul greeting="hello world"/>);

