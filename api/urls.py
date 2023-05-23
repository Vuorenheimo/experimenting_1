from django.urls import path
from .views import get_data, send_results, my_function

urlpatterns = [
    # Other URL patterns
    path('api/get-data/', get_data, name='get_data'),
    path('api/send-results/', send_results, name='send_results'),
    path('api/my-function/', my_function, name='my_function'),
]
