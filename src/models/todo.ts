/**
 * @typedef {Object} Todo
 * @property {number} id (required)
 * @property {string} content (required)
 * @property {boolean} isCompleted (required)
 * @property {Category} category (required)
 * @property {Tag[]} tags (optional)
 */

/**
 * @type {Todo}
 */

interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
  category: Category;
  tags?: Tag[];
}
