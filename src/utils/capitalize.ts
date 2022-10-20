const capitalize = (word: string) => {
  const trimmedWord = word.trim()

  return (trimmedWord.charAt(0).toUpperCase() + trimmedWord.slice(1).toLowerCase());
}

export default capitalize