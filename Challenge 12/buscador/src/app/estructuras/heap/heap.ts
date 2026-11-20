// data-structures/heap.ts
export class Heap<T> {
  private heap: T[];


  constructor(private compare: (a: T, b: T) => number, initial: T[] = []) {
    this.heap = [...initial];
    this.heapify();
  }

  push(value: T): void {
    this.heap.push(value);
    this.percolateUp();
  }

  pop(): T | undefined {
    if (this.heap.length === 0) return undefined;

    const n = this.heap.length;
    this.swap(0, n - 1);

    const top = this.heap.pop();
    this.percolateDown(0);

    return top;
  }

  peek(): T | undefined {
    return this.heap[0];
  }

  heapify(): void {
    const start = Math.floor((this.heap.length - 2) / 2);
    for (let i = start; i >= 0; i--) {
      this.percolateDown(i);
    }
  }

  private percolateDown(index: number): void {
    let curr = index;

    while (2 * curr + 1 < this.heap.length) {
      const left = 2 * curr + 1;
      const right = 2 * curr + 2;

      const best =
        right < this.heap.length && this.compare(this.heap[right], this.heap[left]) < 0
          ? right
          : left;

      if (this.compare(this.heap[best], this.heap[curr]) < 0) {
        this.swap(curr, best);
        curr = best;
      } else {
        break;
      }
    }
  }

  private percolateUp(): void {
    let curr = this.heap.length - 1;

    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2);

      if (this.compare(this.heap[curr], this.heap[parent]) < 0) {
        this.swap(curr, parent);
        curr = parent;
      } else {
        break;
      }
    }
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size(): number {
    return this.heap.length;
  }

  toArray(): T[] {
    return [...this.heap];
  }
}