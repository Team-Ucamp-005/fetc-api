console.log('Hola mundo')



const getCharacters = async () => {
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1651339658&apikey=35755cd339fd7c676339edf8d57fcc37&hash=324da40eb91c741cbd78f922f02b65f5&limit=50`

  const getData = await fetch(url)

  const data = await getData.json()

  console.log('data', data)

}

const getCharacterName = async () => {

  const input = document.getElementById('personaje').value

  const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${input}&ts=1651339658&apikey=35755cd339fd7c676339edf8d57fcc37&hash=324da40eb91c741cbd78f922f02b65f5&limit=50`

  const getData = await fetch(url)

  const data = await getData.json()

  console.log(data)

  renderData(data.data.results)

}


const renderData = (results) => {
  const container = document.getElementById('container-data')
  container.innerHTML = ''
  results.forEach(item => {
    container.innerHTML += `
      <div>
        <img src="${item.thumbnail.path + '.' + item.thumbnail.extension}" />
        <p>${item.name}</p>
        <p></p>
      </div>
    `
  })
}

const validateInput = () => {
  getCharacters()
}
