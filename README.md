Microservices practices from youtube educational videos.

### For RabbitMQ ###
Creating Docker image:
docker run -it --rm --name rabbitmqexample -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management

### For Apache-Kafka ###
Creating Docker images:
--Zookeper installation:
docker run --name zookeeper -p 2181:2181 zookeeper

--Kafka installation:
docker run --name kafka -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.39:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.39:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
npm install --save kafkajs

