/**
 * UserException
 * @param {string} message the message to Throw
 * @param {string} [type='UserException'] the type of exception
 * @class UserException
 */
class UserException {
  constructor(message, type = 'UserException') {
    this.message = message;
    this.type = type;
  }
}
export default UserException;
