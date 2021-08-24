import { UserCredentials } from '../pages/Login';

const URL = 'http://localhost:3001/';

async function genericFetch(url: string, options?: RequestInit) {
  return await (
    await fetch(url, { ...options, credentials: 'include' })
  ).json();
}

/* 

You need to use `credentials include` in your fetch options, if you save your JWT token in a HTTP only cookie!! 

fetch(URL, { method: "POST", credentials: "include" });

*/

async function genericPost(url: string, payload: unknown) {
  return await genericFetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

export async function getUserPosts() {
  return await (
    await genericFetch(URL + 'posts')
  ).data;
}

export async function postLoginUser(userCreds: UserCredentials) {
  return await (
    await genericPost(URL + 'login', userCreds)
  ).data;
}

export async function getLogoutUser() {
  return await (
    await genericFetch(URL + 'logout')
  ).data;
}
