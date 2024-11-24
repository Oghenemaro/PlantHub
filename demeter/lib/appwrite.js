import { compatibilityFlags } from "react-native-screens";
import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.planthub.demeter',
    projectId: '673e1ee700398484941b',
    databaseId: '6740bb17000a0a01519d',
    userCollectionId: '6740bd1000240148a54e',
    storageId: '6740c105003b370bb38b'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

export const createUserDemo = (() => {
        // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
})

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, username)
        if(!newAccount) throw Error;
        const avatarUrl = avatar.getInitials();
        const newUser = await database.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountid: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        );
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function deleteSession() {
    await account.deleteSessions()
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
    }
    
}
