from django.urls import path

from . import views # . referes to the current module we are in

urlpatterns = [
    path("", views.homepage, name="homepage"),
    path("add", views.createModify, name="createModify"),

    path("stories", views.StoriesAPIView.as_view(), name="list_stories_api"),
    path("story/<str:story_id>", views.UpdateStoryApiView.as_view(), name="story_api"),
    path("progress", views.ProgressApiView.as_view(), name="progress_api"),
]
