const Vertex = require('./vertex');
const Graph = require('./graph');
const BFS = require('./bfs');


const five = new Vertex(5);

const seven = new Vertex(7);
const eight = new Vertex(8);
const nine = new Vertex(9);

const fifteen = new Vertex(15);

const graph = new Graph();

graph.addVertex(five);
graph.addVertex(seven);
graph.addVertex(eight);

graph.addVertex(nine);
graph.addVertex(fifteen);

graph.addEdge(five, nine);
graph.addEdge(five, seven);
graph.addEdge(five, eight);

graph.addEdge(eight, fifteen);

console.log(BFS(graph, five, fifteen));


