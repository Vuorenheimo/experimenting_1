from django.http import JsonResponse
from .models import Generator

# Create your views here.

def get_data(request):
    data = Generator.objects.all().values()  # Retrieve all data from the table

    return JsonResponse({'data': list(data)})
