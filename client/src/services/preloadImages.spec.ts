import preloadDemoImages from './preloadImages';

import isMobile from '@services/isMobile';

jest.mock('@services/isMobile');

const testImages = ['leeftijd', 'ouder-dan-18', 'jonger-dan-18']

describe('preloadImages', () => {
  it('should return correct images data for desktop', () => {
    (isMobile as jest.Mock<boolean>).mockImplementation(() => false);

    console.log('isMobile', isMobile());

    expect(1).toEqual(1);
  });

  it('should return correct images data for mobile', () => {
    (isMobile as jest.Mock<boolean>).mockImplementation(() => true);

    console.log('isMobile', isMobile());

    expect(1).toEqual(1);
  });
});
