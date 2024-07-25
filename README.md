# URL to PDF Generator

This Node.js project uses Puppeteer to generate a PDF from a given website URL. The application is hosted on port 3000 and can be run inside a Docker container.

## Getting Started

### Prerequisites

- Node.js
- Docker

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ReinhardRanner/url2pdf
    cd url2pdf
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

### Running the Application

#### Using Node.js

1. **Run the application:**

    ```bash
    node index.js
    ```

2. **Generate a PDF:**

    Open your browser and navigate to:

    ```
    http://localhost:3000?url=https://www.google.com
    ```

#### Using Docker

1. **Build the Docker image:**

    ```bash
    docker build -t url2pdf .
    ```

2. **Run the Docker container:**

    ```bash
    docker run -p 3000:3000 url2pdf
    ```

3. **Generate a PDF:**

    Open your browser and navigate to:

    ```
    http://www.yourwebsite.com:3000?url=https://www.google.com
    ```
