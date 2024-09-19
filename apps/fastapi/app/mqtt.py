import asyncio
from datetime import datetime
import json
import logging
import random
import paho.mqtt.client as mqtt
from threading import Thread

logger = logging.getLogger("uvicorn.info")

# broker: str = "121.167.176.201"
# port = 18810
# topic = "#"


async def periodic_message_generator(message_queue: asyncio.Queue):
    while True:
        await message_queue.put(json.dumps(generate_fake_data()))
        logger.info(f"Generated and pushed message")
        await asyncio.sleep(1)


def start_mqtt_loop(loop, message_queue):
    asyncio.set_event_loop(loop)
    loop.run_until_complete(periodic_message_generator(message_queue))


def include_mqtt(message_queue: asyncio.Queue):
    main_loop = asyncio.new_event_loop()
    mqtt_thread = Thread(target=start_mqtt_loop, args=(main_loop, message_queue))
    mqtt_thread.start()


def generate_float_list(min_value: float, max_value: float, length: int = 5000) -> list:
    return [random.uniform(min_value, max_value) for _ in range(length)]


def generate_fake_data():
    return {
        "x": generate_float_list(0, 1.0),
        "y": generate_float_list(0, 1.0),
        "z": generate_float_list(0, 1.0),
        "current": generate_float_list(0.0, 0.1),
        "time": [datetime.now().isoformat()],
    }


# def connect_mqtt(loop: asyncio.AbstractEventLoop, message_queue: asyncio.Queue):
#     def on_connect(client, userdata, flags, rc):
#         logger.debug("Attempting to connect to MQTT broker...")
#         if rc == 0:
#             client.subscribe(topic)
#             logger.info(f"Connected to MQTT broker and subscribed to topic: {topic}")
#         else:
#             logger.error(f"Failed to connect to MQTT broker, return code {rc}")

#     def on_message(client, userdata, msg):
#         asyncio.run_coroutine_threadsafe(
#             message_queue.put(json.dumps(generate_fake_data())), loop
#         )
#         # if msg.topic == "data_fake":
#         #     asyncio.run_coroutine_threadsafe(message_queue.put(message), loop)

#     client = mqtt.Client()
#     client.on_connect = on_connect
#     client.on_message = on_message

#     client.connect(broker, port, 60)
#     client.loop_start()
