# cmsi-402
Loyola Marymount University, Los Angeles
Senior Project Laboratory
Joshua Kuroda

## The Tube
_Web platform for user and site-curated YouTube video "serials"_

### Requirements (Mac OS X)

Install `npm` if you don't already have them installed:
```
brew install node
```

### Installation

Download and install the server:
```
git clone https://github.com/jkkealii/cmsi-402.git
cd /cmsi-402
npm install
```

Configure the server with a `.env` file at the root of the repo, alongside `package.json`:
```
DATABASE_URL=postgres://your_username@localhost:5432/tube
```

### Getting Started

Start the server:
```
npm start
```

In browser, go to `localhost:8080`