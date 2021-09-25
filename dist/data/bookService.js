'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.getAllBooks = void 0
const client_1 = __importDefault(require('../prisma/client'))
const getAllBooks = async () => {
  return client_1.default.book.findMany()
}
exports.getAllBooks = getAllBooks
//# sourceMappingURL=bookService.js.map
