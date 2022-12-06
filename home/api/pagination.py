from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class BasicPagination(PageNumberPagination):
    page_size = 2