import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';
import 'tachyons' ;
import { athletes } from './athletes';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
                <div>
                  <Card id={athletes[0].id} name={athletes[0].name} bio={athletes[0].bio} image={athletes[0].image} />
                  <Card id={athletes[1].id} name={athletes[1].name} bio={athletes[1].bio} image={athletes[1].image} />
                  <Card id={athletes[2].id} name={athletes[2].name} bio={athletes[2].bio} image={athletes[2].image} />
                  <Card id={athletes[3].id} name={athletes[3].name} bio={athletes[3].bio} image={athletes[3].image} />
                  <Card id={athletes[4].id} name={athletes[4].name} bio={athletes[4].bio} image={athletes[4].image} />
                  <Card id={athletes[5].id} name={athletes[5].name} bio={athletes[5].bio} image={athletes[5].image} />
                </div>
,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
