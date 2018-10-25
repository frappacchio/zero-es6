import Logger from '@openmind/litelog';
import Component from '../../src/components/component';

const Log = new Logger('Hogwarts');

class HarryPotter extends Component {
  static magic() {
    Log.warn('STUPEFICIUM');
  }

  constructor(element) {
    super(element);
    this.Messages = {
      magic: HarryPotter.magic,
    };
    this.on('click', () => {
      this.emit('magic');
    });
    Log.log(this.element.data);
  }
}
export default HarryPotter;
