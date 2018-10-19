/**
 * Should extends Error
 */
class UserException {
  constructor(msg, type = 'UserException') {
    this.message = msg;
    this.type = type;
  }
}
export default UserException;
