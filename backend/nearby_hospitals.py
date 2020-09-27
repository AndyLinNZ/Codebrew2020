import googlemaps
import time
import random
from dotenv import load_dotenv
import os

TYPES = ["High", "Medium", "Low", "Not Available"]

def nearby_hospitals(location):

    load_dotenv()
    API_KEY = os.getenv("API_KEY")

    gmaps = googlemaps.Client(key = API_KEY)

    places_result = gmaps.places_nearby(location = location, open_now = False, type = 'hospital', radius = 50000)

    stored_results = []

    for place in places_result['results']:

        place_id = place['place_id']

        my_fields = ['name', 'formatted_address', 'formatted_phone_number', 'website', 'opening_hours', 'geometry']

        places_details = gmaps.place(place_id= place_id , fields= my_fields)

        places_details['result']['vaccineLevel'] = random.choice(TYPES)

        stored_results.append(places_details['result'])

    return stored_results
