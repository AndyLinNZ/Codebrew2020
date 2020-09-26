import googlemaps
import time

def nearby_hospitals(location):

    API_KEY = 'AIzaSyCFrZTSQKRJ1XHTLoAhId30UcFgZX3fZLk'

    gmaps = googlemaps.Client(key = API_KEY)

    places_result = gmaps.places_nearby(location = location, open_now = False, type = 'hospital', radius = 50000)

    stored_results = []

    for place in places_result['results']:

        place_id = place['place_id']

        my_fields = ['name', 'formatted_address', 'formatted_phone_number', 'website', 'opening_hours', 'geometry']

        places_details = gmaps.place(place_id= place_id , fields= my_fields)

        stored_results.append(places_details['result'])

    return stored_results
