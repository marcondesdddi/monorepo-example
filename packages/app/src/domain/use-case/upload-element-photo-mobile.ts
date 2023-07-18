import { ImageResize, UploadFile } from "@monorepo/common/src/domain/contracts/gateways"
import { ElementPhotoMobileData, File } from "@monorepo/common/src/domain/entities"

type Setup = (
  imageService: ImageResize,
  imageResizeOptions: ImageResize.Options,
  fileStorage: UploadFile
) => UploadElementPhotoMobileUseCase
type Input = ElementPhotoMobileData
type Output = void

export type UploadElementPhotoMobileUseCase = (input: Input) => Promise<Output>

export const setupUploadElementPhotoMobileUseCase: Setup =
  (imageService, imageResizeOptions, fileStorage) => async (input) => {
    if (!input.file.base64) throw new Error("Foto inválida")

    let pathFile = `inspection/${input.inspection_id}/environments`
    pathFile += `/environment-${input.environment_id}`
    pathFile += `/element-${input.element_id}`

    const extensions = ["png", "jpeg", "jpg"]
    const photoName = extensions.includes(input.file.extension)
      ? `${input.photo_key}.${input.file.extension === "jpeg" ? "jpg" : input.file.extension}`
      : `${input.photo_key}.jpg`

    const photoData = new File({
      name: photoName,
      size: Number(input.file.size),
      type: input.file.type,
      extension: input.file.extension,
      content: input.file.base64,
      path: pathFile
    })

    // Redimensionar imagem
    await imageService.resize(photoData, imageResizeOptions)

    await fileStorage.upload({
      file: photoData,
      pathFile,
      type: "chunks"
    })
  }
