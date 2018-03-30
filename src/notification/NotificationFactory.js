import colors from '../styles/colors';

let id = 0;

const defaultOptions = {
  color: `${colors.green}`
};

export default function createNotification(options) {
  return {
    ...defaultOptions,
    ...options,
    id: id++
  }
}