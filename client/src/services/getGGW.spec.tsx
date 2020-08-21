import React from 'react';
import axios from 'axios';
import getGGW from './getGGW';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('getGGW', () => {
  it('should return correct ggw data', async () => {
    const postcode = '1071AA';
    mock.onGet(`https://api.data.amsterdam.nl/dataselectie/bag/?size=1&postcode=${postcode}`).reply(200, mockResponse);

    const result = await getGGW('1071AA');

    expect(result).toEqual({
      buurtcombinatieNamen: 'IJburg West',
      ggwCode: 'DX16',
      ggwNaam: 'IJburg, Zeeburgereiland'
    });
  });


  it('should return correct ggw data with minimal response', async () => {
    const lessData = {...mockResponse};
    lessData.aggs_list.ggw_code.doc_count = 0;
    lessData.aggs_list.ggw_naam.doc_count = 0;

    const postcode = '1071AA';
    mock.onGet(`https://api.data.amsterdam.nl/dataselectie/bag/?size=1&postcode=${postcode}`).reply(200, lessData);

    const result = await getGGW('1071AA');

    expect(result).toEqual({
      buurtcombinatieNamen: 'IJburg West',
      ggwCode: undefined,
      ggwNaam: undefined
    });
  });





  const mockResponse = {
    "aggs_list": {
      "ggw_code": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
          {
            "key": "DX16",
            "doc_count": 30
          }
        ],
        "doc_count": 1
      },
      "stadsdeel_naam": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
          {
            "key": "Oost",
            "doc_count": 30
          }
        ],
        "doc_count": 1
      },
      "buurt_code": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
          {
            "key": "M35f",
            "doc_count": 30
          }
        ],
        "doc_count": 1
      },
      "openbare_ruimte": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
          {
            "key": "Maria Austriastraat",
            "doc_count": 30
          }
        ],
        "doc_count": 1
      },
      "postcode": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
          {
            "key": "1087JC",
            "doc_count": 30
          }
        ],
        "doc_count": 1
      },
      "buurt_naam": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
          {
            "key": "Haveneiland Noordoost",
            "doc_count": 30
          }
        ],
        "doc_count": 1
      },
      "buurtcombinatie_naam": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
          {
            "key": "IJburg West",
            "doc_count": 30
          }
        ],
        "doc_count": 1
      },
      "stadsdeel_code": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
          {
            "key": "M",
            "doc_count": 30
          }
        ],
        "doc_count": 1
      },
      "buurtcombinatie_code": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
          {
            "key": "M35",
            "doc_count": 30
          }
        ],
        "doc_count": 1
      },
      "ggw_naam": {
        "doc_count_error_upper_bound": 0,
        "sum_other_doc_count": 0,
        "buckets": [
          {
            "key": "IJburg, Zeeburgereiland",
            "doc_count": 30
          }
        ],
        "doc_count": 1
      }
    },
    "object_list": [
      {
        "nummeraanduiding_id": "0363200000511101",
        "naam": "Maria Austriastraat",
        "woonplaats": "Amsterdam",
        "huisnummer": 640,
        "huisletter": "",
        "huisnummer_toevoeging": "",
        "postcode": "1087JC",
        "_openbare_ruimte_naam": "Maria Austriastraat",
        "buurt_naam": "Haveneiland Noordoost",
        "buurtcombinatie_naam": "IJburg West",
        "status": "Verblijfsobject in gebruik",
        "stadsdeel_code": "M",
        "stadsdeel_naam": "Oost",
        "openbare_ruimte_landelijk_id": "0363300000001020",
        "landelijk_id": "0363200000511101",
        "type_adres": "Hoofdadres",
        "centroid": [
          4.99871380058677,
          52.354683686067546
        ],
        "ggw_code": "DX16",
        "ggw_naam": "IJburg, Zeeburgereiland",
        "buurt_code": "M35f",
        "buurtcombinatie_code": "M35",
        "type_desc": "Verblijfsobject",
        "verblijfsobject": "0363010001031777",
        "oppervlakte": 82,
        "bouwblok": "AW32",
        "gebruik": "kantoor",
        "verdieping_toegang": 0,
        "eigendomsverhouding": "Eigendom",
        "geconstateerd": "Nee",
        "in_onderzoek": "Nee",
        "gebruiksdoel": "kantoorfunctie",
        "toegang": "",
        "panden": "0363100012085149",
        "pandnaam": "",
        "bouwjaar": "2006",
        "type_woonobject": "Meerdere woningen",
        "ligging": "Hoekgebouw"
      }
    ],
    "object_count": 30,
    "page_count": 30
  };
});

