---
id: kafka-integration
title: Kafka
---

#### Kafka event processing

Whylogs can be seamlessly integrated into your event-driven Kafka architecture.  Shown below is the
heart of a simple shim layer written in Kotlin that consumes events from a Kafka
topic and processes them through whylogs.  Each Kafka event represents a row of named features in an endless
stream of training data.

There are many ways to structure such an integration with Kafka. This example assumes that events are encoded with Avro,
and a single Kafka topic corresponds to a single whylogs model.  It is easy to modify this example to
consume multiple Kafka topics and process them into separate whylogs models.

```kotlin
    /*
    This example is part of a container in private beta.
    Please get in touch if you would like to know more.
    */

    val whylogs = WhyLogsAvroController()
    val props = Properties()

    props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, EnvVars.bootstrapServers)
    props.put(AbstractKafkaSchemaSerDeConfig.SCHEMA_REGISTRY_URL_CONFIG, EnvVars.schemaRegistryURL)
    props.put(ConsumerConfig.GROUP_ID_CONFIG, EnvVars.groupId);

    props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, "true");
    props.put(ConsumerConfig.AUTO_COMMIT_INTERVAL_MS_CONFIG, "1000");
    props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");

    props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer::class.java);
    props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, KafkaAvroDeserializer::class.java);
    props.put(KafkaAvroDeserializerConfig.SPECIFIC_AVRO_READER_CONFIG, false);

    val consumer: Consumer<String, GenericRecord> = KafkaConsumer<String, GenericRecord>(props)
    topic = "transactions"
    model = "model-0"
    consumer.subscribe([topic])
    whylogs.putModel(topic, model)

    try {
        while (true) {
            val records: ConsumerRecords<String?, GenericRecord?> = consumer.poll(Duration.ofMillis(20000))
            for (record in records) {
                whylogs.track(record)
            }
        }
    } finally {
        consumer.close()
    }
```

Whylogs will automatically produce a statistical profile of batches of events, and the batches maybe configured to
span a minute, an hour, or an entire day.  Profiles are mergeable, so it is easy to horizontally scale your
event processing across multiple Kafka partitions.  Just fire up more consumers to produce multiple profiles and they
can be merged to form a statistical picture of your entire event stream.
