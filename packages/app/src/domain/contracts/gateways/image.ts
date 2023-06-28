import { FileData } from "@/domain/types"

export interface ImageResize {
  resize: (
    files: ImageResize.FileParam,
    options: ImageResize.Options
  ) => Promise<ImageResize.Result>
}

export namespace ImageResize {
  export type FileParam = {
    name: string
    size: number
    type: string
    extension: string
    content: Buffer | string
  }
  export type Result = FileData

  export type Options = {
    width: number
    height: number
    ration: string
  }
}

export interface ImageRotate {
  rotate: (input: ImageRotate.Input) => Promise<ImageRotate.Output>
}

export namespace ImageRotate {
  export type Input = {
    file: Buffer | Uint8Array | string
    angle: number
  }
  export type Output = Buffer | string
}
