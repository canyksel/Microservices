const amqp = require("amqplib");
const queueName = process.argv[2] || "jobsQueue"
const data = require("./data.json");

connect_rabbitmq();

async function connect_rabbitmq() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672") //amqp default port -> 5672
        const channel = await connection.createChannel();
        const assertion = await channel.assertQueue(queueName);

        //Mesajın Alınması..
        console.log("Mesaj bekleniyor..");
        channel.consume(queueName, message => {
            const messageInfo = JSON.parse(message.content.toString())
            const userInfo = data.find(u => u.id == messageInfo.description)
            if(userInfo){
                console.log("İşlenen Kayıt", userInfo);
                channel.ack(message)   //mesajın okundu bilgisi(acknowledge)
            }
        });

    } catch (error) {
        console.log("Error", error);
    }

}

