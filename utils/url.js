// Get the random url TODO go to utils
export const getRandomUrl = () => {
  const urls = [    
  'https://www.lempire.com/',
  'https://www.lemlist.com/',
  'https://www.lemverse.com/',
  'https://www.lemstash.com/',
  ];
  return urls[Math.floor(Math.random() * urls.length)]
}