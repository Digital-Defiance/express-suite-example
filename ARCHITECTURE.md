# Architecture

## Project Structure

```
digital-defiance-express-suite-starter/
├── express-suite-starter-lib/
├── express-suite-starter-react/
├── express-suite-starter-api/
├── express-suite-starter-react-lib/
├── express-suite-starter-api-lib/
├── express-suite-starter-api-e2e/
├── express-suite-starter-react-e2e/
├── express-suite-starter-inituserdb/
```

## Technology Stack

- **Frontend:** React 19, TypeScript, Material-UI
- **Backend:** Express 5, Node.js
- **Database:** MongoDB
- **Build:** Nx, Vite
- **Testing:** Jest, Playwright

## Data Flow

1. React frontend makes API calls
2. Express API processes requests
3. MongoDB stores data
4. Shared libraries provide common logic

## Development

See README.md for development commands.
