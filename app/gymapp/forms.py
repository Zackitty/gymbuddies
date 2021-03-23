from django import forms
from django.core.exceptions import ValidationError
from .models import User

class SignUp(forms.Form):
  full_name = forms.CharField()
  username = forms.CharField()
  password = forms.CharField()
  weight = forms.IntegerField()
  age = forms.IntegerField()
  gender = forms.CharField()
  goal = forms.CharField()
    #Validation #DataFlair
  def valid_fullname(self):
    fullname = self.cleaned_data['full_name']
    if len(fullname) < 0:
      raise forms.ValidationError("Full Name is too short")
    if len(fullname) > 20:
      raise forms.ValidationError("Full Name is too short")
    if User.objects.exclude(pk=self.instance.pk).filter(username=username).exists():
        raise forms.ValidationError(u'Username "%s" is already in use.' % username) 
    return fullname
  def valid_password(self):
    password = self.cleaned_data['password']
    if len(password) < 0:
      raise forms.ValidationError("Password is too short")
    return password
  def valid_weight(self):
    weight = self.cleaned_data['weight']
    if len(weight) < 0:
      raise forms.ValidationError("Enter a Weight")
    for char in weight:
      if not char.isdigit():
        raise forms.ValidationError("Weight must be an integer")
  