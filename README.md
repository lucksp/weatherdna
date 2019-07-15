# WeatherDNA

Build a weatherApp using the API from `https://www.metaweather.com/`.

1. The `/api/location/search/?query=${query}` fetches the location entered by the user, returning results.
2. The `/api/location/${locationId}/` fetches the actual weather detail for the City selected by the user.

## To run

- Assuming `npm` version 6.4.1 & up
- Run `npm install`
- Run `npm run start` for development environment.
- Run `npm run build` for optimized production build.
