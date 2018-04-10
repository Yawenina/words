/**
 * Created by yawenina on 4/8/18.
 */
import axios from 'axios';
import { Word } from './modules';
const userId = '5ac5efc9d9bfac65dba47f84';

export const addWord = (payload: Word) => {
  const word = { ...payload, user: userId };
  return axios.post('/api/words/add', word);
};

export const getWordList = (userId: string = '5ac5efc9d9bfac65dba47f84') => {
  return axios.get(`/api/words?user=${userId}`);
};
