'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k]
          },
        })
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.performAstCodege = void 0
const core_1 = require('@graphql-codegen/core')
const schemaAstPlugin = __importStar(require('@graphql-codegen/schema-ast'))
const fs = __importStar(require('fs'))
const graphql_1 = require('graphql')
const path_1 = __importDefault(require('path'))
const schema_1 = __importDefault(require('./graphql/schema/schema'))
const client_1 = require('.prisma/client')
async function performCodegen(options) {
  const output = await (0, core_1.codegen)(options)
  fs.writeFile(
    path_1.default.join('./src/graphql/generated/', options.filename),
    output,
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`${options.filename} generated`)
      }
    },
  )
}
async function performAstCodege() {
  const options = {
    config: {
      numericEnums: true,
      contextType: { prisma: client_1.PrismaClient },
      useIndexSignature: true,
    },
    documents: [],
    filename: 'schema.graphql',
    schema: (0, graphql_1.parse)((0, graphql_1.printSchema)(schema_1.default)),
    plugins: [{ 'schema-ast': {} }],
    pluginMap: {
      'schema-ast': schemaAstPlugin,
    },
  }
  performCodegen(options)
}
exports.performAstCodege = performAstCodege
//# sourceMappingURL=codegen.js.map
