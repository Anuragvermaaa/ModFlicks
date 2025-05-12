const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;

export const updateSearchCount = async () => {
  console.log(databaseId, collectionId, projectId);
};
