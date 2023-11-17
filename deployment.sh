git pull origin main
docker stop coremind-docu-container
docker rm coremind-docu-container
docker rmi coremind-docu
docker build -t coremind-docu:latest .
docker run -d --log-opt max-size=10m --log-opt max-file=5 --name coremind-docu-container -p 8000:80 coremind-docu
