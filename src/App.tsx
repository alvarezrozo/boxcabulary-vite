import 'normalize.css'
import './styles/global.css'

import { useEffect, useState } from 'react'
import data from './words.json'
import './App.scss'
import { shuffle } from './utils/helpers';
import NavBar from './components/molecules/NavBar/NavBar';

interface word {
  spanish: string;
  english: string;
}

const App = () => {
  let wordsToShow = data

  const [spanishWords, setspanishWords] = useState<string[] | null>(null)
  const [englishWords, setenglishWords] = useState<string[] | null>(null)

  useEffect(() => {
    getInitialWords()
  }, [])

  const getInitialWords = () => {
    const gettedWords = getWordsToPlay(5)
    const spanishList = gettedWords.map(e => e.spanish)
    const englishList = gettedWords.map(e => e.english)

    setspanishWords(shuffle(spanishList))
    setenglishWords(shuffle(englishList))
  }

  const getWordsToPlay = (numberOfWords: number): word[] => {
    const listWords: word[] = []

    for (let index = 0; index < numberOfWords; index++) {
      const randomNumber = getRandomNumber(wordsToShow.length)

      const word = takeWord(randomNumber)

      listWords.push(word)
    }

    return listWords
  }

  const takeWord = (index: number): word => {
    const word = wordsToShow[index]

    wordsToShow = wordsToShow.filter(e => e !== word)

    return word
  }

  const getRandomNumber = (limit: number): number => {
    return Math.floor(Math.random() * limit);
  }

  return (
    <div className="words">
      {/* {spanishWords?.map((e, index) => 
        <WordButton
          key={index}
          gridRowPosition={index + 1}
          text={e} 
          languageUsed={'spanish'} />
      )}

      {englishWords?.map((e, index) => 
        <WordButton
          key={index}
          gridRowPosition={index + 1}
          text={e} 
          languageUsed={'english'} />
      )} */}
      <NavBar />
    </div>
  )
}

export default App
