"use strict";

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((vertex) => {
      return v2 !== vertex;
    });
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((vertex) => {
      return v1 !== vertex;
    });
    return this;
  }

  //   Loop throught vertex and pop()
  //   Go in poped element and remove original vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const element = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, element);
    }

    delete this.adjacencyList[vertex];
    return this;
  }
}

const g = new Graph();
g.addVertex("India");
g.addVertex("France");
g.addVertex("USA");
g.addVertex("Japan");
g.addVertex("Korea");
g.addEdge("France", "USA");
g.addEdge("India", "France");
g.addEdge("USA", "Korea");
g.addEdge("Japan", "France");
g.addEdge("USA", "Japan");
g.addEdge("India", "USA");
console.log(g);
