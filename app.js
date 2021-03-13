const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
// button.addEventListener('click', addNewJoke)

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
    
}
const getDadJoke = async () => {
    const config = {headers: {Accept: 'application/json'} }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;

}
button.addEventListener('click', addNewJoke)






