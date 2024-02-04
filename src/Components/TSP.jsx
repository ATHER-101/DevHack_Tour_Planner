class TSP {
    constructor(graph) {
        this.graph = graph;
        this.visited = new Set();
        this.path = [];
        this.totalDistance = 0;
    }

    nearestNeighbor() {
        const startNode = 0; // Start from the first node
        this.visited.add(startNode);
        this.path.push(startNode);

        while (this.visited.size < this.graph.length) {
            let currentNode = this.path[this.path.length - 1];
            let minDistance = Infinity;
            let nearestNode = null;

            for (let neighbor = 0; neighbor < this.graph.length; neighbor++) {
                if (!this.visited.has(neighbor) && this.graph[currentNode][neighbor] < minDistance) {
                    minDistance = this.graph[currentNode][neighbor];
                    nearestNode = neighbor;
                }
            }

            this.visited.add(nearestNode);
            this.path.push(nearestNode);
            this.totalDistance += minDistance;
        }

        // Return to the starting node to complete the cycle
        this.path.push(startNode);
        this.totalDistance += this.graph[this.path[this.path.length - 2]][startNode];

        return this.path;
    }

    getTour() {
        return this.path;
    }

    getTourDistance() {
        return this.totalDistance;
    }
}

// Example usage:
const adjacencyMatrix = [
    [0, 20, 4, 10],
    [20, 0, 18, 12],
    [4, 18, 0, 6],
    [10, 12, 6, 0]
];

const tsp = new TSP(adjacencyMatrix);
const tour = tsp.nearestNeighbor();
const distance = tsp.getTourDistance();

console.log("TSP Tour:", tour);
console.log("Total Distance:", distance);

export default [tour,distance];