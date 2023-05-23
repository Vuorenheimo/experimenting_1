from django.http import JsonResponse
from .models import Generator
from django.views.decorators.csrf import csrf_exempt

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


@csrf_exempt
def my_function(request):
    if request.method == 'POST':
        selected_values = request.POST.getlist('selectedValues[]')

        # Process the selected values as needed
        result = [1, 2, 3]
        

        return JsonResponse({'result': result})
