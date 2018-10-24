import Logger from '@openmind/litelog';
import Component from '../../src/components/component';

class HarryPotter extends Component {
  static magic() {
    Logger.warn('Stupeficum');
  }

  constructor(element) {
    super(element);
    this.Messages = {
      magic: HarryPotter.magic,
    };
    this.on('click', () => {
      this.emit('magic');
    });
  }
}
export default HarryPotter;
