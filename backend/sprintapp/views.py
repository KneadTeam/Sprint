from django.shortcuts import render
from django.http import HttpResponse # Make sure to include this import

def homepage(request):
    #return HttpResponse("Hello World: this is the Sprint App.")
    return render(request, "homepage.html")

def createModify(request):
    return render(request, "add.html")
