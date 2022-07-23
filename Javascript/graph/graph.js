class graph {
  constructor() {
    this.graph = {};
  }
  addNode(node) {
    this.graph[node] = [];
  }
  addEdge(source, destination) {
    if (!this.graph[source] && !this.graph[destination]) return false;
    this.graph[source].push(destination);
    // this.graph[destination].push(source); //
  }
  bfs(source, destination) {
    //breadth first search
    if (!this.graph[source] || !this.graph[destination]) return false;
    let queue = [source];
    let visited = {};
    while (queue.length) {
      const current = queue.shift(); //shift removes first element of array , pop removes last element
      if (current === destination) return true;
      if (visited[current]) continue;
      let neighbour_node = this.graph[current];
      visited[current] = true;
      for (let i = 0; i < neighbour_node.length; i++) {
        queue.push(neighbour_node[i]);
      }
    }
  }
  dfs(source, destination, visited = {}) {
    if (!this.graph[source] || !this.graph[destination]) return false;
    if (source === destination) return true;
    if (visited[source]) return true;
    visited[source] = true;
    const neighbour_node = this.graph[source];
    for (let i = 0; i < neighbour_node.length; i++) {
      if (this.dfs(neighbour_node[i], destination, visited)) {
        return true;
      }
    }
    return false;
  }

  showAllNode() {
    console.log(this.graph);
    for (let node in this.graph) {
      console.log(node);
    }
  }
}
const graphObj = new graph();
graphObj.addNode(5);
graphObj.addNode(6);
graphObj.addNode(7);
graphObj.addNode(8);

graphObj.addEdge(5, 7);
graphObj.addEdge(5, 6);
graphObj.addEdge(7, 8);
console.log("bfs", graphObj.bfs(5, 8));
console.log("bfs", graphObj.bfs(5, 9));
console.log("dfs", graphObj.dfs(5, 8));
console.log("dfs", graphObj.dfs(5, 9));

graphObj.showAllNode();
