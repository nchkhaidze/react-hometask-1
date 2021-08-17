import { pipeDuration } from './pipeDuration';

describe('pipeDuration', () => {
  test('should return correct duration format', () => {
    expect(pipeDuration(60)).toEqual('01:00');
    expect(pipeDuration(90)).toEqual('01:30');
  });
});
