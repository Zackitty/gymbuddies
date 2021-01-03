
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.contrib import admin
from gymapp import views
urlpatterns = [
    path(r'admin/', admin.site.urls),
    path('', include('gymapp.urls'))
]