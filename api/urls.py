from django.urls import path
from .views import get_data
from .views import send_results

urlpatterns = [
    # Other URL patterns
    path('api/get-data/', get_data, name='get_data'),
    path('api/send-results/', send_results, name='send_results'),
]
