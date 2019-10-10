'use strict';

module.exports = (graph, startVertex, goalVertex) => {
  // -----------------------------------------------------------------
  // Setup some helper variables
  // -----------------------------------------------------------------
  // VInicio - we need to change a queue into a priority queue
  const frontier = [];
  // Vinicio - we can optimize this by using a class
  const seenVertices = new Set();
  const paths = new Map();
  // -----------------------------------------------------------------
  // enqueue the start in the queue
  // -----------------------------------------------------------------
  frontier.unshift(startVertex);
  seenVertices.add(startVertex);
  // -----------------------------------------------------------------
  // loop over the queue UNTIL the queue is empty
  // -----------------------------------------------------------------
  while(frontier.length > 0) {
    // dequeue a value from the queue
    const currentVertex = frontier.pop();
    // check if the new value is the goal?

    // if the new value is the goal -> return our path
    if (currentVertex === goalVertex) {
      return paths;
      return cleanPath(paths);
    }
    // if not, "smartly" add all the neighbors into the queue
    const neighbors = graph.getNeighbors(currentVertex);

    for(let neighbor of neighbors) {

      if(seenVertices.has(neighbor.vertex)) {
        continue;
      }
      else {
        seenVertices.add(neighbor.vertex);
      }

      // Vinicio - from current node, I got to the neighbor.vertex
      paths.set(neighbor.vertex, currentVertex);
      frontier.unshift(neighbor.vertex);
    }
  }
  // -----------------------------------------------------------------
  // if the queue is empty and we didn't find a path
  // there is no patfrontier -----------------------------------------------------------------
  return null;
  // -----------------------------------------------------------------
};


const cleanPath = (paths) => {

};