import { Query } from 'appwrite';
import { account, databases } from './appwrite';

const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;
const USERS_COLLECTION_ID = process.env.NEXT_PUBLIC_USER_COLLECTION_ID;

interface UserData {
  name: string;
  lastname: string;
  bio: string;
  skills: string[];
  role: string;
}

export async function createOrUpdateUser(userData: UserData) {
  try {
    // Get the current user's account information
    const currentUser = await account.get();
    
    // Check if the user already exists in your custom collection
    const existingUser = await databases.listDocuments(
      DATABASE_ID!,
      USERS_COLLECTION_ID!,
      [Query.equal('$id', currentUser.$id)]
    );

    if (existingUser.total === 0) {
      // User doesn't exist, create a new record
      await databases.createDocument(
        DATABASE_ID!,
        USERS_COLLECTION_ID!,
        currentUser.$id,
        {
          name: userData.name,
          lastname: userData.lastname,
          bio: userData.bio,
          skills: userData.skills,
          role: userData.role,
        }
      );
      console.log('New user created in custom collection');
    } else {
      // User exists, you might want to update some fields
      // For this example, we'll just log that the user exists
      console.log('User already exists in custom collection');
    }

    return currentUser;
  } catch (error) {
    console.error('Error in createOrUpdateUser:', error);
    throw error;
  }
}

export async function getUserProfile(userId: string) {
  try {
    const userProfile = await databases.getDocument(
      DATABASE_ID!,
      USERS_COLLECTION_ID!,
      userId
    );
    return userProfile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}

export async function updateUserProfile(userId: string, userData: Partial<UserData>) {
  try {
    const updatedProfile = await databases.updateDocument(
      DATABASE_ID!,
      USERS_COLLECTION_ID!,
      userId,
      userData
    );
    return updatedProfile;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}