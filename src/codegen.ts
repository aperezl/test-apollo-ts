import { codegen } from '@graphql-codegen/core'
import * as schemaAstPlugin from '@graphql-codegen/schema-ast'
import { Types } from '@graphql-codegen/plugin-helpers'
import * as fs from 'fs'
import { parse, printSchema } from 'graphql'
import path from 'path'
import schema from './graphql/schema/schema'
import { PrismaClient } from '.prisma/client'

async function performCodegen(options: Types.GenerateOptions): Promise<void> {
  const output = await codegen(options)
  fs.writeFile(
    path.join('./src/graphql/generated/', options.filename),

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

export async function performAstCodege(): Promise<void> {
  const options: Types.GenerateOptions = {
    config: {
      numericEnums: true,
      contextType: { prisma: PrismaClient },
      useIndexSignature: true,
    },
    documents: [],
    filename: 'schema.graphql',
    schema: parse(printSchema(schema)),
    plugins: [{ 'schema-ast': {} }],
    pluginMap: {
      'schema-ast': schemaAstPlugin,
    },
  }

  performCodegen(options)
}
