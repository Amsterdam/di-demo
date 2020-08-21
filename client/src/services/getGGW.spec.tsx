import React from 'react';
import axios from 'axios';
import getGGW from './getGGW';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(axios);


describe('getGGW', () => {
  it('should return correct ggw data', async () => {
    const postcode = '1071AA';
    mock.onGet(`https://api.data.amsterdam.nl/dataselectie/bag/?size=1&postcode=${postcode}`).reply(200, {
      irma: 'irma-server'
    });

    const mockData = {
      test: 'yo'
    };

    const result = await getGGW('1071AA');

    expect(result).toEqual(mockData);
  });
});
