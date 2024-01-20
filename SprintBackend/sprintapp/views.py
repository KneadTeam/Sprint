from django.shortcuts import render
from django.http import HttpResponse # Make sure to include this import
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

from .serializers import UserStorySerializer
from .models import UserStory

def homepage(request):
    #return HttpResponse("Hello World: this is the Sprint App.")
    return render(request, "homepage.html")

def createModify(request):
    return render(request, "add.html")

class StoriesAPIView(ListAPIView):
    """
    GET /stories
    """
    serializer_class = UserStorySerializer

    def get_queryset(self):
        return UserStory.objects.all().order_by("completed")

class UpdateStoryApiView(APIView):
    """
    GET /story/<story_id>
    """
    def get(self, request, *args, **kwargs):
        user_story = get_object_or_404(UserStory, id=self.kwargs["story_id"])
        serializer = UserStorySerializer(user_story, data=request.data, partial=True)
        if serializer.is_valid():
            return Response(serializer.data, status=200)
        return Response(status=400, data=serializer.errors)
