import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocket10.kro.kr');

export async function fetchUserProfile() {
  try {
    const user = await pb.users.get("users")
    console.log("pocketbaseUser : ", user)
    return user
  } catch (err) {
    console.error("Error fetching user profile ", err)

    return null
  }
}