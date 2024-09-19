import { account } from './appwrite';
import { OAuthProvider } from 'appwrite';
import { createOrUpdateUser } from './users';

export async function loginWithGithub() {
  try {
    const session = await account.createOAuth2Session(OAuthProvider.Github, 'http://localhost:3000/dashboard', 'http://localhost:3000/login');
    
    // After successful login, create or update user in custom collection
    await createOrUpdateUser({
      name: '', // These fields will be empty initially
      lastname: '',
      bio: '',
      skills: [],
      role: 'participant', // Default role
    });

    return session;
  } catch (error) {
    console.error('GitHub OAuth error:', error);
    throw error;
  }
}

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}

export async function logout() {
  try {
    await account.deleteSession('current');
  } catch (error) {
    console.error('Logout error:', error);
  }
}