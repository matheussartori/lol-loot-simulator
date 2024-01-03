export interface AddAccount {
  add: (params: AddAccountParams) => Promise<void>
}

export interface AddAccountParams {
  username: string
  password: string
}
