// import { loadUser } from '../user';
// import { httpGet } from '../http';

// jest.mock('../http');

// beforeEach(() => {
//   jest.resetAllMocks();
// });

// test('should call loadUser once', () => {
//   httpGet.mockReturnValue(JSON.stringify({}));

//   const response = loadUser(1);
//   expect(response).toEqual({});
//   expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
// });
import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
