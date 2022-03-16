const crypto = require("crypto");
const DB = require("./db");
const db = new DB("profiles.json");

const profilesList = async () => {
  return await db.read();
};

const addProfile = async (body) => {
  const profiles = await db.read();
  const newProfile = {
    id: crypto.randomUUID(),
    ...body,
  };
  profiles.push(newProfile);
  await db.write(profiles);
  return newProfile;
};

// const getProfileById = async (profileId) => {};

// const removeProfile = async (profileId) => {};

// const updateProfile = async (profileId, body) => {};

module.exports = {
  profilesList,
  addProfile,
  // getProfileById,
  // removeProfile,
  // updateProfile,
};
