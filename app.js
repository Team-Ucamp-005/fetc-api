console.log('Hola mundo')



const getCharacters = async () => {

  // hash key: md5(ts + private key + public key)

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1651339658&apikey=<public key>&hash=<hash key>&limit=50`

  const getData = await fetch(url)

  const data = await getData.json()

  console.log('data', data)

}

const getCharacterName = async () => {

  const input = ''

  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${input}ts=1651339658&apikey=<public key>&hash=<hash key>&limit=50`

  const getData = await fetch(url)

  const data = await getData.json()

  console.log('data', data)
}

const validateInput = () => {
  getCharacters()
  getCharacterName()
}
