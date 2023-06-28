export type ElementPhotoMobileData = {
  inspection_id: string
  mobile_id: string
  appointment: boolean
  element_id: string
  environment_id?: string
  environment_mobile_id?: string
  environment_key: string
  element_key: string
  photo_key?: string
  order?: number
  date_photo_take?: Date
  file: PhotoData
}

export type PhotoData = {
  name: string
  type: string
  base64?: string
  size: string
  extension: string
  content?: string
  buffer?: Buffer
}

export class ElementPhotoMobile {
  id?: string
  inspection_id: string
  mobile_id: string
  appointment: boolean
  element_id: string
  environment_id?: string
  environment_mobile_id?: string
  environment_key: string
  element_key: string
  photo_key: string
  order: number
  date_photo_take?: Date
  file: PhotoData

  constructor(params: ElementPhotoMobileData) {
    this.inspection_id = params.inspection_id
    this.mobile_id = params.mobile_id
    this.appointment = params.appointment
    this.element_id = params.element_id
    this.environment_id = params?.environment_id ?? ""
    this.environment_mobile_id = params?.environment_mobile_id ?? ""
    this.environment_key = params?.environment_key ?? ""
    this.element_key = params?.element_key ?? ""
    this.photo_key = params?.photo_key ?? ""
    this.order = params?.order ?? 0
    this.date_photo_take = params?.date_photo_take ?? new Date()
    this.file = params.file

    if (this.environment_id) {
      this.environment_mobile_id = ""
    }

    if (this.environment_mobile_id) {
      this.environment_id = ""
    }
  }
}
