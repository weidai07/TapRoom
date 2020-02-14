import React from 'react';
import ReactDOM from 'react-dom';

var heading = React.createElement('h1', {}, 'Help Queue');
var beerLocation = React.createElement('h3', {}, '3a');
var beerNames = React.createElement('h3', {}, 'Thato and Haley');
var beerIssue = React.createElement('h3', {}, 'Firebase won\'t save record');
var app = React.createElement('div', {}, heading, beerLocation, beerNames, beerIssue);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);