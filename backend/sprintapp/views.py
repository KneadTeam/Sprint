from django.shortcuts import render
from django.http import HttpResponse # Make sure to include this import
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from django.db.models import Sum


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
    
class ProgressApiView(APIView):
    def get(self, request, *args, **kwargs):
        total_points = UserStory.objects.aggregate(Sum('points'))['points__sum'] or 0
        completed_stories = UserStory.objects.filter(completed=True).aggregate(Sum('points'))['points__sum']
        completed_percent = completed_stories/total_points*100
        
        integer_part = int(completed_percent)
        decimal_part = completed_percent - integer_part

        if decimal_part >= 0.5:
            completed_percent =  round(completed_percent + 0.5)  # Round up
        else:
            completed_percent =  round(completed_percent)  # Round down
        
        return Response({
            'completed_percent': completed_percent  
        })

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

    def put(self, request, *args, **kwargs):
        user_story = get_object_or_404(UserStory, id=self.kwargs["story_id"])
        serializer = UserStorySerializer(user_story, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(status=400, data=serializer.errors)

    def post(self, request, *args, **kwargs):
        # Unique id is required
        try:
            user_story = UserStory.objects.create(id=self.kwargs["story_id"])
        except:
            return Response({"detail": "Invalid data: a unique id is required."}, status=400)

        serializer = UserStorySerializer(user_story, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(status=400, data=serializer.errors)

    def delete(self, request, *args, **kwargs):
        user_story = get_object_or_404(UserStory, id=self.kwargs["story_id"])
        user_story.delete()
        return Response(status=204)
