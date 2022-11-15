from home.api.views import *
from django.urls import path

urlpatterns = [
    path('comment/',ListClass.as_view(),name='api'),
    # path('<int:pk>/',ListClass.as_view(),name='api')
]