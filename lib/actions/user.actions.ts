import { connectToDatabase } from "../database"
import User from "../database/models/user.model"

interface CreateUserParams {
  clerkId: string
}

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase()

    const newUser = await User.create(user)
    return JSON.parse(JSON.stringify(newUser))
  } catch (error: any) {
    throw new Error(error)
  }
}
