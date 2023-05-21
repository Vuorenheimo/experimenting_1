from django.http import JsonResponse
from .models import Generator

# Create your views here.

def get_data(request):
    data = Generator.objects.all().values()  # Retrieve all data from the table

    return JsonResponse({'data': list(data)})


def generate_password():
    return "Hello there!"


def send_results(request):
    # Call the desired function here
    result = generate_password()

    # Return the result as a JSON response
    return JsonResponse({'result': result})
