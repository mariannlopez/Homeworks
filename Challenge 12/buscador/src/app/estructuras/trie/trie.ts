// data-structures/trie.ts
import { Producto } from '../../modelo/producto/producto';
import { Heap } from '../heap/heap';

export class TrieNode {
  value: string | null;
  isEndOfWord = false;
  children: Record<string, TrieNode> = {};
  product?: Producto; 

  constructor(value: string | null) {
    this.value = value;
  }
}

export class Trie {
  root = new TrieNode(null);

  insert(name: string, popularity: number): void {
    let current = this.root;

    for (const character of name.toLowerCase()) {
      if (current.children[character] === undefined) {
        current.children[character] = new TrieNode(character);
      }
      current = current.children[character];
    }

    current.isEndOfWord = true;
    current.product = { name, popularity };
  }

  search(word: string): boolean {
    const node = this.findNode(word);
    return node !== undefined && node.isEndOfWord;
  }

  searchTopK(prefix: string, k: number): Producto[] {
    const node = this.findNode(prefix);
    if (node === undefined) return [];

    const products: Producto[] = [];
    this.collect(node, products);

    const heap = new Heap<Producto>((a, b) => b.popularity - a.popularity, products);

    const result: Producto[] = [];
    while (result.length < k && heap.size() > 0) {
      result.push(heap.pop()!);
    }
    return result;
  }

  private findNode(prefix: string): TrieNode | undefined {
    let current = this.root;

    for (const character of prefix.toLowerCase()) {
      if (current.children[character] === undefined) return undefined;
      current = current.children[character];
    }
    return current;
  }

  private collect(node: TrieNode, acc: Producto[]): void {
    if (node.isEndOfWord && node.product) acc.push(node.product);

    for (const child of Object.values(node.children)) {
      this.collect(child, acc);
    }
  }
}