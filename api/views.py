from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def api_example(request):
    print(request)
    data = {"message": "Hello from Django!"}
    return JsonResponse(data)