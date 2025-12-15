# Architecture

## Project Structure

```
digitaldefiance-express-suite-example/
├── express-suite-example-lib/
├── express-suite-example-react/
├── express-suite-example-api/
├── express-suite-example-react-lib/
├── express-suite-example-api-lib/
├── express-suite-example-api-e2e/
├── express-suite-example-react-e2e/
├── express-suite-example-inituserdb/
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
