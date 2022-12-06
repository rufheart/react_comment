from home.api.views import *
from django.urls import path

urlpatterns = [
    path('comment/',ListClass.as_view(),name='api'),
    path('comment/<int:pk>/',ListClassPK.as_view(),name='apipk'),
    path('comment/<int:pk>/',ListClassPK.as_view(),name='apipk'),

]