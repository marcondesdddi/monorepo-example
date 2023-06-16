import {
  RequestBodyOptionalError,
  RequiredArrayError,
  RequiredFieldError,
  RequiredObjectError,
  RequiredPropertiesBodyError
} from "@/application/errors"
import { Validator } from "@/application/validation"

export class Required implements Validator {
  constructor(readonly value: any, readonly fieldName?: string) {}

  validate(): Error | undefined {
    if (this.value === null || this.value === undefined) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

export class RequiredString extends Required {
  constructor(override readonly value: string, override readonly fieldName?: string) {
    super(value, fieldName)
  }

  override validate(): Error | undefined {
    if (super.validate() !== undefined || this.value === "") {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

export class RequiredBuffer extends Required {
  constructor(override readonly value: Buffer, override readonly fieldName?: string) {
    super(value, fieldName)
  }

  override validate(): Error | undefined {
    if (super.validate() !== undefined || this.value.length === 0) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

export class RequiredBodyObject {
  constructor(private readonly value: any, private readonly fieldsRequired: string[]) {}

  validate(): Error | undefined {
    if (typeof this.value !== "object" || Object.keys(this.value).length === 0) {
      return new RequiredObjectError()
    }

    for (const field of this.fieldsRequired) {
      const isEmpty = this.value[field] === ""
      const isNull = this.value[field] === null
      const isUndefined = this.value[field] === undefined
      if (isEmpty || isNull || isUndefined || !Object.keys(this.value).includes(field)) {
        return new RequiredObjectError(field)
      }
    }
  }
}

export class RequiredArrayObject {
  constructor(private readonly value: any[], private readonly fieldsRequired: string[]) {}

  validate(): Error | undefined {
    if (this.value.length === 0) {
      return new RequiredArrayError()
    }

    for (const arrayItem of this.value) {
      for (const field of this.fieldsRequired) {
        const isEmpty = arrayItem[field] === ""
        const isNull = arrayItem[field] === null
        const isUndefined = arrayItem[field] === undefined
        if (isEmpty || isNull || isUndefined || !Object.keys(arrayItem).includes(field)) {
          return new RequiredArrayError(field)
        }
      }
    }
  }
}

export class RequiredPropertiesObject {
  constructor(private readonly value: any, private readonly fieldsRequired: string[]) {}

  validate(): Error | undefined {
    if (typeof this.value !== "object" || Object.keys(this.value).length === 0) {
      return new RequiredObjectError()
    }

    for (const field of this.fieldsRequired) {
      if (!Object.keys(this.value).includes(field)) {
        return new RequiredPropertiesBodyError(field)
      }
    }
  }
}

export class RequiredPropertyOptional {
  constructor(private readonly value: any, private readonly fieldsRequired: string[]) {}

  validate(): Error | undefined {
    let result = false
    for (const key of this.fieldsRequired) {
      result = Object.keys(this.value).includes(key)
      if (result) break
    }

    if (!result) return new RequestBodyOptionalError()
  }
}

export class RequiredCnpjOrCpf implements Validator {
  constructor(readonly value: any) {}

  validate(): Error | undefined {
    if (typeof this.value !== "object" || Object.keys(this.value).length === 0) {
      return new RequiredObjectError()
    }

    if (
      (!("cnpj" in this.value) && !("cpf" in this.value)) ||
      (!this.value.cnpj && !this.value.cpf)
    ) {
      return new RequiredFieldError("CPF ou CNPJ")
    }
  }
}
