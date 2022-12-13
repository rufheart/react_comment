from wsgiref.util import request_uri
from rest_framework import permissions

class MyPermissions(permissions.BasePermission):
    print('permisson isledi')
    def has_permission(self, request, view):
        
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.method is not permissions.SAFE_METHODS :
            print('permisson post isledi','reuqest')
            return True    

    def has_object_permission(self, request, view,obj):
        print(request.user.id, obj.username.id,'per isledi')
        if request.method in permissions.SAFE_METHODS or request.user.is_authenticated:
            return True
        if request.user.id == obj.username.id:
            print('yes')
            return True