import './vendor';
import $ from 'jquery';
import {Index} from './index.js';

console.log($);

let index = new Index();
index.loadUsers();

$( '#sortButton' ).click(function() {
  index.sortUsersByLevel();
});

$( '#filterButton' ).click(function() {
    index.filterUsersByName();
  });

