# Build Docker Image
docker build -t runnertools_url2pdf .

# Run Image
docker run -p 3002:3000 -d --name runnertools-url2pdf runnertools_url2pdf
