import * as actions from './index'
const GET_USER =  "GET_USER";
describe('actions', () => {
  it('GET_USER action in redux', () => {
    const username = 'trungduyadc';
    const access_token = 'hi';
    const token_type = 'bearer';
    const expectedAction = {
      type: GET_USER,
      username,
      access_token,
      token_type
    }
    expect(actions.getUser('trungduy',access_token,token_type)).toEqual(expectedAction)
  })
})