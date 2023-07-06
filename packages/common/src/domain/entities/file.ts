import { FileData } from "@/domain/types"

export class File {
  name: string
  size: number
  type: string
  extension: string
  content: Buffer | string

  constructor(params: FileData) {
    this.name = params.name
    this.size = params.size
    this.type = params.type
    this.extension = params.extension
    this.content = params.content
  }
}
