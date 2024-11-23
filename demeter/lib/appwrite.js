import { compatibilityFlags } from "react-native-screens";
import { Client, Account, ID } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.planthub.demeter',
    projectId: '673e1ee700398484941b',
    databaseId: '6740bd1000240148a54e',
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

export const createUser = (() => {
        // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
})


