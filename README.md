# Hogwarts: The React app for fans of prize-winning pigs

## React Week 1 Project

## Project goals:

* create an index displaying all hog tiles
  * render each hog name and picture in a tile, and show the hog's details upon a user's click
* allow users to sort the hogs based on name and weight, and filter the hogs that are greased

Optional:

* BONUS: allow users to hide hogs (not delete them, just hide them from view!)
* BONUS: bring in pig gifs from an API
* BONUS: implement [Semantic Cards](https://semantic-ui.com/views/card.html) for each hog

## Project requirements:

* functional and container components (at least one of each, likely you'll have several of each)
* components using state and props
* re-renders based on client-side events

## What we have so far:

* a file containing all our hog data imported into App.js
* a folder of hog images
* a functional nav component rendered in our App.js

React thinking:
1)Come in with static components and mock drawing
2)start thinking about data:

App.js -->
primary stateful component, greasedBool and sortType
sorts by greased (filter)
sorts by sortType (name, weight: sort())
name: return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
weight: return b[weight] - a[weight]
render nav, filter and List

 PigList.js -->
pass sorted pigs as props
map over pigs, render PigCard

PigCard.js -->
state tracking whether it's been clicked
each pig card gets its own image (regex, .split.join)
conditional render with maxPigTile or minPigTile based on clicked state

PigFilter.js -->
setSortType and sortGreased as props
ui checkbox toggle, ui form inline field f
