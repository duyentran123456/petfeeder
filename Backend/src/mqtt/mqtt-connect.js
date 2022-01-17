const mqtt = require('mqtt')

const client = mqtt.connect('mqtt://localhost:1883', { clientId: 'mqtt-tester' })

client.on('message', function (topic, message) {
  console.log('message is: ' + message)
  console.log('topic is: ' + topic)
})

client.once('connect', function () {
  console.log('connect to mqtt successfully')
})

client.on('error', function (error) {
  console.log('Unable to connect: ' + error)
  process.exit(1)
})

client.subscribe()
client.publish()
