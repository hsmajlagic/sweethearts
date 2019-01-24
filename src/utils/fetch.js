import request from 'superagent'
import constants from './constants.js'

const URL = {
  [constants.ANIMAL.DOG]: 'https://random.dog/woof.json',
  [constants.ANIMAL.CAT]: 'https://aws.random.cat/meow'
}

export default async (animal) => {
  try {
    const result = await request.get(URL[animal]);
    if (result.ok && result.body) {
      return {
        url: result.body.url || result.body.file, // one API returns 'url' field, the other one return 'file'
        alt: animal
      }
    }
  } catch (error) {

  }
  return null;
}
