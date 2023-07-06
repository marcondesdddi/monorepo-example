import { FileData, FileUploaded } from "@/domain/types"

export interface UploadFile {
  upload: (input: UploadFile.Params) => Promise<UploadFile.Result>
}

export namespace UploadFile {
  export type Params = {
    file: FileData
    pathFile?: string
    type?: "default" | "chunks" | "local"
  }
  export type Result = FileUploaded
}

export interface GenerateNameFile {
  generateName: (input: GenerateNameFile.Input) => GenerateNameFile.Output
}

export namespace GenerateNameFile {
  export type Input = {
    extension: string
    prefix?: string
  }
  export type Output = string
}

export interface RemoveFile {
  remove: (input: RemoveFile.Input) => Promise<RemoveFile.Output>
}

export namespace RemoveFile {
  export type Input = DataFile
  export type Output = boolean
  export type DataFile = {
    pathFile: string
  }
}

export interface GetFile<T = any, R = Buffer | Uint8Array | undefined> {
  getFile: (input: T) => Promise<R>
}
