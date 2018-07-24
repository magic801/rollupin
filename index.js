import first, {sayName, sayAge} from './src/first'
import second from './src/second'
import {version} from './package.json'
import answer from 'the-answer'

console.log(`answer is ${answer}`)

export default function () {
  console.log(`first ${first}`);
  console.log(`name ${sayName()}`);
  console.log(`version ${version}`);
  console.log(`second ${second}`);
}