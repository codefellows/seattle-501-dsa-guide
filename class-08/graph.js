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
    // Vinicio - this normally would be private or hidden somehow
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  // Vinicio - we are going to start with directed edges
  // Vinicio - in my graphs, the edges can have weights
  addEdge(startVertex, endVertex, weight = 0)  {
    if(!this.adjacencyList.has(startVertex) ||
    !this.adjacencyList.has(endVertex)) {
      throw new Error('Invalid Vertices');
    }

    this.adjacencyList.get(startVertex).push({vertex: endVertex, weight});
  }

  addUndirectedEdge(startVertex, endVertex, weight) {
    // TODO: Finish this function
  }

  getNeighbors(vertex) {
    if(!this.adjacencyList.has(vertex)) {
      throw new Error('Invalid vertex');
    }

    // Vinicio - neighbor is any vertex that can be reached with path-length of one
    // return this.adjacencyList.get(vertex);
    // Vincio - making a copy in eve
    return [...this.adjacencyList.get(vertex)];
  }
};


