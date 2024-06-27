export class Result<T> {
  public readonly data: T

  private constructor(private readonly props: { value?: any; error?: any }) {
    this.data = props.value
  }

  static ok<T>(value?: T) {
    return new Result<T>({ value })
  }

  static fail<T>(error?: T) {
    return new Result<T>({ error })
  }

  isOk() {
    return this.props.value !== undefined
  }

  isError() {
    return this.props.error !== undefined
  }
}
