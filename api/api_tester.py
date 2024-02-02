import requests

def get_tourist_attractions(api_key, city_name):
    openweathermap_api_url = "http://api.openweathermap.org/data/2.5/weather"

    params = {
        'q': city_name,
        'appid': api_key,
    }

    try:
        response = requests.get(openweathermap_api_url, params=params, timeout=10)
        response.raise_for_status()

        data = response.json()

        if 'main' in data and 'temp' in data['main']:
            temperature = data['main']['temp']
            return f"The current temperature in {city_name} is {temperature}°C"
        else:
            print("Invalid API response:", data)
            return None

    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None

def main():
    api_key = "ac2bd09cad41bc30cb90a68bef0e9329"  # Replace with your actual API key
    city_name = input("Enter the city name: ")

    tourist_attractions = get_tourist_attractions(api_key, city_name)

    if tourist_attractions:
        print("\nTourist Information:")
        print(tourist_attractions)
    else:
        print("Failed to retrieve tourist information.")

if __name__ == "__main__":
    main()
