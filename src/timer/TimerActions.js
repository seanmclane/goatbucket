export const START_TIMER = 'START_TIMER';

export function startTimer(accountId) {
  return {type: 'START_TIMER', accountId: accountId};
}
