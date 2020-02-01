import { NOTES } from './../../constants';

const randomNote = () => {
  const index = parseInt((Math.random() * NOTES.length).toString());
  return NOTES[index]
}

export const createSequence = () => {
  return NOTES.map((_, idx) => {
    return ({
      name: randomNote(),
      successed: false
    })
  });
}