from django.db import models 
from django.contrib.auth import get_user_model

User = get_user_model()

class ABS(models.Model):
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    class Meta():
        abstract = True

class Comments(ABS):    #Əsas Comment          
    username = models.ForeignKey(User, related_name='user1',on_delete=models.CASCADE)
    number = models.IntegerField()
    comment1 = models.TextField()

    def __str__(self):
        return self.comment1

class Reply(ABS):   #Commentin Commenti
    username = models.ForeignKey(User, related_name='user2',on_delete=models.CASCADE)
    comment2 = models.ForeignKey(Comments,related_name='comments1',on_delete=models.CASCADE)       #Commente bagli olan comment
    number2 = models.IntegerField()
    reply = models.TextField()

    def __str__(self) :
        return self.reply




