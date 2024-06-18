# mini-instagram

## React infinite loader from REST API

[Codesandbox demo](https://codesandbox.io/s/github/pawelkrystkiewicz/mini-instagram/tree/master/?fontsize=14&hidenavigation=1&theme=dark)

## Quick start
To run this project on your machine  (assuming you have yarn and git installed) run following command in your terminal

```
git clone https://github.com/pawelkrystkiewicz/mini-instagram.git &&  cd ./mini-instagram && yarn && yarn start
```


## Project summary
|                        |                                                     |
|------------------------|-----------------------------------------------------|
| CSS framework          | [Bulma 0.8.0](https://bulma.io/)                    |
| CSS pre-processor      | [SASS](https://sass-lang.com/)                      |
| JS dialect             | [Typescript 3.7.2](https://www.typescriptlang.org/) |
| JS framework           | [React 16.12.0](https://reactjs.org/)               |
| React hooks used       | :heavy_check_mark:                                  |
| React state management | [Context](https://reactjs.org/docs/context.html)    |
| Consumed API           | [shiba.online](https://shiba.online)                |



## Changing some app settings
Go to `src/utils/config.ts` and fiddle with the settings.
Probably the most interesting one will be `defaultFetchCount`
to check app's behavior with different settings.

## Changing some of the app colors
Go to `src/utils/colors.ts`. Now you can change some of them an observe the result.
The `blue` is used for loading indicatior and navbar icons highlight for active path.
The `favoriteRed` is used as liked pictures icon color and as background for likes counter

## Encountered problems
1 . One of the goals of this projects were to use [shiba.online](https://shiba.online) API.
This API does not specify back the callers address in CORS header and therefore must be proxied by some CORS provider that does. Otherwise the browser will not allow to consume data from this API.

Solution: use publicly available [cors-anywhere](https://cors-anywhere.herokuapp.com/)

##### <center>Paweł Krystkiewicz 2019</center>
