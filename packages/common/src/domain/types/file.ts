export type FileData<T = Buffer | string> = {
  name: string
  size: number
  type: string
  extension: string
  content: T
}

export type FileUploaded = Omit<FileData, "content"> & { path: string }
