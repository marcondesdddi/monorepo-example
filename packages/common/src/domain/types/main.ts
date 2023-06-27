import { Readable } from "stream"

export interface FileMobile {
  name?: string
  type?: string
  base64?: string
  extension?: string
  buffer?: Buffer
  filename?: string
  originalname?: string
  encoding?: string
  mimetype?: string
  size?: number
  stream?: Readable
  destination?: string
  path?: string
}

export type FileMapped = {
  name: string
  type: string
  content: string | Buffer
  size: string
  extension: string
}

export type BodyFileSingle = {
  file: FileMapped
}

export type BodyFileMultiple = {
  files: FileMapped[]
}
