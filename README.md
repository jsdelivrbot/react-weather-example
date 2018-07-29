# React Weather Example

Following Stephen Grider's React/Redux Udemy course: [React and Redux](https://www.udemy.com/react-redux/)?

## Getting Started

```
> npm install
> npm start
```

You will also need to add API keys to the .env file for:

- Google Maps (get a key here: http://console.developers.google.com)
- Open Weather Maps (get a key here: https://openweathermap.org/api)

## Updating .env file

When adding new variables ot the .env file, ensure it does not contain any sensitive data and then run the following to track new changes:

```bash
# Enable tracking of the changes
git update-index --no-assume-unchanged ./.env
# Make your changes to the .env file, then commit:
git add ./.env
git commit -m "Updated .env file"
# Now restore the unchanged status
git update-index --assume-unchanged ./.env
```
