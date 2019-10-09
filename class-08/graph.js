'use strict';

// VInicio - this is a very viable alternative too
// class Edge {
//   constructor(vertex, weight) {
//     this.vertex = vertex;
//     this.weight = weight;
//   }
// }

module.exports = class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  // Vinicio - we are going to start with directed edges
  // Vinicio - in my graphs, the edges can have weights
  addEdge(startVertex, endVertex, weight) {
    if(!this.adjacencyList.has(startVertex) ||
    !this.adjacencyList(endVertex)) {
      throw new Error('Invalid Vertices');
    }

    this.adjacencyList.get(startVertex).push({vertex: endVertex, weight});
  }

  addUndirectedEdge(startVertex, endVertex, weight) {
    // TODO: Finish this function
  }
};