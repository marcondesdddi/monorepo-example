import { BodyFileMultiple, BodyFileSingle, FileMapped } from "@monorepo/common/src/domain/types"
import { FastifyRequest, RouteShorthandOptions } from "fastify"
import { MultipartFile } from "@fastify/multipart"

const makeHandleFileData = async (file: MultipartFile): Promise<FileMapped> => {
  let fileExtension = file?.mimetype.split("/")[1] ?? ""
  const fileName = file.filename
  const fileType = file.mimetype

  const fileContent = await file.toBuffer()

  if (!fileExtension && file.filename) {
    fileExtension = `${file.filename.split(".").pop()}`
  }

  return {
    name: fileName ?? "",
    type: fileType ?? "",
    content: fileContent ?? "",
    size: "",
    extension: fileExtension
  }
}

const handleRequestUploadData = async (
  req: FastifyRequest
): Promise<BodyFileSingle | BodyFileMultiple | null> => {
  const file = (req.body as any)?.file
  const files = (req.body as any)?.files

  if (file) return { file: await makeHandleFileData(file) }
  else if (files) {
    return {
      files: files.map((file: MultipartFile) => makeHandleFileData(file))
    }
  }
  return null
}

export const fileHandle: RouteShorthandOptions = {
  preHandler: async (request: FastifyRequest) => {
    const data = await handleRequestUploadData(request)
    request.body = Object.assign(request?.body ?? {}, data)
  }
}
